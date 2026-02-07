import Link from 'next/link';

const platformLinks = [
  { href: '/technology-platforms#graphene', label: 'Scalable Graphene Production' },
  { href: '/technology-platforms#transdermal', label: 'Transdermal Nanoparticle Delivery' },
  { href: '/technology-platforms#bbb', label: 'BBB Nanoemulsion Technology' },
];

const companyLinks = [
  { href: '/about', label: 'About AGCP' },
  { href: '/about#leadership', label: 'Leadership Team' },
  { href: '/science-validation', label: 'Science & Validation' },
  { href: '/partnership', label: 'Partnership Model' },
  { href: '/contact', label: 'Contact Us' },
];

const applicationLinks = [
  { href: '/applications#nano-berberine', label: 'Nano-Berberine Platform' },
  { href: '/applications#pain-wound', label: 'Pain & Wound Care' },
  { href: '/applications#custom', label: 'Custom Development' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" fill="#0066FF" />
                  <circle cx="12" cy="12" r="7" stroke="#0066FF" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <circle cx="12" cy="12" r="11" stroke="#0066FF" strokeWidth="1" fill="none" opacity="0.3" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight">AGCP</span>
                <span className="block text-[10px] font-medium tracking-wider uppercase text-white/60">
                  Farmaceuticos
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Enabling pharmaceutical innovation through proprietary nanotechnology delivery platforms. EU GMP certified B2B technology licensing.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-8 items-center rounded-full bg-white/10 px-3">
                <span className="text-xs font-medium text-accent-light">EU GMP Certified</span>
              </div>
            </div>
          </div>

          {/* Technology Platforms */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Technology Platforms
            </h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Applications
            </h3>
            <ul className="space-y-3">
              {applicationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-white/60">
                <a href="mailto:lawrence@agcp.pt" className="hover:text-white transition-colors">
                  lawrence@agcp.pt
                </a>
              </p>
              <p className="text-sm text-white/60">
                <a href="tel:+12402929392" className="hover:text-white transition-colors">
                  (240) 292-9392
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} AGCP Farmaceuticos, LDA. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Caldas da Rainha, Portugal &middot; EU GMP Certified Pharmaceutical Manufacturing
          </p>
        </div>
      </div>
    </footer>
  );
}
