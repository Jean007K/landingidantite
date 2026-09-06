import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { subprocessorsDoc } from '@/content/legal/es';

export const metadata: Metadata = {
  title: 'Subencargados | Emverax',
  description: 'Lista de subencargados y derecho de objeción de 30 días.',
};

export default function SubprocessorsPage() {
  return <LegalPage doc={subprocessorsDoc} />;
}
