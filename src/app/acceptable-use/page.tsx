import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { aupDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Uso aceptable | Emverax',
  description: 'Uso permitido del servicio de verificación de identidad de EMVERAX.',
};

export default function AcceptableUsePage() {
  return <LegalPage doc={aupDoc} />;
}
