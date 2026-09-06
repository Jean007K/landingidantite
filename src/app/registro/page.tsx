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
    <div className="bg-white lg:h-[calc(100dvh-4rem)] lg:overflow-hidden">
      <div className="lg:grid lg:h-full lg:grid-cols-[minmax(280px,0.9fr)_minmax(520px,1.15fr)]">
        <aside className="relative isolate overflow-hidden bg-[#0B1220]">
          <div className="relative h-40 w-full sm:h-52 lg:absolute lg:inset-0 lg:h-full">
            <Image
              src="/registro-verificacion-premium.png"
              alt={t('visualAlt')}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[center_28%] lg:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/25 to-transparent" />
          </div>
          <div className="relative hidden px-8 pb-10 pt-8 text-white lg:absolute lg:inset-x-0 lg:bottom-0 lg:block">
            <p className="text-[11px] font-medium uppercase tracking-wide text-blue-200">{t('visualKicker')}</p>
            <p className="mt-1.5 max-w-sm text-xl font-semibold tracking-tight">{t('visualTitle')}</p>
            <p className="mt-1.5 max-w-sm text-xs leading-5 text-slate-200">{t('visualBody')}</p>
          </div>
        </aside>

        <div className="flex min-h-0 items-start justify-center overflow-y-auto px-4 py-6 sm:px-8 sm:py-8 lg:items-center lg:px-10 lg:py-6">
          <div className="w-full max-w-2xl">
            <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-[1.7rem]">{t('title')}</h1>
            <p className="mt-1.5 text-sm leading-6 text-gray-600">{t('body')}</p>
            <div className="mt-5">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
