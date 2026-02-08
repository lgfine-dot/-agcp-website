import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Partnership Model',
  description:
    'License AGCP\'s nanotechnology platforms for your pharmaceutical products. B2B technology licensing with full regulatory support and manufacturing guidance.',
  openGraph: {
    title: 'Partnership Model | AGCP Farmaceuticos',
    description: 'B2B pharmaceutical nanotechnology licensing and partnership opportunities.',
  },
};

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agcp.pt' },
      { '@type': 'ListItem', position: 2, name: 'Partnership Model', item: 'https://agcp.pt/partnership' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const partnershipSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with a confidential discussion to understand your drug delivery challenges, therapeutic targets, and commercial objectives.',
    duration: 'Week 1-2',
  },
  {
    number: '02',
    title: 'Feasibility Assessment',
    description: 'Our scientific team evaluates the compatibility of your active pharmaceutical ingredients with our nanotechnology platforms and develops a preliminary formulation strategy.',
    duration: 'Week 3-6',
  },
  {
    number: '03',
    title: 'Proof of Concept',
    description: 'Development and testing of prototype formulations demonstrating the performance advantages of our nano-delivery technology with your specific compounds.',
    duration: 'Month 2-4',
  },
  {
    number: '04',
    title: 'Optimization & Validation',
    description: 'Iterative optimization of the formulation followed by comprehensive validation including stability testing, analytical method development, and process characterization.',
    duration: 'Month 4-8',
  },
  {
    number: '05',
    title: 'Technology Transfer & Scale-Up',
    description: 'Complete technology transfer package including manufacturing protocols, quality specifications, and regulatory documentation to support your commercial production.',
    duration: 'Month 8-12',
  },
  {
    number: '06',
    title: 'Ongoing Support',
    description: 'Continued technical and regulatory support throughout your product lifecycle, including manufacturing optimization and market expansion assistance.',
    duration: 'Ongoing',
  },
];

const offerings = [
  {
    title: 'Technology Transfer',
    items: [
      'Complete formulation methodology documentation',
      'Manufacturing process protocols and parameters',
      'Analytical methods and specifications',
      'Scale-up guidance for commercial production',
    ],
  },
  {
    title: 'Regulatory Support',
    items: [
      'Regulatory strategy development',
      'Stability data packages (ICH compliant)',
      'Regulatory documentation and compliance guidance',
      'Submission support for target markets',
    ],
  },
  {
    title: 'Manufacturing Guidance',
    items: [
      'Pharmaceutical-grade production capability',
      'Process validation protocols',
      'Quality control specifications',
      'Supply chain optimization',
    ],
  },
];

export default function PartnershipPage() {
  return (
    <>
      <BreadcrumbSchema />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Partnership Model
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              License Our Nanotechnology Platforms
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              We operate as a B2B enabling technology platform. Pharmaceutical companies license our proprietary nanotechnology to enhance their drug delivery systems&mdash;similar to how companies license BASF&apos;s enabling materials.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Partnership Process
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              A structured, milestone-driven process from initial consultation through commercial technology transfer and ongoing support.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-white p-8 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-surface-dark select-none">
                    {step.number}
                  </div>
                  <div className="relative">
                    <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent mb-4">
                      {step.duration}
                    </div>
                    <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              What We Provide
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Comprehensive technology licensing packages designed to enable your success from formulation through commercialization.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <AnimatedSection key={offering.title} delay={index * 0.15}>
                <div className="h-full rounded-2xl bg-white border border-border p-8">
                  <h3 className="text-xl font-bold text-navy mb-4">{offering.title}</h3>
                  <ul className="space-y-3">
                    {offering.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Partnership Opportunities
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              We offer flexible partnership structures to meet the specific needs of pharmaceutical companies at various stages of development.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Technology Licensing',
                description: 'License our proprietary nanotechnology platforms for integration into your pharmaceutical products. Includes complete technology transfer, manufacturing protocols, and regulatory support packages.',
                features: ['Platform access', 'Technology transfer', 'Regulatory documentation', 'Manufacturing protocols'],
              },
              {
                title: 'Co-Development',
                description: 'Collaborative development partnerships where AGCP works alongside your R&D team to develop custom nano-formulations optimized for your specific therapeutic targets.',
                features: ['Joint development', 'Shared milestones', 'Combined expertise', 'Customized solutions'],
              },
              {
                title: 'Contract Manufacturing',
                description: 'Utilize our production facility for the manufacture of nano-pharmaceutical products developed using our platform technologies.',
                features: ['Pharmaceutical-grade production', 'Quality assurance', 'Batch documentation', 'Supply reliability'],
              },
              {
                title: 'Strategic Investment',
                description: 'Investment opportunities for venture capital and strategic investors seeking exposure to pharmaceutical nanotechnology with validated platforms and clear commercialization pathways.',
                features: ['Technology portfolio', 'Market opportunity', 'IP position', 'Growth trajectory'],
              },
            ].map((type, index) => (
              <AnimatedSection key={type.title} delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-white p-8">
                  <h3 className="text-xl font-bold text-navy">{type.title}</h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">{type.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {type.features.map((feature) => (
                      <span key={feature} className="inline-flex items-center rounded-full bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start the Conversation
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Whether you&apos;re a pharmaceutical company seeking technology licensing, or an investor exploring opportunities in pharmaceutical nanotechnology, we&apos;d welcome the opportunity to discuss how we can work together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark"
              >
                Partnership Inquiry
              </Link>
              <Link
                href="/technology-platforms"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Review Our Technology
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
