import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'AGCP Farmaceuticos: pharmaceutical nanotechnology company in Portugal. Led by Lawrence Fine (CEO) and Dr. Alexander Dementev (CTO).',
  openGraph: {
    title: 'About | AGCP Farmaceuticos',
    description: 'Leadership, mission, and facilities of AGCP Farmaceuticos pharmaceutical nanotechnology.',
  },
};

function PersonSchema() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Lawrence Fine',
      jobTitle: 'CEO & Chairman',
      worksFor: { '@type': 'Organization', name: 'AGCP Farmaceuticos, LDA' },
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Stanford University' },
        { '@type': 'EducationalOrganization', name: 'Emory University' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Dr. Alexander Dementev',
      jobTitle: 'President & CTO',
      worksFor: { '@type': 'Organization', name: 'AGCP Farmaceuticos, LDA' },
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agcp.pt' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://agcp.pt/about' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const milestones = [
  { year: 'Foundation', title: 'Company Established', description: 'AGCP Farmaceuticos founded in Caldas da Rainha, Portugal with focus on pharmaceutical nanotechnology.' },
  { year: 'R&D', title: 'Platform Development', description: 'Development and validation of three core nanotechnology platforms for pharmaceutical drug delivery.' },
  { year: 'Validation', title: 'Stability Demonstrated', description: '18+ months stability data validated for nanoemulsion platforms; 4+ years for CBD formulations.' },
  { year: 'Quality', title: 'Quality Standards Established', description: 'Implemented rigorous pharmaceutical quality systems for nanotechnology production.' },
  { year: 'Current', title: 'Commercial Partnerships', description: 'Actively pursuing pharmaceutical licensing partnerships and strategic investment for platform expansion.' },
];

export default function AboutPage() {
  return (
    <>
      <PersonSchema />
      <BreadcrumbSchema />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              About AGCP
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Enabling Pharmaceutical Innovation Through Proprietary Nanotechnology
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              AGCP Farmaceuticos is a Portuguese pharmaceutical nanotechnology company providing proprietary drug delivery platforms to the global pharmaceutical industry through B2B technology licensing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-xl text-accent font-semibold leading-relaxed">
                &ldquo;Enabling pharmaceutical innovation through proprietary nanotechnology platforms.&rdquo;
              </p>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                We believe that breakthroughs in drug delivery should be accessible to pharmaceutical companies of all sizes. Our B2B platform model removes the barrier of developing nanotechnology in-house, allowing our partners to focus on their therapeutic expertise while we provide the delivery technology.
              </p>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Operating from our facility in Portugal, we combine pharmaceutical manufacturing with cutting-edge nanotechnology research to deliver commercially viable solutions for our partners.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '3', label: 'Proprietary Platforms', desc: 'Validated nanotechnology' },
                  { value: 'PT', label: 'Portugal, EU', desc: 'Manufacturing base' },
                  { value: 'B2B', label: 'Platform Model', desc: 'Technology licensing' },
                  { value: '47+', label: 'Years Combined', desc: 'Leadership experience' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-surface border border-border p-6 text-center">
                    <p className="text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="mt-1 text-sm font-semibold text-navy">{stat.label}</p>
                    <p className="text-xs text-text-light">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32 bg-surface" id="leadership">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Experienced leaders combining deep pharmaceutical science expertise with proven business commercialization and M&A track records.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Lawrence Fine */}
            <AnimatedSection>
              <div className="h-full rounded-2xl bg-white border border-border overflow-hidden">
                <div className="bg-navy p-8 text-center">
                  <div className="mx-auto h-32 w-32 rounded-full border-4 border-accent/20 overflow-hidden">
                    <Image src="/30.jpeg" alt="Lawrence Fine" width={128} height={128} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Lawrence Fine</h3>
                  <p className="text-accent font-medium">CEO &amp; Chairman</p>
                </div>
                <div className="p-8">
                  <p className="text-text-secondary leading-relaxed">
                    A seasoned technology executive and business strategist with 17 years at Microsoft, Lawrence brings extensive experience in M&A, commercialization, and building high-growth ventures from concept to exit.
                  </p>
                  <div className="mt-6 space-y-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-text-light">Credentials</h4>
                    {[
                      'PhD in Engineering, Stanford University',
                      'MBA, Emory University Goizueta Business School',
                      '17-year career at Microsoft Corporation',
                      'Extensive M&A and commercialization expertise',
                      'Biotech board experience leading Phase II clinical trials',
                      'Track record of successful biotech exits',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <svg className="mt-1 h-4 w-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-text-secondary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Dr. Dementev */}
            <AnimatedSection delay={0.15}>
              <div className="h-full rounded-2xl bg-white border border-border overflow-hidden">
                <div className="bg-navy p-8 text-center">
                  <div className="mx-auto h-32 w-32 rounded-full border-4 border-accent/20 overflow-hidden">
                    <Image src="/Alex3-1-1-edited-200x300.png" alt="Dr. Alexander Dementev" width={128} height={128} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Dr. Alexander Dementev</h3>
                  <p className="text-accent font-medium">President &amp; CTO</p>
                </div>
                <div className="p-8">
                  <p className="text-text-secondary leading-relaxed">
                    A distinguished pharmaceutical scientist with over 30 years of research experience, Dr. Dementev is a pioneer in nano-suspension technology and the driving force behind AGCP&apos;s proprietary nanotechnology platforms.
                  </p>
                  <div className="mt-6 space-y-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-text-light">Credentials</h4>
                    {[
                      'PhD in Analytical Chemistry',
                      'Master\'s in Applied Physics',
                      '30+ years pharmaceutical research experience',
                      'Pioneer in nano-suspensions achieving <10nm particles',
                      'Developer of proprietary nanoemulsion methodologies',
                      'Expert in pharmaceutical formulation and drug delivery',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <svg className="mt-1 h-4 w-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-text-secondary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Company Milestones
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <AnimatedSection key={milestone.year} delay={i * 0.1}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {i < milestones.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-px bg-accent/20" />
                  )}
                  <div className="relative flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-accent text-white text-xs font-bold">
                    {milestone.year.substring(0, 3)}
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">{milestone.year}</p>
                    <h3 className="text-lg font-bold text-navy">{milestone.title}</h3>
                    <p className="mt-1 text-text-secondary">{milestone.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Our Facilities
              </h2>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Based in Caldas da Rainha, Portugal, our manufacturing facility provides the foundation for pharmaceutical-grade nanotechnology production.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Pharmaceutical-grade nanotechnology production',
                  'Dedicated nanotechnology formulation laboratories',
                  'Quality control and analytical testing facilities',
                  'Stability testing chambers (ICH compliant)',
                  'Scalable production from development through commercial volumes',
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
              <div className="rounded-2xl bg-white border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-navy">AGCP Farmaceuticos, LDA</p>
                    <p className="text-sm text-text-secondary">Caldas da Rainha, Portugal</p>
                  </div>
                </div>
                <div className="rounded-xl bg-surface border border-border p-6">
                  <p className="text-sm text-text-secondary">
                    Estrada Nacional 360, N 94<br />
                    Santa Catarina<br />
                    2500-773 Caldas da Rainha<br />
                    Portugal
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-8 items-center rounded-full bg-accent/5 px-3">
                    <span className="text-xs font-semibold text-accent">Pharmaceutical Grade</span>
                  </div>
                  <div className="flex h-8 items-center rounded-full bg-accent/5 px-3">
                    <span className="text-xs font-semibold text-accent">Portugal, EU</span>
                  </div>
                </div>
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
              Join Our Mission
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Partner with AGCP to bring next-generation nanotechnology drug delivery to the pharmaceutical market. We welcome partnership and investment inquiries.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark"
              >
                Get In Touch
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
