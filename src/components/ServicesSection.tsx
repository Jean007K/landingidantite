import { ScanFace, FileSignature, ShieldCheck, Users, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const ICONS: Record<string, LucideIcon> = {
    biometria: ScanFace,
    firma: FileSignature,
    kyc: ShieldCheck,
    asistencia: Users,
    api: Server,
};

type ServiceItem = {
    id: string;
    title: string;
    body: string;
};

export default async function ServicesSection() {
    const t = await getTranslations('services');
    const services = t.raw('items') as ServiceItem[];

    return (
        <section className="py-14 sm:py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-2xl text-center mb-10">
                    <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">{t('title')}</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        {t('sub')}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((feature) => {
                        const Icon = ICONS[feature.id] ?? ScanFace;
                        return (
                        <div key={feature.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <Icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-semibold leading-7 text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-base leading-7 text-gray-600 mb-6">{feature.body}</p>
                            <Link href={`/servicios#${feature.id}`} className="text-sm font-semibold text-primary hover:text-blue-600 flex items-center">
                                {t('more')} <span aria-hidden="true" className="ml-1">&rarr;</span>
                            </Link>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
