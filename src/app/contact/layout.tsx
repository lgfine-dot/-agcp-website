import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | AGCP Farmacêuticos LDA',
  description:
    'Contact AGCP Farmacêuticos LDA — Estrada Nacional 360, nº 94, Santa Catarina, 2500-773 Caldas da Rainha, Portugal. Pharmaceutical nanotechnology licensing, partnership, and research collaboration inquiries.',
  openGraph: {
    title: 'Contact | AGCP Farmacêuticos LDA',
    description: 'Contact AGCP for pharmaceutical nanotechnology partnership, licensing, and research collaboration. Caldas da Rainha, Portugal.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
