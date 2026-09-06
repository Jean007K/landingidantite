'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const inputClass =
  'block h-9 w-full rounded-lg border-0 px-3 pr-11 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary';

const invalidClass =
  'block h-9 w-full rounded-lg border-0 px-3 pr-11 text-sm text-gray-900 ring-1 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500';

export default function PasswordField({
  id,
  value,
  onChange,
  autoComplete = 'new-password',
  required,
  invalid,
  revealLabel,
  hideLabel,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  required?: boolean;
  invalid?: boolean;
  revealLabel: string;
  hideLabel: string;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <input
        id={id}
        type={visible ? 'text' : 'password'}
        className={invalid ? invalidClass : inputClass}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={invalid}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-1 my-auto inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? hideLabel : revealLabel}
        aria-pressed={visible}
      >
        {visible ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );
}
