import { Shield, CheckCircle } from 'lucide-react';

export default function SecuritySection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                            Estándares de Seguridad Bancaria y Militar
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Tu seguridad y la de tus clientes es nuestra prioridad. Cumplimos con las regulaciones más estrictas del mercado.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Cumplimiento GDPR y Normativa Chilena',
                                'Certificación iBeta Level 2 de Liveness Pasiva',
                                'Encriptación AES-256 en reposo y tránsito',
                                'Auditorías de seguridad periódicas'
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10">
                            <a href="/seguridad" className="text-blue-600 font-semibold hover:text-blue-500">
                                Ver todas las certificaciones &rarr;
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-span-7">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                            {/* Placeholders for certification badges */}
                            {['ISO 27001', 'SOC 2', 'GDPR', 'iBeta L2', 'FIDO', 'KYC AML'].map((cert) => (
                                <div key={cert} className="flex items-center justify-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <Shield className="h-8 w-8 text-blue-900/40" />
                                    <span className="ml-2 text-sm font-bold text-gray-500">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
