import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { termsDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Términos de uso | Emverax',
  description: 'Condiciones para usar el sitio y crear una cuenta de empresa en Emverax.',
};

export default function TermsPage() {
  return <LegalPage doc={termsDoc} />;
}
