'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

type CodeBlockProps = {
  title: string;
  language: string;
  code: string;
};

export default function CodeBlock({ title, language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl bg-[#0B1220] shadow-[0_14px_34px_-22px_rgba(15,23,42,0.8)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="truncate text-xs font-medium text-slate-300">{title}</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
            {language}
          </span>
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex min-h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4DA3FF]"
          aria-label={copied ? 'Código copiado' : 'Copiar código'}
        >
          {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
          <span aria-live="polite">{copied ? 'Copiado' : 'Copiar'}</span>
        </button>
      </div>
      <pre className="overflow-x-auto px-5 py-5 text-[13px] leading-6 text-[#DCE7F7] [scrollbar-color:#334155_#0B1220]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
