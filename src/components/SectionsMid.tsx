import { Container, Eyebrow } from './utils';
import { Screenshot1Phone, Screenshot2Phone, Screenshot3Phone, Screenshot4Phone, Screenshot5Phone, Screenshot6Phone } from './iphone';

export function HowItWorks() {
  const rows = [
    {
      n: '01',
      title: 'Share any reel',
      body: 'Open any beauty reel on Instagram or TikTok and more and share it straight to Nuelume. That\'s it.',
      Phone: Screenshot1Phone,
      imageRight: true,
    },
    {
      n: '02',
      title: 'We find every product and step',
      body: 'Nuelume watches the video, identifies every product used, and breaks down exactly how each step was applied, in order.',
      Phone: Screenshot2Phone,
      imageRight: false,
    },
    {
      n: '03',
      title: 'Saved, priced, followable',
      body: 'Your routine is saved with step-by-step instructions and the best retailer price for every product, ready to follow every day.',
      Phone: Screenshot3Phone,
      imageRight: true,
    },
  ];

  return (
    <section id="how" className="py-[80px] md:py-[140px] bg-soft" aria-labelledby="how-title">
      <Container>
        <div className="text-center reveal">
          <Eyebrow>How it works</Eyebrow>
          <h2
            id="how-title"
            className="mt-5 font-serif text-ink text-[24px] sm:text-[36px] md:text-[48px] leading-[1.1] mx-auto max-w-[900px] [text-wrap:balance]"
          >
            One tap. One routine. Follow it forever.
          </h2>
        </div>

        <div className="mt-12 md:mt-24 space-y-[64px] md:space-y-[80px]">
          {rows.map(({ n, title, body, Phone, imageRight }) => (
            <div
              key={n}
              className="reveal grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16"
            >
              <div className={imageRight ? 'md:order-1' : 'md:order-2'}>
                <div className="font-serif text-berry text-[40px] md:text-[60px] leading-none">{n}</div>
                <h3 className="mt-3 font-serif text-ink text-[22px] sm:text-[26px] md:text-[32px] leading-tight">
                  {title}
                </h3>
                <p className="mt-4 text-secondary text-[15px] sm:text-[17px] leading-[1.6] max-w-[460px]">
                  {body}
                </p>
              </div>
              <div className={`flex justify-center ${imageRight ? 'md:order-2' : 'md:order-1'}`}>
                <Phone className="w-[270px] sm:w-[270px] md:w-[300px]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FeatureGrid() {
  const cards = [
    {
      label: 'Extraction',
      title: 'Every product, every step',
      body: 'Nuelume watches the video and caption together to find every product used and every step applied, never just guessing.',
    },
    {
      label: 'Pricing',
      title: 'Best price near you',
      body: 'Searched and saved across the top beauty retailers in your region, so you never overpay.',
    },
    {
      label: 'Routines',
      title: 'Your routine, saved forever',
      body: 'Every routine is stored with full step-by-step instructions, ready to revisit any time.',
    },
    {
      label: 'Discovery',
      title: 'Already extracted, instantly yours',
      body: 'Once anyone saves a routine, every future user gets the full routine in seconds. No wait.',
    },
  ];

  return (
    <section id="features" className="py-[72px] md:py-[120px] bg-bg" aria-labelledby="why-title">
      <Container>
        <div className="text-center reveal">
          <Eyebrow>Why Nuelume</Eyebrow>
          <h2
            id="why-title"
            className="mt-5 font-serif text-ink text-[24px] sm:text-[36px] md:text-[48px] leading-[1.1] mx-auto max-w-[820px] [text-wrap:balance]"
          >
            Built for how you actually consume beauty content.
          </h2>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          {cards.map((c) => (
            <article key={c.label} className="bg-card rounded-[20px] shadow-soft p-7 md:p-8">
              <div className="w-8 h-[3px] bg-berry rounded-full mb-5" />
              <div className="eyebrow">{c.label}</div>
              <h3 className="mt-3 font-serif text-ink text-[18px] sm:text-[20px] md:text-[24px] leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 text-secondary text-[15px] leading-[1.6]">{c.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function DeepDive() {
  return (
    <section className="py-[72px] md:py-[140px] bg-soft overflow-hidden" aria-labelledby="deepdive-title">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Fanned phones */}
          <div className="reveal relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative h-[540px] sm:h-[480px] md:h-[580px] w-full max-w-[520px]">
              <div
                className="absolute left-[6%] top-[6%] origin-bottom-right"
                style={{ transform: 'rotate(-8deg)' }}
              >
                <Screenshot5Phone className="w-[220px] sm:w-[220px] md:w-[255px]" />
              </div>
              <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10">
                <Screenshot6Phone className="w-[235px] sm:w-[230px] md:w-[265px]" />
              </div>
              <div
                className="absolute right-[6%] top-[6%] origin-bottom-left"
                style={{ transform: 'rotate(8deg)' }}
              >
                <Screenshot4Phone className="w-[220px] sm:w-[220px] md:w-[255px]" />
              </div>
            </div>
          </div>

          {/* Pull quote */}
          <div className="reveal order-1 lg:order-2">
            <blockquote
              id="deepdive-title"
              className="font-serif text-ink text-[20px] sm:text-[28px] md:text-[32px] leading-[1.3] max-w-[480px] [text-wrap:pretty]"
            >
              <span className="text-berry font-serif text-[44px] leading-none align-[-8px] mr-1">"</span>
              Watch it once. Follow it forever.
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
