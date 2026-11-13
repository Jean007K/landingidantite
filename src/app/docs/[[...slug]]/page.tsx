import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DocsArticle from '@/components/docs/DocsArticle';
import DocsShell from '@/components/docs/DocsShell';
import { docsBySlug, docsPages } from '@/lib/docs';

type DocsPageProps = {
  params: Promise<{ slug?: string[] }>;
};

function slugFromParts(parts?: string[]) {
  return parts?.join('/') ?? '';
}

export function generateStaticParams() {
  return docsPages.map((page) => ({
    slug: page.slug ? page.slug.split('/') : [],
  }));
}

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = docsBySlug.get(slugFromParts(slug));

  if (!page) {
    return {};
  }

  const path = page.slug ? '/docs/' + page.slug : '/docs';

  return {
    title: page.slug
      ? page.title + ' | Documentación EMVERAX'
      : 'Documentación EMVERAX | API v2',
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: page.title + ' | EMVERAX',
      description: page.description,
      url: path,
      type: 'article',
    },
  };
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const page = docsBySlug.get(slugFromParts(slug));

  if (!page) {
    notFound();
  }

  return (
    <DocsShell page={page}>
      <DocsArticle page={page} />
    </DocsShell>
  );
}
