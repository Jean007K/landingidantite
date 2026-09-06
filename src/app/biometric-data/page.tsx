import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { biometricDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Aviso biométrico | Emverax',
  description: 'Cómo tratamos plantillas faciales (embeddings) y por qué no son lo mismo que una foto JPEG.',
};

export default function BiometricPage() {
  return <LegalPage doc={biometricDoc} />;
}
