import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { minorsDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Aviso para menores | Emverax',
  description: 'El servicio no está dirigido a menores de 18 años.',
};

export default function MinorsPage() {
  return <LegalPage doc={minorsDoc} />;
}
