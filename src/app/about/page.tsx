import AnimatedSection from '@/components/AnimatedSection';

const leaders = [
  {
    name: 'Lawrence Fine',
    title: 'Chief Executive Officer',
    photo: '/30.jpeg',
    bio: 'Chairman of the Board and CEO of AGCP, Lawrence brings extensive M&A and commercialization experience spanning Fortune 500 companies, with deep expertise in Technology, Healthcare, and Biotechnology. He has a proven track record in divestments, acquisitions, and strategic growth — and holds a PhD in Engineering from Stanford University and an MBA from Emory University.',
  },
  {
    name: 'Dr. Alexander Dementev',
    title: 'President & Chief Technology Officer',
    photo: '/Alex3-1-1-edited-200x300.png',
    bio: 'An experienced formulation and materials scientist with over thirty years in pharmaceutical and natural health product development. Alexander specializes in nanotechnology, novel drug synthesis, HPLC method development, and pharmaceutical due diligence. Notable achievement: oil-in-water nano-suspensions with average particle size below 10nm and stability exceeding eighteen months. Holds a Master\u2019s in Applied Physics and a PhD in Analytical Chemistry.',
  },
];

const capabilities = [
  {
    stat: 'EU Licensed Producer',
    description: 'European pharmaceutical producer license',
  },
  {
    stat: 'Sub-10nm Particles',
    description: 'Proven nanoemulsion stability exceeding 4 years',
  },
  {
    stat: 'AI-Driven R&D',
    description: 'Machine learning-assisted drug candidate optimization',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero-section relative flex items-center justify-center min-h-[400px]">
        <div className="absolute inset-0 bg-[#1a3a5c]" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative text-center px-4">
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              About AGCP Farmac&ecirc;uticos LDA
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 1: COMPANY OVERVIEW ──────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="section-subheading mb-3">Our Company</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-6">
              Who We Are
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-text-secondary">
              <p>
                AGCP Farmac&ecirc;uticos LDA is a vertically integrated company — a future leader in the pharmaceutical industry. With state-of-the-art facilities in Portugal, we are focused on producing the highest quality pharmaceutical-grade natural medicines and plant extract-based therapeutics.
              </p>
              <p>
                Through our revolutionary manufacturing methods, we achieve extremely high production output with a fraction of the cost and land footprint required by conventional approaches.
              </p>
              <p>
                We develop, manufacture, and supply the highest quality oil-soluble and nature-derived products, while heavily targeting research and development for the purpose of creating new proprietary formulations, drug delivery systems, and specialty research studies with leading universities around the world.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 2: ADVANCED PLATFORM ─────────────────────────── */}
      <section className="py-16 lg:py-20 section-alt">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="section-subheading mb-3">Our Platform</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-6">
              Our Advanced Drug Delivery Platform
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-text-secondary">
              <p>
                Our platform operates at the cellular membrane level, combining water-soluble and oil-soluble ingredients within a single formulation. Our prime active ingredients are natural and widely available.
              </p>
              <p>
                By combining active pharmaceutical ingredients with specific hormones or proteins, we utilize natural molecular exchange mechanisms and the principles of human cell biology. Our formulations are also designed to deliver essential microelements and supplements to support optimized biochemical functions.
              </p>
              <p>
                AGCP&apos;s research focuses on stable and potent small-molecule-loaded formulations. We leverage AI algorithms that analyze extensive experimental data to identify disease-associated targets and predict their interactions with potential drug candidates — enabling a more efficient and targeted approach to drug discovery while reducing development costs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 3: LEADERSHIP ────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="section-subheading mb-3">Our People</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Leadership Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <AnimatedSection key={leader.name} delay={index * 0.15}>
                <div className="card p-8 flex flex-col sm:flex-row gap-6">
                  <div className="shrink-0">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-32 h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{leader.name}</h3>
                    <p className="text-sm font-semibold text-accent mt-1">{leader.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CAPABILITY BOXES ──────────────────────────── */}
      <section className="py-16 lg:py-20 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <AnimatedSection key={item.stat} delay={index * 0.12}>
                <div className="card p-8 text-center transition-shadow">
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
    </>
  );
}
