'use client';

import { useTranslations } from 'next-intl';

export default function CtaSection() {
    const t = useTranslations('cta');
    return (
        <section className="bg-white py-14 sm:py-16">
            <div className="container mx-auto px-6">
                <div className="relative isolate overflow-hidden bg-primary px-6 py-12 text-center shadow-xl rounded-2xl sm:px-12 sm:py-14">
                    <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {t('title')}
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-blue-100">
                        {t('body')}
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <a
                            href="/contacto"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            {t('sales')}
                        </a>
                        <a href="/servicios" className="text-sm font-semibold leading-6 text-white">
                            {t('docs')} <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
