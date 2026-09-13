import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { subprocessorsDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Proveedores de infraestructura | Emverax',
  description: 'Proveedores que ayudan a EMVERAX a operar el servicio.',
};

export default function SubprocessorsPage() {
  return <LegalPage doc={subprocessorsDoc} />;
}
