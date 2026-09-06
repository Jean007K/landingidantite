import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { aupDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Uso aceptable | Emverax',
  description: 'Límites de uso del servicio de verificación: no menores, no 1:N, no sellos no obtenidos.',
};

export default function AcceptableUsePage() {
  return <LegalPage doc={aupDoc} />;
}
