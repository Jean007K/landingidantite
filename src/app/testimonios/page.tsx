import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Testimonios | IdentitySecure',
    description: 'Lo que dicen nuestros clientes sobre nuestras soluciones de identidad.',
};

const reviews = [
    {
        body: "La implementación de la verificación facial redujo nuestro fraude en un 95% el primer mes. El soporte del equipo fue excepcional durante todo el proceso.",
        author: "María González",
        role: "Director de Riesgo",
        company: "Fintech Leader"
    },
    {
        body: "El proceso de firma digital es tan fluido que nuestros clientes lo completan en menos de 2 minutos. Hemos aumentado nuestra tasa de conversión significativamente.",
        author: "Carlos Rodriguez",
        role: "Gerente Comercial",
        company: "Telco Connect"
    },
    {
        body: "Excelente soporte y API muy fácil de integrar. La documentación es clara y los SDKs funcionan a la primera. Altamente recomendados.",
        author: "Javier Silva",
        role: "CTO",
        company: "Servicios Digitales SA"
    },
    {
        body: "Necesitábamos una solución de control de asistencia fiable para nuestros 500 empleados en terreno. IdentitySecure fue la solución perfecta.",
        author: "Ana P.",
        role: "Gerente RRHH",
        company: "Constructora Global"
    }
];

export default function TestimoniosPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Confían en nosotros</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Descubre por qué las empresas líderes eligen IdentitySecure para proteger a sus usuarios.
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 ring-1 ring-gray-900/5">
                                <blockquote className="text-gray-900">
                                    <p>“{review.body}”</p>
                                </blockquote>
                                <div className="mt-6 flex items-center gap-x-4">
                                    <div className="h-10 w-10 flex-none rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                        {review.author[0]}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{review.author}</div>
                                        <div className="text-gray-600">{review.role} - {review.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
