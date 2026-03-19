import AnimatedSection from '@/components/AnimatedSection';

export default function NutraceuticalApproachPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero-section relative flex items-center justify-center min-h-[400px]">
        <div className="absolute inset-0 bg-[#1a3a5c]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Nutraceutical Approach
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl font-light">
              Harnessing the power of natural bioactive compounds through advanced nano-delivery
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 1: INTRO ─────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-5 text-lg leading-relaxed text-text-secondary">
              <p>
                Nutraceuticals are beneficial compounds — either foods or components of food — that provide medical or health benefits beyond basic nutrition.
              </p>
              <p>
                At AGCP, we have designed nanofabricated delivery systems including carbohydrate-based, lipid-based (solid and liquid), and protein-based delivery systems. Our liquid nano-delivery systems include nanoliposomes and nanoemulsions.
              </p>
              <p>
                Bioactive compounds such as vitamins, flavonoids, phenolics, and proteins are essential for proper cell growth and differentiation in living organisms. They also play a crucial role in combating diseases by activating biological mechanisms.
              </p>
              <p>
                Our advanced nano-formulation procedures significantly reduce the limitations of bioactive molecules — including poor bioavailability, low specificity, and inadequate solubility.
              </p>
            </div>

            <img
              src="/nutra-compounds.jpg"
              alt="Bioactive compounds diagram"
              className="w-full rounded-lg my-8"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 2: TWO SUBSECTIONS ────────────────────────────── */}
      <section className="py-16 lg:py-20 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="card p-8 h-full">
                <p className="section-subheading mb-3">01</p>
                <h2 className="text-2xl font-bold tracking-tight text-navy mb-4">
                  Dietary Supplements
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Dietary supplements are a type of nutraceutical containing nutrients derived from food products. They are intended to complement the diet and are distinct from traditional foods, providing targeted nutritional support.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="card p-8 h-full">
                <p className="section-subheading mb-3">02</p>
                <h2 className="text-2xl font-bold tracking-tight text-navy mb-4">
                  Functional Foods
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Functional foods offer health benefits beyond their nutritional value, including both whole foods and fortified products designed to support specific health outcomes and disease prevention.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DELIVERY DIAGRAM ──────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="section-subheading mb-3">Our Platform</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-8">
              Nanotechnology for Nutraceutical Delivery
            </h2>
            <img
              src="/nutra-delivery.jpg"
              alt="Nanotechnology nutraceutical delivery system"
              className="max-w-3xl w-full mx-auto rounded-lg"
            />
            <p className="mt-4 text-sm text-text-secondary italic">
              Our nano-delivery platform enhances solubility, bioavailability, and shelf-life of nutraceutical compounds
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
