'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { DASH_LOGIN_URL, REGISTER_PATH } from '@/lib/urls';

export default function Header() {
  const t = useTranslations('header');
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '/servicios' },
    { name: t('security'), href: '/seguridad' },
    { name: t('cases'), href: '/casos' },
    { name: t('testimonials'), href: '/testimonios' },
    { name: t('contact'), href: '/contacto' },
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1 items-center">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <Image
                src="/logo-emverax.png"
                alt="EMVERAX"
                width={148}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center gap-1 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">{t('openMenu')}</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium leading-6 text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <a
              href={DASH_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
            >
              {t('login')}
            </a>
            <a
              href={REGISTER_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 transition-all"
            >
              {t('register')}
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg"
          >
            <div className="space-y-1 px-6 pb-6 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <a
                  href={DASH_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center rounded-md px-3 py-2.5 text-base font-semibold text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
                >
                  {t('login')}
                </a>
                <a
                  href={REGISTER_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center rounded-md bg-primary px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-opacity-90"
                >
                  {t('register')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
