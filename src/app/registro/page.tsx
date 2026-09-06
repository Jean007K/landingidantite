import type { Metadata } from 'next';
import Image from 'next/image';
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
      <div className="lg:grid lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2">
        <aside className="relative isolate overflow-hidden bg-[#0B1220]">
          <div className="relative h-56 w-full sm:h-72 lg:absolute lg:inset-0 lg:h-full">
            <Image
              src="/registro-verificacion-premium.png"
              alt={t('visualAlt')}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_22%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/35 to-[#0B1220]/10" />
          </div>
          <div className="relative hidden px-10 pb-12 pt-10 text-white lg:absolute lg:inset-x-0 lg:bottom-0 lg:block">
            <p className="text-sm font-medium text-blue-200">{t('visualKicker')}</p>
            <p className="mt-3 max-w-md text-3xl font-semibold tracking-tight">{t('visualTitle')}</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">{t('visualBody')}</p>
          </div>
        </aside>

        <div className="flex items-start justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="w-full max-w-xl">
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{t('title')}</h1>
            <p className="mt-3 text-base leading-7 text-gray-600 sm:text-lg">{t('body')}</p>
            <div className="mt-8">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
