'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HideFooterOn({ prefix }: { prefix: string }) {
  const pathname = usePathname();

  useEffect(() => {
    const hide = pathname.startsWith(prefix);
    document.body.classList.toggle('hide-site-footer', hide);
    return () => document.body.classList.remove('hide-site-footer');
  }, [pathname, prefix]);

  return null;
}
