import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { privacyDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Política de privacidad | Emverax',
  description: 'Cómo EMVERAX trata los datos del sitio y de las cuentas del panel.',
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyDoc} />;
}
