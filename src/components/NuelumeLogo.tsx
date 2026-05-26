import type { CSSProperties } from 'react';

interface NuelumeLogoProps {
  size?: number;
  style?: CSSProperties;
}

export default function NuelumeLogo({ size = 1, style = {} }: NuelumeLogoProps) {
  const base: CSSProperties = {
    fontFamily: "'Cormorant Infant', serif",
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: `${140 * size}px`,
    letterSpacing: `${0.04 * size}em`,
    lineHeight: 1,
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'baseline', ...style }}>
      <span style={{ ...base, color: '#8F4039' }}>NUE</span>
      <span style={{ ...base, color: '#B4584F' }}>LUME.</span>
    </div>
  );
}

export function NuelumeLogoNav()    { return <NuelumeLogo size={0.14} />; }
export function NuelumeLogoHero()   { return <NuelumeLogo size={1} />;    }
export function NuelumeLogoFooter() { return <NuelumeLogo size={0.32} />; }
