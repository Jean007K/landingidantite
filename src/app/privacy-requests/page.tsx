import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { requestsDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Solicitudes y eliminación de datos | Emverax',
  description: 'Cómo ejercer derechos de acceso, rectificación o eliminación. El titular pide primero al Cliente.',
};

export default function PrivacyRequestsPage() {
  return <LegalPage doc={requestsDoc} />;
}
