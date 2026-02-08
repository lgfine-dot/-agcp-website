'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const form = e.target as HTMLFormElement;
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
      body.append('form-name', 'contact');
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agcp.pt' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://agcp.pt/contact' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Partnership &amp; Investment Inquiries
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              We welcome inquiries from pharmaceutical companies, strategic investors, and organizations interested in our nanotechnology licensing platforms.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-2">
              {submitted ? (
                <div className="rounded-2xl bg-surface border border-border p-12 text-center">
                  <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-accent/10 mb-6">
                    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-navy">Thank You for Your Inquiry</h2>
                  <p className="mt-3 text-text-secondary max-w-md mx-auto">
                    We have received your message and will respond within 2 business days. For urgent inquiries, please contact us directly via email.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', company: '', role: '', email: '', phone: '', inquiryType: 'General Inquiry', message: '' });
                    }}
                    className="mt-6 text-accent font-semibold hover:text-accent-dark transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} name="contact" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>
                  <h2 className="text-2xl font-bold text-navy mb-2">Send Us a Message</h2>
                  <p className="text-text-secondary mb-8">
                    Please provide your details and the nature of your inquiry. All fields marked with * are required.
                  </p>
                  {error && (
                    <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-navy mb-1.5">
                        Role *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        required
                        value={formState.role}
                        onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                        placeholder="Your role/title"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                        Phone <span className="text-text-light">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                        placeholder="+1 (000) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-navy mb-1.5">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formState.inquiryType}
                        onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Partnership Interest">Partnership Interest</option>
                        <option value="Investment Inquiry">Investment Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors resize-vertical"
                      placeholder="Please describe your inquiry, including any specific technology platforms or partnership interests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-navy mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-navy">Email</p>
                        <a href="mailto:lawrence@agcp.pt" className="text-sm text-accent hover:text-accent-dark transition-colors">
                          lawrence@agcp.pt
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-navy">Phone</p>
                        <a href="tel:+12402929392" className="text-sm text-accent hover:text-accent-dark transition-colors">
                          (240) 292-9392
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-navy">Address</p>
                        <p className="text-sm text-text-secondary">
                          Estrada Nacional 360, N 94<br />
                          Santa Catarina<br />
                          2500-773 Caldas da Rainha<br />
                          Portugal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface border border-border p-6">
                  <h3 className="font-bold text-navy mb-3">Response Time</h3>
                  <p className="text-sm text-text-secondary">
                    We aim to respond to all inquiries within 2 business days. Partnership and investment inquiries are prioritized and may receive faster responses.
                  </p>
                </div>

                <div className="rounded-2xl bg-surface border border-border p-6">
                  <h3 className="font-bold text-navy mb-3">For Immediate Assistance</h3>
                  <p className="text-sm text-text-secondary">
                    For time-sensitive partnership or investment discussions, please email us directly at{' '}
                    <a href="mailto:lawrence@agcp.pt" className="text-accent hover:text-accent-dark transition-colors font-medium">
                      lawrence@agcp.pt
                    </a>{' '}
                    with &ldquo;Urgent&rdquo; in the subject line.
                  </p>
                </div>

                <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                  <h3 className="font-bold text-navy mb-2">Interested in Our Technology?</h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Review our technology platforms and partnership model before reaching out.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/technology-platforms"
                      className="block text-sm text-accent font-medium hover:text-accent-dark transition-colors"
                    >
                      View Technology Platforms &rarr;
                    </Link>
                    <Link
                      href="/partnership"
                      className="block text-sm text-accent font-medium hover:text-accent-dark transition-colors"
                    >
                      Partnership Model &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
