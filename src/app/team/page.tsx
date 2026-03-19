import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const teamMembers = [
  {
    name: 'Lawrence Fine',
    title: 'Chief Executive Officer',
    photo: '/30.jpeg',
    photoClass: 'w-40 h-40 object-cover rounded-full mx-auto mb-4',
    bio: 'Chairman of the Board and CEO of AGCP. Lawrence brings 17+ years of M&A and commercialization experience, including Fortune 500 engagements, with deep expertise in Technology, Healthcare, and Biotechnology. Proven track record in divestments, acquisitions, exit strategy, and strategic growth initiatives. Holds a PhD in Engineering from Stanford University and an MBA from Emory University.',
  },
  {
    name: 'Dr. Alexander Dementev',
    title: 'President & Chief Technology Officer',
    photo: '/Alex3-1-1-edited-200x300.png',
    photoClass: 'w-40 h-40 object-cover object-top rounded-full mx-auto mb-4',
    bio: 'Formulation and materials scientist with 30+ years in pharmaceutical and natural health product development. Specializes in nanotechnology, novel drug synthesis, HPLC analytical method development, SOP writing, patent applications, and pharmaceutical due diligence. Key achievement: oil-in-water nano-suspensions with particle size below 10nm and stability exceeding 18 months. Holds a Master\u2019s in Applied Physics and a PhD in Analytical Chemistry.',
  },
];

export default function TeamPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero-section relative flex items-center justify-center min-h-[400px]">
        <div className="absolute inset-0 bg-[#1a3a5c]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Team
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl font-light">
              Experts spanning organic chemistry, nanotechnology, and clinical research
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 1: INTRO ─────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-5 text-lg leading-relaxed text-text-secondary">
              <p>
                Our scientific team is represented by experts and scientists whose skills span most disciplines from organic chemistry to clinical investigations. This unique combination of multidisciplinary expertise allows us to creatively and efficiently produce cutting-edge solutions to unmet medical needs.
              </p>
              <p>
                The team collectively provides a wealth of knowledge through exposure to current pharmaceutical and nutraceutical approaches, as well as personal industry experience — enabling AGCP to develop unique products and technologies. Our team has successfully developed several unique dietary supplements and natural products, with many more in process.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 2: TEAM CARDS ────────────────────────────────── */}
      <section className="py-16 lg:py-20 section-alt">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.15}>
                <div className="card p-8 text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className={member.photoClass}
                  />
                  <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                  <p className="text-sm font-semibold text-accent mt-1">{member.title}</p>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary text-left">
                    {member.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: JOIN US ────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Work With Our Team
            </h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              We collaborate with leading universities, research institutions, and pharmaceutical partners worldwide. If you are interested in research collaboration or partnership opportunities, we would like to hear from you.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
