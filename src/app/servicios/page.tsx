import { Metadata } from 'next';
import { ScanFace, FileSignature, ShieldCheck, Users, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Servicios de Verificación de Identidad | Idantite',
    description: 'Conoce nuestras soluciones de Biometría Facial, Firma Digital, KYC y Control de Asistencia.',
};

const features = [
    {
        name: 'Verificación Facial y Liveness',
        description: 'Nuestra tecnología detecta vida real (Liveness) con certificación iBeta nivel 2, asegurando que la persona frente a la cámara es quien dice ser y está presente en ese momento, evitando fraudes con fotos, videos o máscaras.',
        icon: ScanFace,
    },
    {
        name: 'Firma Electrónica Avanzada',
        description: 'Firma documentos con plena validez legal. Vincula la identidad biométrica del firmante al documento, garantizando no repudio y trazabilidad completa.',
        icon: FileSignature,
    },
    {
        name: 'Onboarding Digital (KYC)',
        description: 'Automatiza la captura de datos de documentos de identidad (OCR) y verifícalos contra bases de datos oficiales. Reduce el tiempo de alta de clientes de días a segundos.',
        icon: ShieldCheck,
    },
    {
        name: 'Control de Asistencia Biométrico',
        description: 'Permite a tus empleados marcar asistencia desde sus móviles con validación facial y geolocalización. Ideal para trabajo remoto y en terreno.',
        icon: Users,
    },
    {
        name: 'API Rest Flexible',
        description: 'Integra todas estas funcionalidades en tus propios sistemas ERP, CRM o Apps móviles con nuestra API documentada y SDKs ligeros.',
        icon: Globe,
    },
];

export default function ServiciosPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Nuestras Capacidades</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Todo lo que necesitas para operar digitalmente con confianza
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Plataforma modular diseñada para escalar junto a tu negocio. Elige los módulos que necesitas hoy y agrega más mañana.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
