import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const products = [
  {
    title: 'Nano-Pharmaceutical Formulations',
    badge: 'Rx Pipeline',
    text: 'Proprietary SNEDDS-based drug delivery systems for BCS Class IV compounds, achieving significantly enhanced bioavailability versus conventional formulations.',
    href: '/pharmaceutical-approach',
    imagePlaceholder: 'pharma-formulations-image',
  },
  {
    title: 'Nutraceutical Delivery Systems',
    badge: 'Active R&D',
    text: 'Nanofabricated delivery platforms for bioactive compounds including vitamins, flavonoids, and proteins — enhancing efficacy of natural therapeutics.',
    href: '/nutraceutical-approach',
    imagePlaceholder: 'nutraceutical-delivery-image',
  },
  {
    title: 'Topical & Sublingual Formulations',
    badge: 'Development Stage',
    text: 'Specialized topical solubilizing formulations and fast-absorbing sublingual tablets for effective transmucosal drug transport.',
    href: '/technologies',
    imagePlaceholder: 'topical-sublingual-image',
  },
];

const BADGE_COLORS: Record<string, string> = {
  'Rx Pipeline': 'bg-accent/10 text-accent',
  'Active R&D': 'bg-green-50 text-green-700',
  'Development Stage': 'bg-yellow-50 text-yellow-700',
};

export default function ProductsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero-section relative flex items-center justify-center min-h-[400px]">
        <div className="absolute inset-0 bg-[#1a3a5c]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Products
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl font-light">
              Pharmaceutical and nutraceutical pipeline in active development
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 1: PRODUCT CARDS ─────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedSection key={product.title} delay={index * 0.12}>
                <div className="card flex flex-col h-full overflow-hidden transition-shadow">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-sm text-text-light font-medium">
                      {product.imagePlaceholder}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className={`self-start px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${BADGE_COLORS[product.badge] || 'bg-gray-100 text-gray-600'}`}>
                      {product.badge}
                    </span>
                    <h3 className="text-lg font-bold text-navy mb-2">{product.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">
                      {product.text}
                    </p>
                    <Link
                      href={product.href}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                    >
                      Learn more
                      <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: INQUIRY CTA ───────────────────────────────── */}
      <section className="py-16 lg:py-20 section-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="section-subheading mb-3">Get In Touch</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Product Inquiries
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Our product pipeline is in active development. For detailed information on specific formulations, licensing opportunities, or contract development inquiries, please contact our team directly.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold"
              >
                Contact Our Team
              </Link>
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              or email us directly at{' '}
              <a href="mailto:alex@agcp.pt" className="font-semibold text-accent hover:text-accent-dark transition-colors">
                alex@agcp.pt
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
