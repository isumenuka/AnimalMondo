import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    icon: <Facebook className="w-5 h-5" />,
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: 'https://x.com',
    label: 'X (Twitter)',
  },
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-600">
            © 2024 ezsumm | All rights reserved
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-all duration-200 hover:text-purple-600 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}