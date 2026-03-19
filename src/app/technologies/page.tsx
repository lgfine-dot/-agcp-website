import AnimatedSection from '@/components/AnimatedSection';

const sections = [
  {
    heading: 'Our Technologies Focus',
    imageLabel: 'technologies-focus-image',
    imageLeft: true,
    bgAlt: true,
    bullets: [
      'Self-Nanoemulsifying Drug Delivery Systems (SNEDDS) — polymer-lipid mixed micelles in fast-dissolving and fast-absorbing oral forms',
      'Solubilizing delivery system for poorly soluble BCS Class IV compounds',
      'Enhance therapeutic efficacy and minimize adversities associated with available drugs, enabling new classes of therapeutics',
      'Develop pharmaceutically suboptimal but biologically active new molecular entities previously considered undevelopable',
      'Efficacious alternative delivery of known compounds associated with undesirable side-effects',
    ],
  },
  {
    heading: 'Laboratory Capabilities',
    imageLabel: 'lab-capabilities-image',
    imageLeft: false,
    bgAlt: false,
    bullets: [
      'Agilent HPLC systems for advanced chemical analysis and analytical method development',
      'Erweka dissolution testing for formulation characterization',
      'Liquid dosage forms: sprays, self-emulsifying concentrates, nanoemulsions and submicron emulsions',
      'Soft gelatin capsules (liquid-filled with SNEDDS)',
      'Sublingual fast-dissolving and fast-absorbing tablets for transmucosal drug transport',
      'Topical solubilizing formulations',
    ],
  },
  {
    heading: 'Our Development Focus',
    imageLabel: 'development-focus-image',
    imageLeft: true,
    bgAlt: true,
    bullets: [
      'Highest quality ingredients — no added ineffective fillers that reduce costs',
      'Fast-acting targeted release via nanoemulsions and submicron emulsion technologies',
      'Controlled absorption with designed reduction in variability',
      'Absorption irrespective of feeding state for sublingual formulations',
      'Advanced dissolution rate specialization via self-emulsifying concentrates',
      'AI-assisted pharmacokinetic modeling and compound optimization',
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero-section relative flex items-center justify-center min-h-[400px]">
        <div className="absolute inset-0 bg-[#1a3a5c]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              TECHNOLOGIES. MASTERING MICRO
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl font-light max-w-3xl mx-auto">
              Advanced nanoscale drug delivery systems engineered for superior therapeutic outcomes
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── THREE ALTERNATING SECTIONS ────────────────────────────── */}
      {sections.map((section, index) => (
        <section
          key={section.heading}
          className={`py-16 lg:py-20 ${section.bgAlt ? 'section-alt' : ''}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection
              delay={0.1}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Image placeholder */}
              <div className={section.imageLeft ? 'lg:order-1' : 'lg:order-2'}>
                <div className="h-64 w-full rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-sm text-text-light font-medium">
                    {section.imageLabel}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className={section.imageLeft ? 'lg:order-2' : 'lg:order-1'}>
                <p className="section-subheading mb-3">
                  {`0${index + 1}`}
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl mb-6">
                  {section.heading}
                </h2>
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-text-secondary leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}
    </>
  );
}
