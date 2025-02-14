import type { Metadata } from 'next';

const metadataTemplate: Metadata = {
  metadataBase: new URL('https://intracom.app'),
  title: { default: 'Intracom', template: '%s | Intracom' },
  description:
    'Intracom is an open-source communication tool designed to empower teams and highlight the skills of talented engineers.',
  applicationName: 'Intracom',
  generator: 'Next.js',
  referrer: 'origin',
  colorScheme: 'dark',
  viewport: { width: 'device-width', initialScale: 1 },
};

export { metadataTemplate };
