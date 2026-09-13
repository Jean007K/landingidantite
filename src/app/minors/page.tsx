import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { minorsDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Aviso para menores | Emverax',
  description: 'El servicio de verificación de EMVERAX es para personas de 18 años o más.',
};

export default function MinorsPage() {
  return <LegalPage doc={minorsDoc} />;
}
