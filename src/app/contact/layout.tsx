import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact AGCP Farmaceuticos for pharmaceutical nanotechnology licensing, partnership, and investment inquiries. Based in Caldas da Rainha, Portugal.',
  openGraph: {
    title: 'Contact | AGCP Farmaceuticos',
    description: 'Partnership and investment inquiries for pharmaceutical nanotechnology licensing.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
