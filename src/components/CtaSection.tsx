'use client';

export default function CtaSection() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">
                <div className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Comienza a verificar identidades hoy mismo
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                        Agenda una demostración personalizada y descubre cómo podemos asegurar tu negocio.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/contacto"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Contactar Ventas
                        </a>
                        <a href="/servicios" className="text-sm font-semibold leading-6 text-white">
                            Leer documentación <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
