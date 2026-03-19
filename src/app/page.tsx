import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AGCP Farmaceuticos, LDA',
    url: 'https://agcp.pt',
    logo: 'https://agcp.pt/logo.png',
    description:
      'Proprietary nanotechnology drug delivery platforms for pharmaceutical licensing.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Estrada Nacional 360, N 94 Santa Catarina',
      addressLocality: 'Caldas da Rainha',
      postalCode: '2500-773',
      addressCountry: 'PT',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-240-292-9392',
      email: 'lawrence@agcp.pt',
      contactType: 'business development',
    },
    sameAs: [],
    founders: [
      { '@type': 'Person', name: 'Lawrence Fine', jobTitle: 'CEO & Chairman' },
      {
        '@type': 'Person',
        name: 'Dr. Alexander Dementev',
        jobTitle: 'President & CTO',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const contentBlocks = [
  {
    label: 'INNOVATION',
    text: 'Pioneering pharmaceutical solutions through advanced nanotechnology and natural ingredient research, delivering measurable improvements in therapeutic efficacy.',
    image: '/innovation.jpg',
    imageAlt: 'Pharmaceutical innovation research',
  },
  {
    label: 'TECHNOLOGY',
    text: 'Our proprietary nanoemulsion drug delivery platform achieves sub-10nm particle sizes with proven stability exceeding four years — validated through Experiment 0001.',
    image: '/hplc-lab.jpg',
    imageAlt: 'HPLC laboratory equipment',
  },
  {
    label: 'DELIVERY',
    text: 'Advanced drug delivery systems engineered for superior bioavailability, targeted release, and reduced toxicity — bringing natural therapeutics to clinical-grade performance.',
    image: '/nano-capsule.jpg',
    imageAlt: 'Nano-capsule drug delivery',
  },
];

const stats = [
  {
    stat: 'EU Licensed',
    description: 'European pharmaceutical producer license',
  },
  {
    stat: 'Sub-10nm',
    description: 'Proven nanoemulsion particle size with 4+ year stability',
  },
  {
    stat: 'Natural Ingredients',
    description: 'Pharmaceutical-grade natural compound formulations',
  },
];

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />

      {/* ── SECTION 1: HERO ──────────────────────────────────────── */}
      <section className="hero-section relative flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
        {/* Background image with fallback */}
        <div className="absolute inset-0 bg-[#1a3a5c]">
          <img
            src="/hplc.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              WELCOME TO AGCP FARMAC&Ecirc;UTICOS LDA
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl font-light tracking-wide">
              Committed to Quality
            </p>
            <div className="mt-10">
              <Link
                href="/technologies"
                className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold"
              >
                Learn About Our Technology
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 2: THREE CONTENT BLOCKS ──────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {contentBlocks.map((block, index) => {
            const imageLeft = index % 2 === 1;
            return (
              <AnimatedSection
                key={block.label}
                delay={index * 0.1}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index > 0 ? 'mt-16 lg:mt-24' : ''
                }`}
              >
                {/* Text */}
                <div className={imageLeft ? 'lg:order-2' : ''}>
                  <p className="section-subheading mb-3">{block.label}</p>
                  <p className="text-lg leading-relaxed text-text-secondary">
                    {block.text}
                  </p>
                </div>

                {/* Image */}
                <div className={imageLeft ? 'lg:order-1' : ''}>
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                  />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 3: STAT CALLOUT BOXES ────────────────────────── */}
      <section className="py-16 lg:py-20 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <AnimatedSection key={item.stat} delay={index * 0.12}>
                <div className="card p-8 text-center transition-shadow">
                  {/* Icon slot */}
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <div className="h-3 w-3 rounded-full bg-accent" />
                  </div>
                  <p className="text-xl font-bold text-navy">{item.stat}</p>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CTA BANNER ────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to explore a partnership?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Contact our team to discuss formulation development, licensing, or research collaboration.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold"
              >
                Get In Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
