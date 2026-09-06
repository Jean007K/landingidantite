import type { Metadata } from 'next';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const ICONS: Record<string, LucideIcon> = {
  encryption: Shield,
  liveness: Eye,
  compliance: Lock,
};

type Card = {
  id: string;
  title: string;
  body: string;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('seguridadPage');
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function SeguridadPage() {
  const t = await getTranslations('seguridadPage');
  const cards = t.raw('cards') as Card[];

  return (
    <div className="bg-white px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{t('title')}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{t('sub')}</p>
      </div>

      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = ICONS[card.id] ?? Shield;
            return (
              <div key={card.id} className="p-8 border border-gray-200 rounded-2xl bg-gray-50">
                <Icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">{t('certsTitle')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['ISO 27001', 'SOC 2 Type II', 'iBeta Level 1 & 2', 'GDPR Compliant'].map((cert) => (
              <div key={cert} className="flex flex-col items-center justify-center p-6 bg-white shadow-sm border rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                <span className="font-semibold text-gray-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
