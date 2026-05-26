import { useState, useEffect } from 'react';
import { Container, Eyebrow } from './utils';
import { HeroPhone } from './iphone';
import Grainient from './Grainient';
import { NuelumeLogoNav } from './NuelumeLogo';

export function Nav() {
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${pastHero ? 'nav-scrolled' : 'nav-base'}`}
      style={{ borderBottom: pastHero ? '1px solid rgba(22,19,15,0.06)' : '1px solid transparent' }}
    >
      <Container className="flex items-center h-[52px] sm:h-[64px]">
        <a href="#top" className="press flex items-center" aria-label="Nuelume, home">
          <NuelumeLogoNav />
        </a>
      </Container>
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate pt-[130px] pb-[80px] md:pt-[160px] md:pb-[130px] overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Bottom fade — dissolves Grainient into the next section's cream bg */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #FAF7F2)' }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Grainient
          color1="#AE8181"
          color2="#F2E2DD"
          color3="#D1B2B0"
          timeSpeed={0.65}
          colorBalance={-0.11}
          warpStrength={2.3}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={7}
          blendAngle={0}
          blendSoftness={1}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.06}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={2.5}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.95}
        />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* Text column */}
          <div className="reveal text-center lg:text-left">
            <h1
              id="hero-title"
              className="text-ink leading-[1.08] text-[38px] sm:text-[52px] md:text-[62px] lg:text-[70px] [text-wrap:balance]"
              style={{ fontFamily: "'Cormorant Infant', serif", fontWeight: 700, fontStyle: 'italic' }}
            >
              Turn any beauty{' '}
              <span style={{ color: '#B4584F' }}>reel</span>
              {' '}into a routine you can{' '}
              <span style={{ color: '#B4584F' }}>actually</span>
              {' '}follow.
            </h1>
            <p className="mt-6 text-taupe text-[13px] md:text-[17px] leading-[1.6] max-w-[520px] mx-auto lg:mx-0 px-6 sm:px-0">
              Nuelume watches any beauty reel, finds every product and step, and saves it with the cheapest price near you.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a
                href="#waitlist"
                className="press inline-flex items-center justify-center bg-berry hover:bg-berry-deep text-white text-[15px] font-medium rounded-full px-8 py-[14px] min-h-[48px] w-full sm:w-auto"
              >
                Join the waitlist
              </a>
              <a
                href="#features"
                className="press inline-flex items-center justify-center text-taupe hover:text-ink text-[15px] py-[14px] min-h-[48px]"
              >
                <span className="border-b border-transparent hover:border-current pb-0.5">See features ↓</span>
              </a>
            </div>
          </div>

          {/* Phone column */}
          <div className="flex justify-center lg:justify-end reveal">
            <HeroPhone className="float w-[300px] sm:w-[320px] md:w-[340px] lg:w-[360px]" />
          </div>

        </div>
      </Container>
    </section>
  );
}

export function Problem() {
  const cols = [
    'The routine looks effortless. Recreating it is anything but.',
    'No product names. No technique breakdown. No idea where to buy it in your country.',
    'You save the reel. You never follow through. Sound familiar?',
  ];
  return (
    <section className="py-[72px] md:py-[120px] bg-bg" aria-labelledby="problem-title">
      <Container>
        <div className="text-center reveal">
          <Eyebrow className="text-center">The problem</Eyebrow>
          <h2
            id="problem-title"
            className="mt-5 font-serif text-ink text-[24px] sm:text-[36px] md:text-[48px] leading-[1.1] mx-auto max-w-[800px] [text-wrap:balance]"
          >
            The routine looks effortless. Recreating it is anything but.
          </h2>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 reveal">
          {cols.map((line, i) => (
            <div key={i} className="mx-auto text-center md:text-left">
              <div className="font-serif text-berry text-[28px] leading-none mb-3 select-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="text-taupe text-[15px] sm:text-[18px] leading-[1.6] max-w-[320px] mx-auto md:mx-0">
                {line}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
