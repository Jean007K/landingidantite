import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { endUserDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Aviso para usuarios finales | Emverax',
  description: 'Quién es el Responsable de su verificación, qué datos se recogen y qué no hace Emverax.',
};

export default function EndUserPrivacyPage() {
  return <LegalPage doc={endUserDoc} />;
}
