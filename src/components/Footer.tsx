import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
    const t = await getTranslations('footer');

    return (
        <footer className="bg-gray-50 border-t border-gray-100" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 sm:pt-14 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo-emverax.png"
                                alt="EMVERAX"
                                width={148}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <p className="text-sm leading-6 text-gray-600">
                            {t('tagline')}
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-primary">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" aria-hidden="true" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" aria-hidden="true" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" aria-hidden="true" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">{t('solutions')}</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="/servicios" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('facial')}</Link></li>
                                    <li><Link href="/servicios" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('liveness')}</Link></li>
                                    <li><Link href="/servicios" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('sign')}</Link></li>
                                    <li><Link href="/servicios" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('attendance')}</Link></li>
                                    <li><Link href="/servicios" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('api')}</Link></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">{t('support')}</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="/contacto" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('contact')}</Link></li>
                                    <li><a href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('apiDocs')}</a></li>
                                    <li><a href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('status')}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">{t('company')}</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="/casos" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('about')}</Link></li>
                                    <li><Link href="/casos" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('success')}</Link></li>
                                    <li><Link href="/testimonios" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('testimonials')}</Link></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">{t('legal')}</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="/privacy" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('privacy')}</Link></li>
                                    <li><Link href="/terms" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('terms')}</Link></li>
                                    <li><Link href="/cookies" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('cookies')}</Link></li>
                                    <li><Link href="/end-user-privacy" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('endUser')}</Link></li>
                                    <li><Link href="/privacy-requests" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('requests')}</Link></li>
                                    <li><Link href="/acceptable-use" className="text-sm leading-6 text-gray-600 hover:text-primary">{t('aup')}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-500">&copy; {new Date().getFullYear()} {t('rights')}</p>
                </div>
            </div>
        </footer>
    );
}
