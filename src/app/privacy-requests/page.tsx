import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { requestsDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Solicitudes y eliminación de datos | Emverax',
  description: 'Cómo pedir acceso, corrección o eliminación de sus datos. Escriba a privacy@emverax.com.',
};

export default function PrivacyRequestsPage() {
  return <LegalPage doc={requestsDoc} />;
}
