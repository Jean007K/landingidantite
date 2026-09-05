'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('hero');
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl mb-8 leading-tight">
                            {t('title')} <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                {t('titleAccent')}
                            </span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-600 max-w-xl">
                            {t('body')}
                        </p>
                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <Link
                                href="/contacto"
                                className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200"
                            >
                                {t('demo')}
                            </Link>
                            <Link href="/servicios" className="text-base font-semibold leading-6 text-gray-900 flex items-center gap-2 group">
                                {t('explore')} <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Hero Image / Biometric Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                            <Image
                                src="/biometrics-hero.png"
                                alt={t('imageAlt')}
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Decorative scanning line animation */}
                            <motion.div
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-1 bg-blue-500/50 blur-[2px] z-20"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3 z-30">
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('verified')}</p>
                                <p className="text-sm font-bold text-primary">{t('score')}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 transform-gpu blur-3xl opacity-20" aria-hidden="true">
                <div
                    className="aspect-[1108/632] w-[60rem] bg-gradient-to-r from-blue-400 to-indigo-600"
                    style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                />
            </div>
        </section>
    );
}
