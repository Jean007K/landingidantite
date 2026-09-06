import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Review = {
  body: string;
  author: string;
  role: string;
  company: string;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('testimoniosPage');
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function TestimoniosPage() {
  const t = await getTranslations('testimoniosPage');
  const reviews = t.raw('items') as Review[];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{t('title')}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">{t('sub')}</p>
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
                    <div className="text-gray-600">
                      {review.role} - {review.company}
                    </div>
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
