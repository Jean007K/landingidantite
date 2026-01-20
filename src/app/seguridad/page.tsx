import { Metadata } from 'next';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Seguridad y Cumplimiento | Idantite',
    description: 'Estándares de seguridad bancaria, certificaciones iBeta y cumplimiento GDPR.',
};

export default function SeguridadPage() {
    return (
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">Seguridad sin compromisos</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Protegemos tus datos y los de tus clientes con los más altos estándares de la industria.
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-8 border border-gray-200 rounded-2xl bg-gray-50">
                        <Shield className="h-10 w-10 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Encriptación Militar</h3>
                        <p className="text-gray-600">Todos los datos son encriptados en tránsito (TLS 1.3) y en reposo (AES-256). Tus llaves criptográficas son gestionadas en HSM.</p>
                    </div>
                    <div className="p-8 border border-gray-200 rounded-2xl bg-gray-50">
                        <Eye className="h-10 w-10 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Liveness Detection Pasiva</h3>
                        <p className="text-gray-600">Certificación ISO 30107-3 (iBeta Level 2). Previene ataques de presentación como máscaras 3D, videos o fotos de alta resolución.</p>
                    </div>
                    <div className="p-8 border border-gray-200 rounded-2xl bg-gray-50">
                        <Lock className="h-10 w-10 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Cumplimiento Normativo</h3>
                        <p className="text-gray-600">Adherimos a GDPR, Normativa CMF (Chile) y estándares ISO 27001 asegurando la privacidad y el manejo ético de los datos.</p>
                    </div>
                </div>

                <div className="mt-24">
                    <h3 className="text-2xl font-bold text-center mb-12">Nuestras Certificaciones y Partners</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['ISO 27001', 'SOC 2 Type II', 'iBeta Level 1 & 2', 'GDPR Compliant'].map((cert) => (
                            <div key={cert} className="flex flex-col items-center justify-center p-6 bg-white shadow-sm border rounded-lg">
                                <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                                <span className="font-semibold text-gray-800">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
