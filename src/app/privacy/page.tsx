import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('privacyPage');
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function PrivacyPage() {
  const t = await getTranslations('privacyPage');

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-10">{t('title')}</h1>
        <p className="mt-6 text-lg leading-8">{t('intro')}</p>
        <div className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">{t('collectTitle')}</h2>
          <p className="mt-6">{t('collectBody')}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">{t('useTitle')}</h2>
          <p className="mt-6">{t('useBody')}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">{t('protectTitle')}</h2>
          <p className="mt-6">{t('protectBody')}</p>
        </div>
      </div>
    </div>
  );
}
