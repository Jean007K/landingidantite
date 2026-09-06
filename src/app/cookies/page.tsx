import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { cookiesDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Política de cookies | Emverax',
  description: 'Cookies y tecnologías similares en el sitio, el panel y la captura alojada.',
};

export default function CookiesPage() {
  return <LegalPage doc={cookiesDoc} />;
}
