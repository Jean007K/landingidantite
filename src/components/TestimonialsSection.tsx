export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-16">
                    Confían en nosotros
                </h2>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {[
                        {
                            body: "La implementación de la verificación facial redujo nuestro fraude en un 95% el primer mes.",
                            author: "Director de Riesgo",
                            company: "Fintech Leader"
                        },
                        {
                            body: "El proceso de firma digital es tan fluido que nuestros clientes lo completan en menos de 2 minutos.",
                            author: "Gerente Comercial",
                            company: "Telco Connect"
                        },
                        {
                            body: "Excelente soporte y API muy fácil de integrar. Altamente recomendados.",
                            author: "CTO",
                            company: "Servicios Digitales SA"
                        },
                    ].map((testimonial, idx) => (
                        <figure key={idx} className="flex flex-col justify-between bg-white p-10 shadow-sm rounded-2xl border border-gray-100">
                            <blockquote className="text-gray-700 text-lg leading-8">
                                <p>“{testimonial.body}”</p>
                            </blockquote>
                            <figcaption className="mt-8 flex items-center gap-x-4 border-t border-gray-900/10 pt-4">
                                <div className="h-10 w-10 flex-none rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">
                                    {testimonial.author[0]}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                    <div className="text-gray-600">{testimonial.company}</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
