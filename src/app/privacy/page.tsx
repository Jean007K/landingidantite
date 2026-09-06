import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { privacyDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Política de privacidad | Emverax',
  description: 'Cómo tratamos los datos del sitio corporativo y de las cuentas del panel. La verificación de usuarios finales tiene aviso propio.',
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyDoc} />;
}
