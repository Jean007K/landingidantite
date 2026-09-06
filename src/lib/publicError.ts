const LEAKY = /request failed|status code|network error|axios|econnrefused|etimedout|stack|panic:|sqlstate|pq:|turnstile|cloudflare/i;

export function publicSignupError(raw: string, t: (key: string) => string) {
  const msg = String(raw || '').trim();
  if (!msg || LEAKY.test(msg) || msg.length > 180) return t('errGeneric');
  const lower = msg.toLowerCase();
  if (lower.includes('rut') || lower.includes('número fiscal') || lower.includes('numero fiscal') || lower.includes('tax')) {
    return t('errTaxServer');
  }
  if (lower.includes('ya tienes cuenta') || lower.includes('duplicate') || lower.includes('unique') || lower.includes('conflicto')) {
    return t('errConflict');
  }
  if (lower.includes('anti-bot') || lower.includes('captcha') || lower.includes('verificación')) {
    return t('errCaptcha');
  }
  if (lower.includes('correo') || lower.includes('email') || lower.includes('gmail')) {
    return t('errFreeMail');
  }
  return msg;
}

export function isTaxSignupError(raw: string) {
  const lower = String(raw || '').toLowerCase();
  return lower.includes('rut') || lower.includes('número fiscal') || lower.includes('numero fiscal') || lower.includes('tax id') || lower.includes('fiscal');
}
