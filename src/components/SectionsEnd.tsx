import { useState } from 'react';
import { Container, Eyebrow } from './utils';
import { NuelumeLogoFooter } from './NuelumeLogo';
import { supabase } from '../supabase';

export function Creators() {
  return (
    <section className="py-[72px] md:py-[120px] bg-tint" aria-labelledby="creators-title">
      <Container>
        <div className="reveal max-w-[640px]">
          <Eyebrow>For creators</Eyebrow>
          <h2
            id="creators-title"
            className="mt-5 font-serif text-ink text-[24px] sm:text-[36px] md:text-[48px] leading-[1.1] max-w-[600px] [text-wrap:balance]"
          >
            Your followers already want this. Earn from every tap.
          </h2>
          <p className="mt-6 text-secondary text-[15px] sm:text-[18px] leading-[1.6] max-w-[540px]">
            Coming soon — creators upload their routines directly to Nuelume with their own affiliate links. We do the rest.
          </p>
          <a
            href="mailto:hello@nuelume.com?subject=Early%20creator%20access"
            className="press group mt-8 inline-flex items-center justify-center border border-berry text-berry hover:bg-berry hover:text-white text-[14px] font-medium rounded-full px-7 py-[12px] min-h-[44px]"
          >
            Get early creator access
          </a>
        </div>
      </Container>
    </section>
  );
}

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setDuplicate(false);

    if (honeypot) { setSubmitted(true); return; }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert({ email: email.trim().toLowerCase(), source: 'landing_page' });
    setLoading(false);

    if (!dbError) { setSubmitted(true); return; }
    if (dbError.code === '23505') { setDuplicate(true); return; }
    setError('Something went wrong. Please try again.');
  };

  const pills = [
    'First in line at launch',
    'Regional pricing built in',
    'One email. Nothing else.',
  ];

  return (
    <section id="waitlist" className="relative py-[80px] md:py-[140px] bg-bg overflow-hidden" aria-labelledby="waitlist-title">
      {/* Animated berry halo background */}
      <div
        className="waitlist-halo absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(180,88,79,0.12) 0%, rgba(241,220,216,0.4) 30%, #FAF7F2 70%)',
        }}
      />

      <Container className="relative">
        <div className="text-center reveal">
          {/* Eyebrow */}
          <Eyebrow>Early access</Eyebrow>

          {/* Ornament */}
          <div className="flex items-center justify-center mt-4 mx-auto" style={{ width: '280px' }} aria-hidden="true">
            <div style={{ flex: 1, height: '0.5px', background: '#C8C0B5' }} />
            <div className="flex items-center gap-[6px] mx-3">
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#B4584F' }} />
              <div style={{ width: '5px', height: '5px', background: '#B4584F', transform: 'rotate(45deg)' }} />
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#B4584F' }} />
            </div>
            <div style={{ flex: 1, height: '0.5px', background: '#C8C0B5' }} />
          </div>

          {/* Headline */}
          <h2
            id="waitlist-title"
            className="font-serif text-ink text-[24px] sm:text-[36px] md:text-[48px] leading-[1.1] mx-auto max-w-[820px] [text-wrap:balance]"
            style={{ marginTop: '18px' }}
          >
            Be first in line when we launch.
          </h2>

          {/* Subhead */}
          <p className="mx-auto text-taupe text-[15px] sm:text-[18px] leading-[1.6] max-w-[440px] px-6 sm:px-0" style={{ marginTop: '16px' }}>
            The first beauty app of its kind. Be first to know when it lands.
          </p>

          {!submitted ? (
            <>
              {/* Email form */}
              <form
                onSubmit={onSubmit}
                className="reveal mx-auto max-w-[500px] relative"
                style={{ marginTop: '40px' }}
                aria-label="Join the waitlist"
                noValidate
              >
                <input
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <label htmlFor="waitlist-email" className="sr-only">Email address</label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (error) setError(''); if (duplicate) setDuplicate(false); }}
                  placeholder="you@beautiful.com"
                  disabled={loading}
                  className="berry-focus w-full bg-card rounded-full text-[15px] text-ink placeholder:text-tertiary py-[18px] pl-7 pr-[160px] transition-colors border border-transparent disabled:opacity-60"
                  style={{ borderRadius: '999px', boxShadow: '0 8px 24px -8px rgba(143,64,57,0.15)' }}
                  aria-invalid={!!error}
                  aria-describedby={error ? 'waitlist-error' : undefined}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="press absolute right-[6px] top-[6px] bottom-[6px] bg-berry hover:bg-berry-deep disabled:bg-muted text-white text-[14px] font-medium rounded-full px-6 whitespace-nowrap transition-colors"
                >
                  {loading ? '…' : 'Join waitlist →'}
                </button>
                {error && (
                  <p id="waitlist-error" className="mt-3 text-[13px] text-berry-deep text-left pl-7">{error}</p>
                )}
                {duplicate && (
                  <p className="mt-3 text-[13px] text-taupe text-left pl-7">You're already on the list.</p>
                )}
              </form>

              {/* Coming in 2026 */}
              <p className="text-[14px] text-taupe" style={{ marginTop: '24px' }}>Coming in 2026</p>

              {/* Benefit pills */}
              <div className="mx-auto flex flex-row flex-wrap justify-center gap-2" style={{ marginTop: '32px' }}>
                {pills.map((text) => (
                  <span
                    key={text}
                    style={{
                      background: 'rgba(241,220,216,0.5)',
                      border: '0.5px solid rgba(180,88,79,0.2)',
                      padding: '8px 16px',
                      borderRadius: '100px',
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      color: '#8F4039',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ color: '#B4584F' }}>✓ </span>{text}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <div
              className="reveal in mx-auto max-w-[500px] bg-card rounded-[20px] px-7 py-5 shadow-soft text-center"
              style={{ marginTop: '40px' }}
              role="status"
              aria-live="polite"
            >
              <p className="text-ink text-[15px]">
                ✓ <span className="font-medium">{email}</span> is on the list.
              </p>
              <p className="mt-1.5 text-taupe text-[13px]">
                One email when early access opens. Nothing else.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-[40px] md:py-[60px] bg-bg" style={{ borderTop: '1px solid rgba(22,19,15,0.06)' }}>
      <Container>
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">
          <a href="#top" className="press flex items-center gap-2.5" aria-label="Nuelume, back to top">
            <img src="/nl_item.png" alt="" aria-hidden="true" className="w-8 h-8 object-contain" />
            <NuelumeLogoFooter />
          </a>
          <nav aria-label="Social" className="flex items-center gap-6 text-taupe text-[14px]">
            <a
              href="https://instagram.com/nuelume"
              target="_blank"
              rel="noopener noreferrer"
              className="press hover:text-berry transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@nuelume"
              target="_blank"
              rel="noopener noreferrer"
              className="press hover:text-berry transition-colors"
            >
              TikTok
            </a>
            <a
              href="mailto:hello@nuelume.com"
              className="press hover:text-berry transition-colors"
            >
              Email
            </a>
          </nav>
        </div>
        <p className="mt-6 text-tertiary text-[12px] text-center sm:text-left">
          Nuelume Beauty Pty Ltd · Sydney, Australia · 2026
        </p>
      </Container>
    </footer>
  );
}
