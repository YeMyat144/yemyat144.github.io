import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SITE } from '../data/site';
import { Seo } from '../components/seo/Seo';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Ye Myat Moe for internships, contracts, and freelance work."
        path="/contact"
      />
      <div className="min-h-screen bg-canvas text-ink">
        <div className="mx-auto max-w-xl px-6 py-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] text-ink/70 hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to desk
          </Link>
          <h1 className="mt-10 font-display text-5xl font-semibold leading-[0.92] tracking-[-0.035em] md:text-6xl">
            {SITE.contactQuestion}
          </h1>
          <div className="mt-12 bg-paper p-6 shadow-print ring-1 ring-ink/10">
            <p className="font-mono text-[11px] text-ink/70">Email</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 block font-display text-xl font-semibold tracking-tight"
            >
              {SITE.email}
            </a>
            <p className="mt-8 font-mono text-[11px] text-ink/70">Elsewhere</p>
            <ul className="mt-2 space-y-2 font-mono text-sm">
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
