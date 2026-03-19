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

      {/* ── HERO: MAP PLACEHOLDER ────────────────────────────────── */}
      <section className="hero-section relative flex items-center justify-center min-h-[300px]">
        <div className="absolute inset-0 bg-[#1a3a5c]" />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* ── CONTACT HEADER ───────────────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              CONTACT US
            </h1>
            <img
              src="/portugal-flag.png"
              alt="Portugal"
              className="w-16 h-16 mx-auto my-4 object-contain"
            />

            <div className="mt-6 space-y-2 text-lg text-text-secondary">
              <p>Estrada Nacional 360, n&ordm; 94, Santa Catarina</p>
              <p>2500-773, Caldas da Rainha, Portugal</p>
              <p className="pt-2">
                Phone:{' '}
                <a href="tel:+351926367242" className="text-accent hover:text-accent-dark transition-colors font-medium">
                  +351-926-367-242
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:alex@agcp.pt" className="text-accent hover:text-accent-dark transition-colors font-medium">
                  alex@agcp.pt
                </a>
              </p>
              <p className="text-sm text-text-light pt-1">GPS: 39.448207, -9.009992</p>
            </div>

            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5!2d-9.009992!3d39.448207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI2JzUzLjUiTiA5wrAwMCczNS45Ilc!5e0!3m2!1sen!2spt!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg mt-8"
              title="AGCP Farmacêuticos location"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 section-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {submitted ? (
              <div className="card p-12 text-center">
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
              <form onSubmit={handleSubmit} name="contact" data-netlify="true" data-netlify-honeypot="bot-field" className="card p-8 space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>
                <h2 className="text-2xl font-bold text-navy mb-2">Send Us a Message</h2>
                <p className="text-text-secondary mb-4">
                  Please provide your details and the nature of your inquiry. All fields marked with * are required.
                </p>
                {error && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">Full Name *</label>
                    <input
                      type="text" id="name" name="name" required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">Company *</label>
                    <input
                      type="text" id="company" name="company" required
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-navy mb-1.5">Role *</label>
                    <input
                      type="text" id="role" name="role" required
                      value={formState.role}
                      onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                      placeholder="Your role/title"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">Email *</label>
                    <input
                      type="email" id="email" name="email" required
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
                      type="tel" id="phone" name="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                      placeholder="+351 000 000 000"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-navy mb-1.5">Inquiry Type *</label>
                    <select
                      id="inquiryType" name="inquiryType" required
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership & Licensing">Partnership &amp; Licensing</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Press & Media">Press &amp; Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">Message *</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-navy placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors resize-vertical"
                    placeholder="Please describe your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base font-semibold"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
