import { ScanFace, FileSignature, ShieldCheck, Users, Server } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        title: 'Biometría Facial y Liveness',
        description: 'Verificación de identidad con prueba de vida pasiva certificada (iBeta). Detecta deepfakes y suplantaciones en tiempo real.',
        icon: ScanFace,
        href: '/servicios#biometria'
    },
    {
        title: 'Firma Digital Certificada',
        description: 'Firma contratos y documentos legales con plena validez jurídica, respaldada por verificación biométrica del firmante.',
        icon: FileSignature,
        href: '/servicios#firma'
    },
    {
        title: 'KYC & Onboarding Automatizado',
        description: 'Flujos de registro de clientes rápidos y seguros para Fintechs. Validación de documentos de identidad (OCR) y antecedentes.',
        icon: ShieldCheck,
        href: '/servicios#kyc'
    },
    {
        title: 'Control de Asistencia Biométrico',
        description: 'Registro de entrada y salida de empleados mediante reconocimiento facial geolocalizado, sin hardware costoso.',
        icon: Users,
        href: '/servicios#asistencia'
    },
    {
        title: 'API de Integración',
        description: 'Integra nuestras capacidades de verificación en tu propia app o web con nuestra API REST flexible y documentada.',
        icon: Server,
        href: '/servicios#api'
    },
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Nuestras Soluciones</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Tecnología de punta diseñada para proteger tu negocio y simplificar la vida de tus usuarios.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((feature) => (
                        <div key={feature.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-semibold leading-7 text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-base leading-7 text-gray-600 mb-6">{feature.description}</p>
                            <Link href={feature.href} className="text-sm font-semibold text-primary hover:text-blue-600 flex items-center">
                                Más información <span aria-hidden="true" className="ml-1">&rarr;</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
