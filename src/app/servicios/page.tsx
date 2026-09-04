import type { Metadata } from 'next';
import { ScanFace, FileSignature, ShieldCheck, Users, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const ICONS: Record<string, LucideIcon> = {
  biometria: ScanFace,
  firma: FileSignature,
  kyc: ShieldCheck,
  asistencia: Users,
  api: Globe,
};

type Feature = {
  id: string;
  name: string;
  description: string;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('serviciosPage');
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function ServiciosPage() {
  const t = await getTranslations('serviciosPage');
  const features = t.raw('items') as Feature[];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">{t('kicker')}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">{t('title')}</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">{t('sub')}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = ICONS[feature.id] ?? ScanFace;
              return (
                <div key={feature.id} id={feature.id} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <Icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
