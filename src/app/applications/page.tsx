import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Applications',
  description:
    'Validated pharmaceutical applications of AGCP nanotechnology: nano-berberine for metabolic disease, pain & wound care, and custom drug delivery development.',
  openGraph: {
    title: 'Applications | AGCP Farmaceuticos',
    description: 'Validated pharmaceutical nanotechnology applications for licensing partners.',
  },
};

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agcp.pt' },
      { '@type': 'ListItem', position: 2, name: 'Applications', item: 'https://agcp.pt/applications' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ApplicationsPage() {
  return (
    <>
      <BreadcrumbSchema />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Validated Applications
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Proven Pharmaceutical Applications
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Our nanotechnology platforms have been validated through real-world pharmaceutical applications, demonstrating commercial viability for licensing partners.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Nano-Berberine */}
      <section className="py-24 lg:py-32" id="nano-berberine">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center rounded-full bg-accent/5 px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-accent">Application 01</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Nano-Berberine Platform
              </h2>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Berberine is a potent bioactive compound with well-documented benefits for metabolic health. However, its clinical utility has been severely limited by poor oral bioavailability&mdash;a challenge our nanotechnology platform directly addresses.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-navy">The Bioavailability Challenge</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    Conventional berberine formulations suffer from poor absorption, rapid metabolism, and limited systemic exposure. Our nano-formulation technology dramatically enhances bioavailability, enabling therapeutic concentrations at lower doses.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy">Metabolic Disease Applications</h3>
                  <ul className="mt-2 space-y-3">
                    {[
                      'Enhanced bioavailability for metabolic syndrome management',
                      'Improved glycemic control through superior absorption',
                      'Lipid metabolism support with optimized delivery',
                      'Anti-inflammatory properties delivered at therapeutic levels',
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
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl bg-surface border border-border p-8">
                <h3 className="text-lg font-bold text-navy mb-6">Platform Advantages</h3>
                <div className="space-y-6">
                  {[
                    { metric: 'Bioavailability', improvement: 'Significantly Enhanced', detail: 'Nano-formulation overcomes poor oral absorption' },
                    { metric: 'Dosing', improvement: 'Optimized', detail: 'Lower doses achieve therapeutic concentrations' },
                    { metric: 'Stability', improvement: 'Validated', detail: 'Pharmaceutical-grade formulation stability' },
                    { metric: 'Manufacturing', improvement: 'Scalable', detail: 'Pharmaceutical-grade production capability' },
                  ].map((item) => (
                    <div key={item.metric} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-accent/10">
                        <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-navy">{item.metric}: {item.improvement}</p>
                        <p className="text-sm text-text-secondary">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><hr className="border-border" /></div>

      {/* Pain & Wound Care */}
      <section className="py-24 lg:py-32" id="pain-wound">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection className="lg:order-2">
              <div className="inline-flex items-center rounded-full bg-accent/5 px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-accent">Application 02</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Pain &amp; Wound Care Portfolio
              </h2>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                A comprehensive product portfolio leveraging our transdermal nanoparticle delivery platform for natural, plant-based pain management and advanced wound healing formulations.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-navy">Natural, Plant-Based Formulations</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    Our pain and wound care products utilize plant-derived active compounds enhanced through nanoparticle delivery, achieving therapeutic efficacy while maintaining natural formulation profiles preferred in modern pharmaceutical development.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy">Nano-Enhanced Absorption</h3>
                  <ul className="mt-2 space-y-3">
                    {[
                      'Transdermal delivery of natural analgesic compounds',
                      'Enhanced penetration for accelerated wound healing',
                      'Controlled release profiles for sustained therapeutic effect',
                      'Natural formulation approach meeting market demand',
                      'Ready for licensing partnership and commercial development',
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
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:order-1">
              <div className="rounded-2xl bg-surface border border-border p-8">
                <h3 className="text-lg font-bold text-navy mb-6">Product Development Pipeline</h3>
                <div className="space-y-0">
                  {[
                    { phase: 'Formulation', status: 'Completed', description: 'Nano-enhanced natural compound formulations developed' },
                    { phase: 'Validation', status: 'Completed', description: 'Efficacy and stability testing validated' },
                    { phase: 'Manufacturing', status: 'Ready', description: 'Production protocols established' },
                    { phase: 'Licensing', status: 'Available', description: 'Ready for pharmaceutical partner licensing' },
                  ].map((item, i) => (
                    <div key={item.phase} className="relative flex gap-4 pb-8 last:pb-0">
                      {i < 3 && (
                        <div className="absolute left-5 top-10 bottom-0 w-px bg-accent/20" />
                      )}
                      <div className={`relative flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full ${
                        item.status === 'Completed' ? 'bg-accent text-white' :
                        item.status === 'Ready' ? 'bg-accent/20 text-accent' :
                        'bg-accent/10 text-accent'
                      }`}>
                        {item.status === 'Completed' ? (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-xs font-bold">{i + 1}</span>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-navy">{item.phase}</p>
                        <span className={`inline-block mt-0.5 text-xs font-medium px-2 py-0.5 rounded-full ${
                          item.status === 'Completed' ? 'bg-accent/10 text-accent' :
                          item.status === 'Ready' ? 'bg-green-50 text-green-700' :
                          'bg-amber-50 text-amber-700'
                        }`}>{item.status}</span>
                        <p className="text-sm text-text-secondary mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><hr className="border-border" /></div>

      {/* Custom Development */}
      <section className="py-24 lg:py-32" id="custom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-accent/5 px-4 py-1.5 mb-6">
              <span className="text-sm font-semibold text-accent">Application 03</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Custom Pharmaceutical Development
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Partner with AGCP to apply our nanotechnology platforms to your specific drug delivery challenges. We provide end-to-end support from formulation development through regulatory preparation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Formulation Development',
                description: 'Our team works with your active pharmaceutical ingredients to develop optimized nano-formulations tailored to your therapeutic targets and delivery requirements.',
                items: ['API compatibility assessment', 'Particle size optimization', 'Stability testing protocols', 'Formulation scale-up pathway'],
              },
              {
                title: 'Development Process',
                description: 'A structured development pathway from initial feasibility through validated manufacturing, ensuring clear milestones and deliverables at each stage.',
                items: ['Feasibility assessment', 'Proof-of-concept development', 'Optimization and validation', 'Technology transfer support'],
              },
              {
                title: 'Regulatory Support',
                description: 'Leverage our regulatory expertise to accelerate your path to market across global jurisdictions.',
                items: ['Regulatory strategy guidance', 'Documentation support', 'Stability data packages', 'Commercialization pathway planning'],
              },
            ].map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.15}>
                <div className="h-full rounded-2xl border border-border bg-white p-8">
                  <h3 className="text-xl font-bold text-navy">{card.title}</h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">{card.description}</p>
                  <ul className="mt-6 space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg className="h-4 w-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
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
              Explore Licensing Opportunities
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Whether you&apos;re interested in our validated applications or custom development, we&apos;re ready to discuss how our platforms can enhance your pharmaceutical pipeline.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark"
              >
                Contact Our Team
              </Link>
              <Link
                href="/partnership"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                View Partnership Model
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
