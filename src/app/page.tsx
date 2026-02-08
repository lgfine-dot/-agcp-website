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

const platforms = [
  {
    title: 'Scalable Graphene Production',
    description:
      'Proprietary monolayer graphene manufacturing at a fraction of the market standard of $500-5,000/gram. Enabling advanced materials and drug delivery applications at pharmaceutical scale.',
    href: '/technology-platforms#graphene',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden="true">
        <path d="M24 4L42 14V34L24 44L6 34V14L24 4Z" stroke="#0066FF" strokeWidth="1.5" fill="none" />
        <path d="M24 4V44M6 14L42 34M42 14L6 34" stroke="#0066FF" strokeWidth="1" opacity="0.4" />
        <circle cx="24" cy="24" r="4" fill="#0066FF" opacity="0.2" />
        <circle cx="24" cy="24" r="2" fill="#0066FF" />
      </svg>
    ),
    stat: 'Significant',
    statLabel: 'Cost Reduction',
  },
  {
    title: 'Transdermal Nanoparticle Delivery',
    description:
      'Enhanced absorption through the skin barrier via particle optimization for targeted delivery. Clinically validated for topical pharmaceutical applications with superior bioavailability.',
    href: '/technology-platforms#transdermal',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden="true">
        <rect x="8" y="20" width="32" height="4" rx="2" fill="#0066FF" opacity="0.15" />
        <circle cx="16" cy="14" r="3" fill="#0066FF" opacity="0.3" />
        <circle cx="28" cy="10" r="2" fill="#0066FF" opacity="0.5" />
        <circle cx="36" cy="16" r="2.5" fill="#0066FF" opacity="0.4" />
        <path d="M16 14V30M28 10V32M36 16V28" stroke="#0066FF" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="16" cy="32" r="2" fill="#0066FF" />
        <circle cx="28" cy="34" r="2" fill="#0066FF" />
        <circle cx="36" cy="30" r="2" fill="#0066FF" />
      </svg>
    ),
    stat: 'Enhanced',
    statLabel: 'Bioavailability',
  },
  {
    title: 'BBB Nanoemulsion Technology',
    description:
      'Oil-in-water nano-suspensions achieving particles <10nm, validated with 4+ years of stability data. Enables CNS drug delivery across the blood-brain barrier previously considered impossible.',
    href: '/technology-platforms#bbb',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden="true">
        <circle cx="24" cy="24" r="16" stroke="#0066FF" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="24" r="10" stroke="#0066FF" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="3 2" />
        <circle cx="24" cy="24" r="4" fill="#0066FF" opacity="0.2" />
        <circle cx="24" cy="24" r="1.5" fill="#0066FF" />
        <path d="M14 18L20 22M28 22L34 18M20 28L14 32M28 28L34 32" stroke="#0066FF" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    stat: '<10nm',
    statLabel: 'Particle Size',
  },
];

const trustSignals = [
  {
    value: '18+',
    label: 'Months Stability Data',
    description: 'Validated nanoemulsion formulation stability',
  },
  {
    value: '<10nm',
    label: 'Particle Achievement',
    description: 'Nano-suspension particle size for BBB penetration',
  },
  {
    value: '95%+',
    label: 'Cost Reduction',
    description: 'Graphene production cost versus market pricing',
  },
];

const valueProps = [
  {
    title: 'B2B Platform Model',
    description: 'We enable your products. License our proprietary nanotechnology platforms to enhance your drug delivery systems without building from scratch.',
  },
  {
    title: 'Regulatory Expertise',
    description: 'Deep regulatory knowledge to navigate commercialization pathways across global markets.',
  },
  {
    title: 'Proven Stability',
    description: 'Extensive validation data including 18+ months nanoemulsion stability and 4+ years CBD formulation data demonstrating commercial viability.',
  },
  {
    title: 'Cost-Effective Scale',
    description: 'Proprietary manufacturing processes delivering pharmaceutical-grade output at a fraction of conventional costs, enabling competitive product development.',
  },
];

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
        {/* Scientific Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#0066FF" opacity="0.5" />
              </pattern>
              <radialGradient id="hero-glow" cx="60%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#0066FF" stopOpacity="0.15" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
            <rect width="100%" height="100%" fill="url(#hero-glow)" />
            {/* Molecular structure lines */}
            <line x1="20%" y1="30%" x2="35%" y2="45%" stroke="#0066FF" strokeWidth="0.5" opacity="0.3" />
            <line x1="35%" y1="45%" x2="50%" y2="35%" stroke="#0066FF" strokeWidth="0.5" opacity="0.3" />
            <line x1="50%" y1="35%" x2="65%" y2="50%" stroke="#0066FF" strokeWidth="0.5" opacity="0.3" />
            <line x1="65%" y1="50%" x2="80%" y2="40%" stroke="#0066FF" strokeWidth="0.5" opacity="0.3" />
            <circle cx="20%" cy="30%" r="4" fill="#0066FF" opacity="0.2" />
            <circle cx="35%" cy="45%" r="6" fill="#0066FF" opacity="0.15" />
            <circle cx="50%" cy="35%" r="5" fill="#0066FF" opacity="0.2" />
            <circle cx="65%" cy="50%" r="4" fill="#0066FF" opacity="0.15" />
            <circle cx="80%" cy="40%" r="7" fill="#0066FF" opacity="0.1" />
            {/* Nanoparticle clusters */}
            <circle cx="75%" cy="20%" r="20" stroke="#0066FF" strokeWidth="0.5" fill="none" opacity="0.2" />
            <circle cx="75%" cy="20%" r="12" stroke="#0066FF" strokeWidth="0.5" fill="none" opacity="0.3" />
            <circle cx="75%" cy="20%" r="4" fill="#0066FF" opacity="0.15" />
            <circle cx="25%" cy="70%" r="15" stroke="#0066FF" strokeWidth="0.5" fill="none" opacity="0.2" />
            <circle cx="25%" cy="70%" r="8" stroke="#0066FF" strokeWidth="0.5" fill="none" opacity="0.3" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <AnimatedSection className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-white/80">
                B2B Pharmaceutical Technology Platform
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Enabling Pharmaceutical Innovation Through{' '}
              <span className="text-accent">Nanotechnology</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl max-w-2xl">
              B2B platform providing proprietary drug delivery technologies for pharmaceutical licensing. Three validated nanotechnology platforms ready for commercial partnership.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/technology-platforms"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
              >
                Our Technology Platforms
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Partner With Us
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Three Platforms Overview */}
      <section className="py-24 lg:py-32" id="platforms">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Core Technology Platforms
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Three Proprietary Nanotechnology Platforms
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Each platform addresses a critical pharmaceutical delivery challenge with validated, scalable solutions ready for commercial licensing.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {platforms.map((platform, index) => (
              <AnimatedSection key={platform.title} delay={index * 0.15}>
                <Link
                  href={platform.href}
                  className="group block h-full rounded-2xl border border-border bg-white p-8 transition-all hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="mb-5">{platform.icon}</div>
                  <h3 className="text-xl font-bold text-navy group-hover:text-accent transition-colors">
                    {platform.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {platform.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <div>
                      <p className="text-2xl font-bold text-accent">{platform.stat}</p>
                      <p className="text-xs text-text-light">{platform.statLabel}</p>
                    </div>
                    <span className="text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                Why AGCP
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Your Drug Delivery Technology Partner
              </h2>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Pharmaceutical companies choose AGCP as their nanotechnology platform partner for our proven technology, regulatory expertise, and cost-effective manufacturing capabilities.
              </p>
              <div className="mt-8">
                <Link
                  href="/partnership"
                  className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors"
                >
                  Explore our partnership model
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueProps.map((prop, index) => (
                <AnimatedSection key={prop.title} delay={index * 0.1}>
                  <div className="rounded-xl bg-white p-6 border border-border">
                    <h3 className="font-bold text-navy mb-2">{prop.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Validated Performance Metrics
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Our technology platforms are backed by extensive validation data and pharmaceutical-grade manufacturing standards.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <AnimatedSection key={signal.label} delay={index * 0.1}>
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent sm:text-5xl">{signal.value}</p>
                  <p className="mt-2 text-sm font-semibold text-navy">{signal.label}</p>
                  <p className="mt-1 text-xs text-text-light">{signal.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Enhance Your Drug Delivery Pipeline?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Discover how AGCP&apos;s nanotechnology platforms can accelerate your pharmaceutical development. We welcome partnership, licensing, and investment inquiries.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
              >
                Contact for Partnership
              </Link>
              <Link
                href="/technology-platforms"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                View Our Technology
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
