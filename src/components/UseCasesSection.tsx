import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

type CaseItem = {
    title: string;
    description: string;
};

export default async function UseCasesSection() {
    const t = await getTranslations('useCases');
    const cases = t.raw('items') as CaseItem[];

    return (
        <section className="py-14 sm:py-16 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">{t('title')}</h2>
                    <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                        {t('sub')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((item) => (
                        <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-colors">
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-blue-100 mb-6">{item.description}</p>
                            <Link href="/casos" className="inline-flex items-center text-sm font-medium hover:text-white/80">
                                {t('link')} <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

