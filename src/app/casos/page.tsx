import { Metadata } from 'next';
import { Building2, Smartphone, Briefcase, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Casos de Uso | IdentitySecure',
    description: 'Descubre cómo ayudamos a Fintechs, Telcos y Empresas de Servicios.',
};

const industries = [
    {
        name: 'Fintech & Banca Digital',
        description: 'Onboarding de clientes en menos de 30 segundos. Cumple con KYC/AML sin sacrificar la conversión. Reduce el fraude por suplantación de identidad en aperturas de cuenta y solicitudes de crédito.',
        icon: Building2,
        benefits: ['Reducción del 90% en fraude', 'Aumento del 30% en conversión', 'Cumplimiento normativo automatizado']
    },
    {
        name: 'Telecomunicaciones',
        description: 'Venta de tarjetas SIM y equipos con validación biométrica en punto de venta o remota. Asegura que quien contrata el plan es realmente quien dice ser.',
        icon: Smartphone,
        benefits: ['Activación remota segura', 'Prevención de robo de identidad', 'Firma de contratos digitales']
    },
    {
        name: 'Servicios & RRHH',
        description: 'Gestión de asistencia para personal en terreno y firma remota de contratos laborales. Ideal para empresas de logística, construcción y retail.',
        icon: Briefcase,
        benefits: ['Geolocalización precisa', 'Firma de contratos masiva', 'Control de horas extras']
    },
];

export default function CasosPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Industrias</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Soluciones adaptadas a tu sector
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Entendemos los desafíos únicos de cada industria. Nuestra tecnología se adapta a tus flujos de negocio.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                        {industries.map((industry) => (
                            <div key={industry.name} className="flex flex-col bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <div className="flex items-center gap-x-3 text-xl font-bold leading-7 text-gray-900 mb-4">
                                    <industry.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                                    {industry.name}
                                </div>
                                <p className="text-base leading-7 text-gray-600 mb-6 flex-auto">
                                    {industry.description}
                                </p>
                                <div className="mb-8">
                                    <h4 className="font-semibold text-sm text-gray-900 mb-3">Beneficios Clave:</h4>
                                    <ul className="space-y-2">
                                        {industry.benefits.map((benefit) => (
                                            <li key={benefit} className="text-sm text-gray-600 flex items-center">
                                                <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href="/contacto" className="mt-auto text-sm font-semibold text-primary hover:text-blue-600">
                                    Solicitar demo para {industry.name} <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
