import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/isumenuka', label: 'GitHub' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/ezsumm', label: 'X (Twitter)' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/ezsumm/', label: 'LinkedIn' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-100 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
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
          
          <p className="text-sm text-gray-500">
            © {currentYear} AnimalMondo by ezsumm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}