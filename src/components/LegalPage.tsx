import Link from 'next/link';

export type LegalBlock = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
};

export type LegalDoc = {
  title: string;
  version: string;
  updated: string;
  intro: string[];
  blocks: LegalBlock[];
  related?: { href: string; label: string }[];
};

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <article className="bg-white px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{doc.title}</h1>
        <p className="mt-3 text-sm text-gray-500">Versión {doc.version} · Última actualización: {doc.updated}</p>
        {doc.intro.map((p) => (
          <p key={p.slice(0, 40)} className="mt-6">{p}</p>
        ))}
        {doc.blocks.map((block) => (
          <section key={block.title || block.paragraphs?.[0]?.slice(0, 24)} className="mt-12">
            {block.title ? <h2 className="text-2xl font-bold tracking-tight text-gray-900">{block.title}</h2> : null}
            {block.paragraphs?.map((p) => (
              <p key={p.slice(0, 48)} className="mt-4">{p}</p>
            ))}
            {block.bullets ? (
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {block.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {block.table ? (
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr>
                      {block.table.headers.map((h) => (
                        <th key={h} className="border-b border-gray-200 py-2 pr-4 font-semibold text-gray-900">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.table.rows.map((row) => (
                      <tr key={row.join('|')}>
                        {row.map((cell) => (
                          <td key={cell} className="border-b border-gray-100 py-2 pr-4 align-top">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </section>
        ))}
        {doc.related?.length ? (
          <nav className="mt-14 border-t border-gray-200 pt-8" aria-label="Otras políticas">
            <p className="text-sm font-semibold text-gray-900">También puede leer</p>
            <ul className="mt-3 space-y-2">
              {doc.related.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-medium text-primary hover:underline">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </article>
  );
}
