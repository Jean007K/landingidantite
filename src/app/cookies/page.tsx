import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { cookiesDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Política de cookies | Emverax',
  description: 'Qué cookies usa EMVERAX en el sitio y en el panel de clientes.',
};

export default function CookiesPage() {
  return <LegalPage doc={cookiesDoc} />;
}
