import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const cases = [
    {
        title: 'Fintech & Banca',
        description: 'Onboarding 100% digital seguro. KYC en segundos para apertura de cuentas y créditos.',
        color: 'bg-blue-600'
    },
    {
        title: 'Telecomunicaciones',
        description: 'Venta de planes y equipos con validación de identidad robusta para evitar fraudes.',
        color: 'bg-indigo-600'
    },
    {
        title: 'Servicios & RRHH',
        description: 'Control de asistencia fiable y firma de contratos laborales a distancia.',
        color: 'bg-slate-700'
    },
];

export default function UseCasesSection() {
    return (
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Impulsamos industrias líderes</h2>
                    <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                        Nuestras soluciones escalan contigo, adaptándose a los flujos únicos de tu industria.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((item) => (
                        <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-colors">
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-blue-100 mb-6">{item.description}</p>
                            <Link href="/casos" className="inline-flex items-center text-sm font-medium hover:text-white/80">
                                Ver caso de uso <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
