'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('hero');
    return (
        <section className="relative overflow-hidden bg-white pt-8 pb-10 sm:pt-10 sm:pb-12 lg:flex lg:min-h-[calc(100dvh-4rem)] lg:items-center lg:py-8">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="max-w-xl text-[1.85rem] font-bold leading-[1.15] tracking-tight text-primary sm:text-4xl lg:text-[2.55rem]">
                            {t('title')} <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                {t('titleAccent')}
                            </span>
                        </h1>
                        <p className="mt-4 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                            {t('body')}
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <Link
                                href="/contacto"
                                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-opacity-90 transition-all duration-200"
                            >
                                {t('demo')}
                            </Link>
                            <Link href="/servicios" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 group">
                                {t('explore')} <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.12 }}
                        className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:ml-auto"
                    >
                        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200 lg:max-h-[min(26rem,52vh)]">
                            <Image
                                src="/biometrics-hero.png"
                                alt={t('imageAlt')}
                                fill
                                className="object-cover object-center"
                                sizes="(min-width: 1024px) 440px, 90vw"
                                priority
                            />
                            <motion.div
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                className="absolute left-0 z-20 h-0.5 w-full bg-blue-500/50 blur-[2px]"
                            />
                            <div className="absolute bottom-3 left-3 z-30 flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{t('verified')}</p>
                                    <p className="text-xs font-bold text-primary">{t('score')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 transform-gpu blur-3xl opacity-20" aria-hidden="true">
                <div
                    className="aspect-[1108/632] w-[48rem] bg-gradient-to-r from-blue-400 to-indigo-600"
                    style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                />
            </div>
        </section>
    );
}
