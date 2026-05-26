import { useState } from 'react';
import type { ReactNode } from 'react';

function Phone({
  children,
  className = '',
  ariaLabel = 'iPhone preview',
  hideIsland = false,
}: {
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
  hideIsland?: boolean;
}) {
  return (
    <div className={`iphone ${className}`} role="img" aria-label={ariaLabel}>
      <span className="vol-up" aria-hidden="true" />
      <span className="pwr" aria-hidden="true" />
      <div className="screen">
        {!hideIsland && <div className="island" aria-hidden="true" />}
        {children}
      </div>
    </div>
  );
}

function StatusBar({ time = '9:41' }: { time?: string }) {
  return (
    <div className="absolute top-0 left-0 right-0 h-[58px] flex items-center justify-between px-7 z-20 text-ink text-[12px] font-semibold">
      <span>{time}</span>
      <span className="flex items-center gap-1 opacity-80">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <path d="M1 8.5h1M3.5 6.5h1M6 4.5h1M8.5 2.5h1M11 .5h1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
          <rect x=".5" y=".5" width="18" height="10" rx="2.5" stroke="currentColor" opacity=".4" />
          <rect x="2" y="2" width="14" height="7" rx="1.2" fill="currentColor" />
          <rect x="19.5" y="3.5" width="1.5" height="4" rx=".5" fill="currentColor" opacity=".5" />
        </svg>
      </span>
    </div>
  );
}

export function HeroPhone({ className = '' }: { className?: string }) {
  const [videoOk, setVideoOk] = useState(true);
  return (
    <Phone className={className} ariaLabel="Nuelume app preview, autoplaying demo video">
      <div className="absolute inset-0 bg-black" aria-hidden="true" />
      {videoOk ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/demo.mp4"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoOk(false)}
          aria-hidden
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-taupe pointer-events-none">
          <span className="wordmark text-[11px] mb-3 text-white/40">nuelume</span>
          <span className="font-serif text-white/60 text-2xl px-8 text-center leading-snug">
            Your daily routine, automatically.
          </span>
        </div>
      )}
    </Phone>
  );
}

export function Screenshot1Phone({ className = '' }: { className?: string }) {
  return (
    <Phone className={className} ariaLabel="Step 1: share a reel to Nuelume" hideIsland>
      <div className="absolute inset-0 bg-black" aria-hidden="true" />
      <img
        src="/screenshot1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
        aria-hidden="true"
      />
    </Phone>
  );
}

export function Screenshot2Phone({ className = '' }: { className?: string }) {
  return (
    <Phone className={className} ariaLabel="Step 2: every product identified" hideIsland>
      <img
        src="/screenshot2.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
        aria-hidden="true"
      />
    </Phone>
  );
}

export function Screenshot3Phone({ className = '' }: { className?: string }) {
  return (
    <Phone className={className} ariaLabel="Step 3: your routine, saved" hideIsland>
      <img
        src="/screenshot3.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
        aria-hidden="true"
      />
    </Phone>
  );
}

export function SharePhone({ className = '' }: { className?: string }) {
  const apps: { name: string; tone: string; highlight?: boolean }[] = [
    { name: 'Messages', tone: 'bg-[#7D9E7E]' },
    { name: 'Nuelume',  tone: 'bg-berry', highlight: true },
    { name: 'Notes',    tone: 'bg-[#E6D7C7]' },
    { name: 'Mail',     tone: 'bg-[#5E574F]' },
  ];
  return (
    <Phone className={className} ariaLabel="Step 1: share a reel to Nuelume">
      <StatusBar />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a2e2a] via-[#2a221c] to-[#1a1410]" />
      <div className="absolute left-2 right-2 bottom-2 bg-card rounded-[28px] p-4 shadow-soft">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-secondary text-[12px]">Share reel</span>
          <span className="text-berry text-[12px] font-medium">Done</span>
        </div>
        <div className="bg-soft rounded-2xl p-3 flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E6D7C7] to-[#B4584F]" />
          <div className="flex-1 min-w-0">
            <div className="text-ink text-[11px] font-medium truncate">5-step glow routine</div>
            <div className="text-tertiary text-[10px] truncate">instagram.com/reel/Cx9…</div>
          </div>
        </div>
        <div className="text-tertiary text-[9px] tracking-[0.14em] uppercase mb-2 px-1">Send to</div>
        <div className="flex gap-3 overflow-hidden">
          {apps.map((a) => (
            <div key={a.name} className="flex-1 flex flex-col items-center gap-1.5">
              <div
                className={`w-12 h-12 rounded-2xl ${a.tone} ${a.highlight ? 'ring-2 ring-berry ring-offset-2 ring-offset-card' : ''} flex items-center justify-center text-white text-[10px] font-serif`}
              >
                {a.name === 'Nuelume' ? 'N' : ''}
              </div>
              <span className="text-ink text-[9px]">{a.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t hairline border-t-[1px]">
          <div className="flex items-center justify-between py-2 px-1">
            <span className="text-ink text-[11px]">Save to Nuelume</span>
            <span className="text-berry text-[14px]">›</span>
          </div>
          <div className="flex items-center justify-between py-2 px-1">
            <span className="text-secondary text-[11px]">Copy link</span>
            <span className="text-tertiary text-[14px]">›</span>
          </div>
        </div>
      </div>
    </Phone>
  );
}

export function ExtractPhone({ className = '' }: { className?: string }) {
  const items = [
    { step: 'Cleanse',    name: 'Gentle Hydrating Cleanser',  brand: 'Cetaphil',       price: '$14.99', shop: 'Chemist Warehouse', tone: 'bg-[#EAE3D7]' },
    { step: 'Treat',      name: 'Vitamin C 10% Serum',        brand: 'The Ordinary',   price: '$18.50', shop: 'Adore Beauty',      tone: 'bg-[#F1DCD8]' },
    { step: 'Moisturise', name: 'Protini Polypeptide Cream',  brand: 'Drunk Elephant', price: '$98.00', shop: 'MECCA',             tone: 'bg-[#E6D7C7]' },
    { step: 'Finish',     name: 'Glow Recipe Dew Drops',      brand: 'Glow Recipe',    price: '$54.00', shop: 'Sephora AU',        tone: 'bg-[#DDE7DD]' },
  ];
  return (
    <Phone className={className} ariaLabel="Step 2: every product identified">
      <StatusBar />
      <div className="absolute inset-0 pt-[58px] flex flex-col bg-bg">
        <div className="px-5 pb-3">
          <div className="text-tertiary text-[9px] tracking-[0.18em] uppercase">Extracted</div>
          <div className="font-serif text-ink text-[18px] leading-tight mt-1">4 products found</div>
          <div className="text-secondary text-[11px] mt-1">
            From <span className="text-ink">@laurenpaints</span> · 0:47 reel
          </div>
        </div>
        <div className="flex-1 overflow-hidden px-3 space-y-2">
          {items.map((it) => (
            <div key={it.name} className="bg-card rounded-2xl p-2.5 flex items-center gap-2.5 shadow-soft">
              <div className={`w-10 h-10 rounded-xl ${it.tone} flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="text-tertiary text-[8px] tracking-[0.16em] uppercase">{it.step}</div>
                <div className="text-ink text-[10px] font-medium truncate leading-tight">{it.name}</div>
                <div className="text-secondary text-[9px] truncate">{it.brand} · {it.shop}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-ink text-[10px] font-medium">{it.price}</div>
                <div className="text-berry text-[8px]">cheapest</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3">
          <div className="bg-berry text-white text-[11px] font-medium text-center py-2.5 rounded-full">
            Save as routine
          </div>
        </div>
      </div>
    </Phone>
  );
}

export function RoutinePhone({ className = '' }: { className?: string }) {
  const steps = [
    { name: 'Gentle cleanse',  note: 'Cetaphil',            done: true  },
    { name: 'Vitamin C serum', note: '4 drops, neck up',    done: true  },
    { name: 'Moisturise',      note: 'Pat, don’t rub', done: false },
    { name: 'SPF 50',          note: 'Two fingers',         done: false },
  ];
  return (
    <Phone className={className} ariaLabel="Step 3: your routine, saved">
      <StatusBar />
      <div className="absolute inset-0 pt-[58px] flex flex-col bg-bg">
        <div className="px-5 pb-3">
          <div className="text-tertiary text-[9px] tracking-[0.18em] uppercase">Today</div>
          <div className="font-serif text-ink text-[18px] leading-tight mt-1">Morning glow</div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-1 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-sage" style={{ width: '50%' }} />
            </div>
            <span className="text-tertiary text-[10px]">2/4</span>
          </div>
        </div>
        <div className="flex gap-1 px-3 mb-2">
          <div className="bg-ink text-bg text-[9px] font-medium px-3 py-1.5 rounded-full">AM</div>
          <div className="bg-card text-secondary text-[9px] px-3 py-1.5 rounded-full shadow-soft">PM</div>
          <div className="bg-card text-secondary text-[9px] px-3 py-1.5 rounded-full shadow-soft">Weekly</div>
        </div>
        <div className="flex-1 px-3 space-y-1.5">
          {steps.map((s) => (
            <div key={s.name} className="bg-card rounded-2xl p-2.5 flex items-center gap-2.5 shadow-soft">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? 'bg-sage text-white' : 'border border-muted'}`}>
                {s.done && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[10px] font-medium truncate leading-tight ${s.done ? 'text-tertiary line-through' : 'text-ink'}`}>
                  {s.name}
                </div>
                <div className="text-tertiary text-[9px] truncate">{s.note}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-3 pb-3 pt-2">
          <div className="bg-berry-soft text-berry-deep text-[10px] text-center py-2 rounded-full">
            🔥 3-day streak
          </div>
        </div>
      </div>
    </Phone>
  );
}

export function Screenshot4Phone({ className = '' }: { className?: string }) {
  return (
    <Phone className={className} ariaLabel="Product pricing detail" hideIsland>
      <img src="/screenshot4.png" alt="" className="absolute inset-0 w-full h-full object-cover object-top" aria-hidden="true" />
    </Phone>
  );
}

export function Screenshot5Phone({ className = '' }: { className?: string }) {
  return (
    <Phone className={className} ariaLabel="My Routines library" hideIsland>
      <img src="/screenshot5.png" alt="" className="absolute inset-0 w-full h-full object-cover object-top" aria-hidden="true" />
    </Phone>
  );
}

export function Screenshot6Phone({ className = '' }: { className?: string }) {
  return (
    <Phone className={className} ariaLabel="Routine detail" hideIsland>
      <img src="/screenshot6.png" alt="" className="absolute inset-0 w-full h-full object-cover object-top" aria-hidden="true" />
    </Phone>
  );
}

export function LibraryPhone({ className = '' }: { className?: string }) {
  const routines = [
    { name: 'Morning glow',       from: '@laurenpaints',   tone: 'bg-[#F1DCD8]' },
    { name: '5-step night reset', from: '@hyramyang',      tone: 'bg-[#E6D7C7]' },
    { name: 'Sunday slug',        from: '@beautyofjoseon', tone: 'bg-[#DDE7DD]' },
    { name: 'Travel minimum',     from: '@victoriaparis',  tone: 'bg-[#EAE3D7]' },
  ];
  return (
    <Phone className={className} ariaLabel="Your saved routines">
      <StatusBar />
      <div className="absolute inset-0 pt-[58px] flex flex-col bg-bg">
        <div className="px-5 pb-3">
          <div className="text-tertiary text-[9px] tracking-[0.18em] uppercase">Library</div>
          <div className="font-serif text-ink text-[18px] leading-tight mt-1">12 routines</div>
        </div>
        <div className="flex-1 px-3 space-y-2">
          {routines.map((r) => (
            <div key={r.name} className="bg-card rounded-2xl p-2.5 flex items-center gap-2.5 shadow-soft">
              <div className={`w-11 h-11 rounded-xl ${r.tone} flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="text-ink text-[10px] font-medium truncate leading-tight">{r.name}</div>
                <div className="text-tertiary text-[9px] truncate">{r.from}</div>
              </div>
              <span className="text-tertiary text-[12px]">›</span>
            </div>
          ))}
        </div>
        <div className="h-3" />
      </div>
    </Phone>
  );
}
