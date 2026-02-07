import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center px-4">
        <p className="text-8xl font-bold text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold text-navy">Page Not Found</h1>
        <p className="mt-3 text-text-secondary max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Please check the URL or navigate to one of our main sections.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-dark"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
