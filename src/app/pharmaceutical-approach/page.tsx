import AnimatedSection from '@/components/AnimatedSection';

const features = [
  {
    title: 'Targeted Delivery',
    description:
      'Controlled delivery of drugs to specific sites — tumors, inflamed tissue, infected areas — reducing the amount of drug required and minimizing side effects.',
  },
  {
    title: 'Improved Solubility & Stability',
    description:
      'Nanoparticles improve the solubility and stability of drugs, making them more effective in treating diseases.',
  },
  {
    title: 'Enhanced Bioavailability',
    description:
      'Nanotechnology increases drug absorption and distribution in the body, allowing for lower doses with reduced toxicity.',
  },
];

export default function PharmaceuticalApproachPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero-section relative flex items-center justify-center min-h-[400px]">
        <div className="absolute inset-0 bg-[#1a3a5c]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Pharmaceutical Approach
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl font-light">
              Nanoscale pertains to the size of one-billionth or 10<sup>&minus;9</sup> m of a material.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 1: SIZE COMPARISON ────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <img
              src="/nanomedicine-diagram.png"
              alt="Nanoscale size comparison — from water molecule to baseball"
              className="w-full rounded-lg my-8"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 2: BODY TEXT + FEATURE BOXES ─────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-5 text-lg leading-relaxed text-text-secondary">
              <p>
                Nanoscience has revolutionized the pharmaceutical industry by enabling the production of improved therapeutic drugs with enhanced efficacy and lower toxicity. Nanoparticles can improve the pharmacokinetics of drugs by increasing their solubility, stability, and bioavailability.
              </p>
              <p>
                Knowing the beneficial aspects of nanomedicine, AGCP is harnessing the applications of nanotechnology in treatment and prevention of diseases.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.12}>
                <div className="card p-6 h-full transition-shadow">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SUPPORTING VISUAL ─────────────────────────── */}
      <section className="py-16 lg:py-20 section-alt">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <img
              src="/pharma-approach-hero.jpg"
              alt="Nanotechnology pharmaceutical research"
              className="w-full h-96 object-cover rounded-lg"
            />
            <p className="mt-4 text-sm text-text-secondary text-center italic">
              AGCP&apos;s nanoemulsion platform — validated through Experiment 0001 achieving sub-10nm particle size with 4+ year stability
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
