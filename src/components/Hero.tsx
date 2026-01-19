'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-32">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 flex justify-center">
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/10">
                                Nueva tecnología de detección de vida iBeta Nivel 2
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-7xl mb-8">
                            Verificación de Identidad <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                Segura y Sin Fricción
                            </span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
                            Plataforma integral de onboarding digital, biometría facial y firma electrónica para Fintechs y Corporativos. Cumplimiento, seguridad y experiencia de usuario en un solo lugar.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/contacto"
                                className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200"
                            >
                                Solicita una Demo
                            </Link>
                            <Link href="/servicios" className="text-base font-semibold leading-6 text-gray-900 flex items-center gap-2 group">
                                Explorar Servicios <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl opacity-30" aria-hidden="true">
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5]"
                    style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                />
            </div>
        </section>
    );
}
