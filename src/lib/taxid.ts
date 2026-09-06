function normalizeTaxID(country: string, raw: string) {
  const code = country.toUpperCase().trim();
  let s = raw.toUpperCase().trim().replace(/\s+/g, '');
  if (code === 'CL') return s.replace(/\./g, '');
  return s.replace(/[^A-Z0-9]/g, '');
}

function validChileRUT(raw: string) {
  let s = raw.toUpperCase().replace(/[.\s]/g, '');
  let body = '';
  let dv = '';
  const dash = s.lastIndexOf('-');
  if (dash > 0) {
    body = s.slice(0, dash);
    dv = s.slice(dash + 1);
  } else if (s.length >= 2) {
    body = s.slice(0, -1);
    dv = s.slice(-1);
  } else {
    return false;
  }
  if (body.length < 7 || body.length > 8 || dv.length !== 1) return false;
  if (!/^\d+$/.test(body)) return false;
  let sum = 0;
  let multi = 2;
  for (let i = body.length - 1; i >= 0; i -= 1) {
    sum += Number(body[i]) * multi;
    multi += 1;
    if (multi > 7) multi = 2;
  }
  const rest = 11 - (sum % 11);
  const expect = rest === 11 ? '0' : rest === 10 ? 'K' : String(rest);
  return dv === expect;
}

export function looksCompleteTaxID(country: string, raw: string) {
  const code = country.toUpperCase().trim();
  const s = raw.toUpperCase().replace(/[.\s]/g, '');
  if (!s) return false;
  if (code === 'CL') {
    const dash = s.lastIndexOf('-');
    if (dash > 0) return dash >= 7;
    return s.length >= 8;
  }
  return normalizeTaxID(country, raw).length >= 3;
}

export function validateTaxID(country: string, raw: string): 'ok' | 'required' | 'cl' | 'short' | 'long' {
  const norm = normalizeTaxID(country, raw);
  if (!norm) return 'required';
  if (country.toUpperCase().trim() === 'CL') return validChileRUT(norm) ? 'ok' : 'cl';
  if (norm.length < 3) return 'short';
  if (norm.length > 32) return 'long';
  return 'ok';
}

export function taxErrorMessage(
  code: ReturnType<typeof validateTaxID>,
  t: (key: string) => string,
) {
  if (code === 'ok') return '';
  if (code === 'cl') return t('errTaxCL');
  if (code === 'short') return t('errTaxShort');
  if (code === 'long') return t('errTaxLong');
  return t('errTax');
}
