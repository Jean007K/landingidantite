import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contacto | IdentitySecure',
    description: 'Solicita una demo o contacta a nuestro equipo de ventas.',
};

export default function ContactoPage() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Hablemos</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            ¿Listo para transformar la autenticación en tu empresa? Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                        </p>

                        <div className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <p>
                                <strong className="text-gray-900">Ventas:</strong> ventas@identitysecure.com
                            </p>
                            <p>
                                <strong className="text-gray-900">Soporte:</strong> soporte@identitysecure.com
                            </p>
                            <p>
                                <strong className="text-gray-900">Teléfono:</strong> +56 2 2345 6789
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Nombre</label>
                                <div className="mt-2.5">
                                    <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email Corporativo</label>
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Empresa</label>
                                <div className="mt-2.5">
                                    <input type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Mensaje</label>
                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" defaultValue={''} required />
                                </div>
                            </div>
                            <button type="submit" className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
                                Solicitar Demo
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
