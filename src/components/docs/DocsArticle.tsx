import Link from 'next/link';
import {
  ArrowRight,
  CircleCheck,
  Info,
  TriangleAlert,
} from 'lucide-react';
import type { DocBlock, DocPage } from '@/lib/docs';
import CodeBlock from './CodeBlock';

function inline(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={index}
          className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.88em] font-medium text-slate-800"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

const calloutStyles = {
  info: {
    icon: Info,
    wrap: 'border-blue-200 bg-blue-50/70 text-blue-950',
    iconClass: 'text-[#0046FB]',
  },
  warning: {
    icon: TriangleAlert,
    wrap: 'border-amber-200 bg-amber-50/80 text-amber-950',
    iconClass: 'text-amber-600',
  },
  success: {
    icon: CircleCheck,
    wrap: 'border-emerald-200 bg-emerald-50/80 text-emerald-950',
    iconClass: 'text-emerald-600',
  },
};

function Block({ block }: { block: DocBlock }) {
  if (block.type === 'paragraph') {
    return <p className="my-5 max-w-[72ch] text-[16px] leading-7 text-slate-600">{inline(block.text)}</p>;
  }

  if (block.type === 'list') {
    return (
      <ul className="my-5 max-w-[72ch] space-y-3 text-[16px] leading-7 text-slate-600">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0046FB]" aria-hidden="true" />
            <span>{inline(item)}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === 'steps') {
    return (
      <ol className="my-7 max-w-[72ch]">
        {block.items.map((item, index) => (
          <li key={item.title} className="relative flex gap-4 pb-6 last:pb-0">
            {index < block.items.length - 1 && (
              <span className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px bg-blue-100" aria-hidden="true" />
            )}
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF1FF] text-sm font-bold text-[#0046FB]">
              {index + 1}
            </span>
            <div className="pt-0.5">
              <h3 className="text-[15px] font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-1 text-[15px] leading-6 text-slate-600">{inline(item.description)}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === 'code') {
    return <CodeBlock title={block.title} language={block.language} code={block.code} />;
  }

  if (block.type === 'callout') {
    const style = calloutStyles[block.tone];
    const Icon = style.icon;
    return (
      <div className={`my-6 flex max-w-[72ch] gap-3 rounded-xl border p-4 ${style.wrap}`}>
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${style.iconClass}`} aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold">{block.title}</p>
          <p className="mt-1 text-sm leading-6 opacity-85">{inline(block.text)}</p>
        </div>
      </div>
    );
  }

  if (block.type === 'endpoint') {
    const methodClass = block.method === 'POST'
      ? 'bg-[#0046FB] text-white'
      : 'bg-emerald-100 text-emerald-800';
    return (
      <div className="my-6 max-w-[72ch] border-y border-slate-200 py-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`rounded-md px-2.5 py-1 font-mono text-xs font-bold ${methodClass}`}>{block.method}</span>
          <code className="break-all font-mono text-[14px] font-semibold text-slate-900">{block.path}</code>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">{block.description}</p>
      </div>
    );
  }

  if (block.type === 'table') {
    return (
      <div className="my-6 max-w-[72ch] overflow-x-auto rounded-xl border border-slate-200 [scrollbar-color:#94A3B8_#F8FAFC]">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-slate-900">
            <tr>
              {block.headers.map((header) => (
                <th key={header} scope="col" className="border-b border-slate-200 px-4 py-3 font-semibold">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="align-top">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={`px-4 py-3.5 leading-6 ${cellIndex === 0 ? 'font-medium text-slate-900' : 'text-slate-600'}`}>
                    {inline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="my-7 max-w-[72ch] divide-y divide-slate-200 border-y border-slate-200">
      {block.items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex items-start justify-between gap-5 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FB] focus-visible:ring-offset-4"
        >
          <span>
            <span className="block text-[15px] font-semibold text-slate-950 group-hover:text-[#0046FB]">{item.title}</span>
            <span className="mt-1 block text-sm leading-6 text-slate-600">{item.description}</span>
          </span>
          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0046FB]" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}

export default function DocsArticle({ page }: { page: DocPage }) {
  return (
    <article className="min-w-0">
      <header className="border-b border-slate-200 pb-9">
        <h1 className="max-w-[18ch] text-balance text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-[44px] sm:leading-[1.1]">
          {page.title}
        </h1>
        <p className="mt-4 max-w-[66ch] text-lg leading-8 text-slate-600">{page.description}</p>
        {page.slug === '' && (
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#primera-sesion"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#0046FB] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#003CCF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FB] focus-visible:ring-offset-2"
            >
              Crear una sesión
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/docs/webhooks"
              className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FB] focus-visible:ring-offset-2"
            >
              Configurar webhooks
            </Link>
          </div>
        )}
      </header>

      {page.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-36 border-b border-slate-100 py-9 last:border-b-0">
          <h2 className="text-2xl font-semibold tracking-[-0.025em] text-slate-950">{section.title}</h2>
          <div className="mt-4">
            {section.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
