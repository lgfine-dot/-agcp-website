import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Technology Platforms',
  description:
    'Explore AGCP\'s three proprietary nanotechnology platforms: scalable graphene production, transdermal nanoparticle delivery, and BBB nanoemulsion technology.',
  openGraph: {
    title: 'Technology Platforms | AGCP Farmaceuticos',
    description: 'Three proprietary nanotechnology platforms for pharmaceutical drug delivery licensing.',
  },
};

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agcp.pt' },
      { '@type': 'ListItem', position: 2, name: 'Technology Platforms', item: 'https://agcp.pt/technology-platforms' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const grapheneSpecs = [
  { label: 'Cost Advantage', value: 'Significant Reduction' },
  { label: 'Market Price', value: '$500-5,000/gram' },
  { label: 'Quality', value: 'Monolayer Grade' },
  { label: 'Consistency', value: 'Pharmaceutical-Grade' },
];

const transdermalSpecs = [
  { label: 'Delivery Method', value: 'Topical Nanoparticle' },
  { label: 'Absorption', value: 'Enhanced Penetration' },
  { label: 'Validation', value: 'Pre-Clinical Data' },
  { label: 'Applications', value: 'Multi-Therapeutic' },
];

const bbbSpecs = [
  { label: 'Particle Size', value: '<10nm' },
  { label: 'Formulation', value: 'Oil-in-Water' },
  { label: 'Stability', value: '4+ Years (CBD)' },
  { label: 'Target', value: 'CNS Delivery' },
];

export default function TechnologyPlatformsPage() {
  return (
    <>
      <BreadcrumbSchema />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Technology Platforms
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Three Proprietary Nanotechnology Platforms
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Each platform represents years of pharmaceutical R&D, validated through rigorous testing and ready for commercial licensing partnerships.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Graphene Production */}
      <section className="py-24 lg:py-32" id="graphene">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center rounded-full bg-accent/5 px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-accent">Platform 01</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Scalable Graphene Production
              </h2>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Our proprietary manufacturing process produces pharmaceutical-grade monolayer graphene at a fraction of conventional costs, unlocking applications previously limited by material expense.
              </p>

              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold text-navy">Manufacturing Advantages</h3>
                <ul className="space-y-3">
                  {[
                    'Proprietary monolayer graphene production methodology',
                    'Significant cost reduction versus market rates of $500-5,000/gram',
                    'Scalable manufacturing for pharmaceutical-volume production',
                    'Consistent quality meeting pharmaceutical-grade specifications',
                    'Applications spanning drug delivery, biosensors, and advanced materials',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold text-navy">Pharmaceutical Applications</h3>
                <p className="text-text-secondary leading-relaxed">
                  Graphene&apos;s unique properties enable next-generation drug delivery systems, including enhanced loading capacity for therapeutic compounds, improved biocompatibility profiles, and novel approaches to targeted delivery that were previously cost-prohibitive.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* Cost Comparison Visual */}
              <div className="rounded-2xl bg-surface border border-border p-8">
                <h3 className="text-lg font-bold text-navy mb-6">Cost Comparison</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-text-secondary">AGCP Production</span>
                      <span className="text-sm font-bold text-accent">Significant Reduction</span>
                    </div>
                    <div className="h-4 rounded-full bg-border overflow-hidden">
                      <div className="h-full w-[5%] rounded-full bg-accent" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-text-secondary">Market Low</span>
                      <span className="text-sm font-bold text-text-secondary">$500/gram</span>
                    </div>
                    <div className="h-4 rounded-full bg-border overflow-hidden">
                      <div className="h-full w-[40%] rounded-full bg-text-light" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-text-secondary">Market High</span>
                      <span className="text-sm font-bold text-text-secondary">$5,000/gram</span>
                    </div>
                    <div className="h-4 rounded-full bg-border overflow-hidden">
                      <div className="h-full w-full rounded-full bg-navy/30" />
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-xs text-text-light">
                  Cost advantage enables pharmaceutical-scale graphene applications for the first time.
                </p>
              </div>

              {/* Technical Specs */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {grapheneSpecs.map((spec) => (
                  <div key={spec.label} className="rounded-xl bg-white border border-border p-4">
                    <p className="text-xs text-text-light uppercase tracking-wider">{spec.label}</p>
                    <p className="mt-1 text-lg font-bold text-navy">{spec.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <hr className="border-border" />
      </div>

      {/* Transdermal Nanoparticle Delivery */}
      <section className="py-24 lg:py-32" id="transdermal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection className="lg:order-2">
              <div className="inline-flex items-center rounded-full bg-accent/5 px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-accent">Platform 02</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Transdermal Nanoparticle Delivery Systems
              </h2>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Our nanoparticle delivery systems optimize particle size and surface characteristics to enhance penetration through the skin barrier, enabling targeted topical drug delivery with superior absorption profiles.
              </p>

              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold text-navy">Mechanism of Action</h3>
                <p className="text-text-secondary leading-relaxed">
                  Optimized nanoparticles penetrate the stratum corneum through intercellular pathways, delivering active pharmaceutical ingredients to target tissue layers with significantly enhanced bioavailability compared to conventional topical formulations.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold text-navy">Key Advantages</h3>
                <ul className="space-y-3">
                  {[
                    'Enhanced penetration through skin barrier for improved bioavailability',
                    'Optimized particle size distribution for targeted tissue delivery',
                    'Clinical validation for topical pharmaceutical applications',
                    'Compatible with a wide range of active pharmaceutical ingredients',
                    'Scalable manufacturing for pharmaceutical-grade production',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:order-1">
              {/* Delivery Visualization */}
              <div className="rounded-2xl bg-surface border border-border p-8">
                <h3 className="text-lg font-bold text-navy mb-6">Transdermal Delivery Process</h3>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Nanoparticle Formulation', desc: 'Active ingredients encapsulated in optimized nanoparticles' },
                    { step: '02', title: 'Skin Barrier Penetration', desc: 'Particles navigate intercellular pathways through the stratum corneum' },
                    { step: '03', title: 'Targeted Release', desc: 'Controlled release at target tissue depth for sustained therapeutic effect' },
                    { step: '04', title: 'Enhanced Absorption', desc: 'Superior bioavailability versus conventional topical formulations' },
                  ].map((item, i) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent text-sm font-bold">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-navy">{item.title}</p>
                        <p className="text-sm text-text-secondary mt-0.5">{item.desc}</p>
                      </div>
                      {i < 3 && <div className="absolute ml-5 mt-12 h-4 border-l border-dashed border-accent/30" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {transdermalSpecs.map((spec) => (
                  <div key={spec.label} className="rounded-xl bg-white border border-border p-4">
                    <p className="text-xs text-text-light uppercase tracking-wider">{spec.label}</p>
                    <p className="mt-1 text-lg font-bold text-navy">{spec.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <hr className="border-border" />
      </div>

      {/* BBB Nanoemulsion Technology */}
      <section className="py-24 lg:py-32" id="bbb">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center rounded-full bg-accent/5 px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-accent">Platform 03</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Blood-Brain Barrier Nanoemulsion Technology
              </h2>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Our proprietary nanoemulsion platform creates oil-in-water nano-suspensions with particles below 10nm, enabling drug delivery across the blood-brain barrier&mdash;opening CNS therapeutic pathways previously considered impossible.
              </p>

              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold text-navy">Breakthrough Capability</h3>
                <p className="text-text-secondary leading-relaxed">
                  The blood-brain barrier represents one of the greatest challenges in pharmaceutical development, blocking over 98% of therapeutic compounds from reaching the central nervous system. Our nanoemulsion technology achieves particle sizes below 10nm, enabling passage through the BBB and opening new treatment possibilities for neurological conditions.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold text-navy">Validation & Stability</h3>
                <ul className="space-y-3">
                  {[
                    'Particle sizes consistently below 10nm in nano-suspension formulations',
                    '4+ years of demonstrated stability with CBD formulations',
                    '18+ months validated stability for nanoemulsion compositions',
                    'Oil-in-water formulation for superior biocompatibility',
                    'Enables CNS drug delivery for neurological therapeutic applications',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* Particle Size Visual */}
              <div className="rounded-2xl bg-surface border border-border p-8">
                <h3 className="text-lg font-bold text-navy mb-6">Particle Size Achievement</h3>
                <div className="flex items-center justify-center py-8">
                  <svg viewBox="0 0 300 200" className="w-full max-w-md" aria-label="Particle size comparison showing AGCP's sub-10nm particles versus typical 100-200nm nanoparticles">
                    {/* Scale reference */}
                    <text x="150" y="20" textAnchor="middle" className="text-xs" fill="#94A3B8" fontSize="11">Particle Size Comparison (nm)</text>

                    {/* Typical nanoparticle */}
                    <circle cx="100" cy="110" r="50" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
                    <text x="100" y="115" textAnchor="middle" fill="#475569" fontSize="14" fontWeight="600">100-200nm</text>
                    <text x="100" y="175" textAnchor="middle" fill="#94A3B8" fontSize="10">Typical Nanoparticle</text>

                    {/* AGCP nanoemulsion */}
                    <circle cx="220" cy="110" r="8" fill="#0066FF" opacity="0.2" />
                    <circle cx="220" cy="110" r="5" fill="#0066FF" />
                    <text x="220" y="115" textAnchor="middle" fill="white" fontSize="6" fontWeight="700">&lt;10</text>
                    <text x="220" y="175" textAnchor="middle" fill="#0066FF" fontSize="10" fontWeight="600">AGCP Nanoemulsion</text>

                    {/* Arrow */}
                    <line x1="155" y1="110" x2="200" y2="110" stroke="#0066FF" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#0066FF" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <p className="text-sm text-text-secondary text-center">
                  Our nanoemulsion particles are 10-20x smaller than typical nanoparticles, enabling BBB penetration.
                </p>
              </div>

              {/* Stability Timeline */}
              <div className="mt-8 rounded-2xl bg-white border border-border p-8">
                <h3 className="text-lg font-bold text-navy mb-4">Stability Data</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-text-secondary">CBD Nanoemulsion</span>
                      <span className="text-sm font-bold text-accent">4+ Years</span>
                    </div>
                    <div className="h-3 rounded-full bg-surface overflow-hidden">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-accent to-accent-light" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-text-secondary">General Nanoemulsions</span>
                      <span className="text-sm font-bold text-accent">18+ Months</span>
                    </div>
                    <div className="h-3 rounded-full bg-surface overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-accent to-accent-light" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {bbbSpecs.map((spec) => (
                  <div key={spec.label} className="rounded-xl bg-white border border-border p-4">
                    <p className="text-xs text-text-light uppercase tracking-wider">{spec.label}</p>
                    <p className="mt-1 text-lg font-bold text-navy">{spec.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              License Our Technology Platforms
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Partner with AGCP to integrate our validated nanotechnology platforms into your pharmaceutical development pipeline.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark"
              >
                Discuss Licensing
              </Link>
              <Link
                href="/partnership"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Partnership Model
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
