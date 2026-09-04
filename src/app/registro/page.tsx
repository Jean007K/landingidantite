import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import RegisterForm from '@/components/RegisterForm';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('registerPage');
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function RegistroPage() {
  const t = await getTranslations('registerPage');

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{t('title')}</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">{t('body')}</p>
        </div>
        <div className="mx-auto mt-12 max-w-xl rounded-2xl bg-gray-50 p-8 sm:p-10">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
