import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { CONTACT } from '@/lib/urls';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('contactPage');
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function ContactoPage() {
  const t = await getTranslations('contactPage');

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{t('title')}</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">{t('body')}</p>

            <div className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <p>
                <strong className="text-gray-900">{t('info')}:</strong>{' '}
                <a href={`mailto:${CONTACT.infoEmail}`} className="hover:text-primary">
                  {CONTACT.infoEmail}
                </a>
              </p>
              <p>
                <strong className="text-gray-900">{t('support')}:</strong>{' '}
                <a href={`mailto:${CONTACT.supportEmail}`} className="hover:text-primary">
                  {CONTACT.supportEmail}
                </a>
              </p>
              <p>
                <strong className="text-gray-900">{t('phone')}:</strong>{' '}
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-primary">
                  {CONTACT.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  {t('name')}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  {t('email')}
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                  {t('company')}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  {t('message')}
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
              >
                {t('submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
