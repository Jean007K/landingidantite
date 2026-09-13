import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { endUserDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Aviso para usuarios finales | Emverax',
  description: 'Qué datos se recogen en una verificación de identidad y cómo ejercer sus derechos.',
};

export default function EndUserPrivacyPage() {
  return <LegalPage doc={endUserDoc} />;
}
