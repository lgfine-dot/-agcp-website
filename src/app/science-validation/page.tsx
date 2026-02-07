import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Science & Validation',
  description:
    'Scientific validation data for AGCP nanotechnology platforms: 18+ months stability, EU GMP certification, quality control processes, and regulatory expertise.',
  openGraph: {
    title: 'Science & Validation | AGCP Farmaceuticos',
    description: 'Rigorous scientific validation backing our pharmaceutical nanotechnology platforms.',
  },
};

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agcp.pt' },
      { '@type': 'ListItem', position: 2, name: 'Science & Validation', item: 'https://agcp.pt/science-validation' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ScienceValidationPage() {
  return (
    <>
      <BreadcrumbSchema />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Science &amp; Validation
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Rigorous Scientific Validation
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Our technology platforms are supported by extensive stability data, pharmaceutical-grade manufacturing standards, and deep regulatory expertise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stability Data */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Stability Data
              </h2>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Pharmaceutical formulation stability is critical for commercial viability. Our platforms demonstrate industry-leading stability profiles validated through rigorous long-term testing protocols.
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-xl border border-border p-6">
                  <h3 className="font-bold text-navy">Nanoemulsion Stability</h3>
                  <p className="mt-1 text-3xl font-bold text-accent">18+ Months</p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Validated stability for nanoemulsion compositions under standard pharmaceutical storage conditions. Particle size, zeta potential, and active ingredient concentration maintained within specification throughout the testing period.
                  </p>
                </div>

                <div className="rounded-xl border border-border p-6">
                  <h3 className="font-bold text-navy">CBD Formulation Stability</h3>
                  <p className="mt-1 text-3xl font-bold text-accent">4+ Years</p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Our CBD nanoemulsion formulations have demonstrated exceptional long-term stability exceeding four years, proving the robustness of our nanoemulsion platform for commercial pharmaceutical applications.
                  </p>
                </div>

                <div className="rounded-xl border border-border p-6">
                  <h3 className="font-bold text-navy">Nano-Suspension Particles</h3>
                  <p className="mt-1 text-3xl font-bold text-accent">&lt;10nm Consistent</p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Reproducible particle size below 10nm across production batches, validated through dynamic light scattering (DLS) and confirmed by electron microscopy.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* Stability Timeline Visualization */}
              <div className="rounded-2xl bg-surface border border-border p-8">
                <h3 className="text-lg font-bold text-navy mb-8">Stability Testing Timeline</h3>
                <div className="space-y-8">
                  {[
                    { month: '0', label: 'Initial Formulation', status: 'Baseline characterization and specification setting' },
                    { month: '3', label: '3-Month Check', status: 'Accelerated stability conditions validated' },
                    { month: '6', label: '6-Month Review', status: 'All parameters within specification' },
                    { month: '12', label: '12-Month Milestone', status: 'Long-term stability confirmed' },
                    { month: '18+', label: '18+ Month Validation', status: 'Commercial stability demonstrated' },
                  ].map((item, i, arr) => (
                    <div key={item.month} className="relative flex gap-4">
                      {i < arr.length - 1 && (
                        <div className="absolute left-5 top-10 bottom-0 w-px bg-accent/20" style={{ height: 'calc(100% + 12px)' }} />
                      )}
                      <div className="relative flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-accent text-white text-xs font-bold">
                        {item.month}
                      </div>
                      <div>
                        <p className="font-semibold text-navy">{item.label}</p>
                        <p className="text-sm text-text-secondary mt-0.5">{item.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* GMP & Quality */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              EU GMP Compliance &amp; Quality Systems
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Our manufacturing operations meet the stringent requirements of European Good Manufacturing Practice certification, ensuring consistent pharmaceutical-grade output.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'EU GMP Certification',
                description: 'Our production facility in Portugal holds European GMP certification, the gold standard for pharmaceutical manufacturing quality assurance.',
                points: ['Certified production facility', 'Regular compliance audits', 'Full traceability systems', 'Validated clean room operations'],
              },
              {
                title: 'Quality Control Processes',
                description: 'Multi-stage quality control throughout the manufacturing process ensures every batch meets pharmaceutical specifications.',
                points: ['Raw material verification', 'In-process quality checks', 'Final product testing', 'Batch release documentation'],
              },
              {
                title: 'Analytical Methods',
                description: 'State-of-the-art analytical equipment and validated methods for comprehensive characterization of nanoemulsions and nanoparticles.',
                points: ['Dynamic light scattering (DLS)', 'Zeta potential analysis', 'HPLC active content assay', 'Electron microscopy validation'],
              },
              {
                title: 'Stability Testing',
                description: 'ICH-compliant stability testing programs providing robust data packages to support regulatory submissions globally.',
                points: ['ICH Q1A(R2) compliant', 'Accelerated & long-term studies', 'Photostability testing', 'In-use stability assessment'],
              },
              {
                title: 'Documentation Standards',
                description: 'Comprehensive documentation systems meeting regulatory requirements across multiple jurisdictions for seamless technology transfer.',
                points: ['Batch manufacturing records', 'Standard operating procedures', 'Validation protocols & reports', 'Regulatory submission packages'],
              },
              {
                title: 'Continuous Improvement',
                description: 'Systematic process optimization and quality improvement programs maintaining our position at the forefront of nano-pharmaceutical manufacturing.',
                points: ['Process optimization studies', 'Root cause analysis systems', 'CAPA implementation', 'Technology advancement program'],
              },
            ].map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.1}>
                <div className="h-full rounded-2xl bg-white border border-border p-8">
                  <h3 className="text-lg font-bold text-navy">{card.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{card.description}</p>
                  <ul className="mt-4 space-y-2">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg className="h-4 w-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Expertise */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Regulatory Pathway Expertise
              </h2>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Navigating the regulatory landscape for nanotechnology-based pharmaceuticals requires specialized expertise. Our team provides comprehensive regulatory support to accelerate your path to market.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'EU pharmaceutical regulatory framework expertise',
                  'FDA submission strategy consultation',
                  'Nano-specific regulatory guidance and documentation',
                  'Global market access pathway planning',
                  'Post-marketing compliance support',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl bg-surface border border-border p-8">
                <h3 className="text-lg font-bold text-navy mb-6">Key Regulatory Capabilities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'EU', label: 'GMP Certified' },
                    { value: 'ICH', label: 'Compliant Studies' },
                    { value: 'FDA', label: 'Strategy Support' },
                    { value: 'Global', label: 'Market Access' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-white border border-border p-4 text-center">
                      <p className="text-2xl font-bold text-accent">{item.value}</p>
                      <p className="text-xs text-text-secondary mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Publications Placeholder */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Research &amp; Publications
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Our scientific team actively contributes to the advancement of pharmaceutical nanotechnology. Technical publications and white papers are available upon request for qualified pharmaceutical partners.
            </p>
            <div className="mt-8 rounded-2xl bg-white border border-border p-8">
              <p className="text-text-secondary">
                For access to our technical documentation, stability data packages, and research publications, please contact our scientific team through our partnership inquiry process.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-dark"
              >
                Request Technical Documentation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Review Our Scientific Credentials
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Interested in detailed technical data, stability reports, or regulatory documentation? Our team is ready to provide comprehensive information for qualified partners.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark"
            >
              Contact Scientific Team
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
