import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidad | IdentitySecure',
    description: 'Cómo gestionamos y protegemos tus datos.',
};

export default function PrivacyPage() {
    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-10">Política de Privacidad</h1>
                <p className="mt-6 text-lg leading-8">
                    En IdentitySecure, nos tomamos muy en serio la privacidad de sus datos. Esta política describe cómo recopilamos, utilizamos y protegemos la información personal que usted nos proporciona.
                </p>
                <div className="mt-10 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">1. Recopilación de Información</h2>
                    <p className="mt-6">
                        Recopilamos información cuando se registra en nuestro sitio, completa un formulario o utiliza nuestros servicios de verificación.
                    </p>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. Uso de la Información</h2>
                    <p className="mt-6">
                        La información que recopilamos se utiliza para mejorar el servicio al cliente, procesar transacciones y enviar correos electrónicos periódicos.
                    </p>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">3. Protección de Datos</h2>
                    <p className="mt-6">
                        Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal.
                    </p>
                </div>
            </div>
        </div>
    );
}
