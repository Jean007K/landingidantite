import Link from 'next/link';
import { ScanFace, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <ScanFace className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold text-primary tracking-tight">Idantite</span>
                        </Link>
                        <p className="text-sm leading-6 text-gray-600">
                            Soluciones avanzadas de verificación de identidad y biometría para un mundo digital más seguro.
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
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Soluciones</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="/servicios" className="text-sm leading-6 text-gray-600 hover:text-primary">Verificación Facial</Link></li>
                                    <li><Link href="/servicios" className="text-sm leading-6 text-gray-600 hover:text-primary">Liveness Detection</Link></li>
                                    <li><Link href="/servicios" className="text-sm leading-6 text-gray-600 hover:text-primary">Firma Digital</Link></li>
                                    <li><Link href="/servicios" className="text-sm leading-6 text-gray-600 hover:text-primary">Control de Asistencia</Link></li>
                                    <li><Link href="/servicios" className="text-sm leading-6 text-gray-600 hover:text-primary">API Integrations</Link></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Soporte</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="/contacto" className="text-sm leading-6 text-gray-600 hover:text-primary">Contacto</Link></li>
                                    <li><a href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">Documentación API</a></li>
                                    <li><a href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">Estado del Sistema</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Compañía</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="/casos" className="text-sm leading-6 text-gray-600 hover:text-primary">Sobre Nosotros</Link></li>
                                    <li><Link href="/casos" className="text-sm leading-6 text-gray-600 hover:text-primary">Casos de Éxito</Link></li>
                                    <li><Link href="/testimonios" className="text-sm leading-6 text-gray-600 hover:text-primary">Testimonios</Link></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="/privacy" className="text-sm leading-6 text-gray-600 hover:text-primary">Política de Privacidad</Link></li>
                                    <li><a href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">Términos de Uso</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-500">&copy; {new Date().getFullYear()} Idantite Inc. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
