import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { biometricDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Aviso biométrico | Emverax',
  description: 'Cómo EMVERAX trata la plantilla facial en una verificación de identidad.',
};

export default function BiometricPage() {
  return <LegalPage doc={biometricDoc} />;
}
