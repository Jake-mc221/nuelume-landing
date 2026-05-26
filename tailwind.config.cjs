/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:           '#FAF7F2',
        card:         '#FFFFFF',
        soft:         '#F2ECE3',
        tint:         '#EFE8DD',
        nude:         '#E6D7C7',
        ink:          '#16130F',
        secondary:    '#5E574F',
        tertiary:     '#9C948A',
        taupe:        '#8A7766',
        muted:        '#C8C0B5',
        berry:        '#B4584F',
        'berry-soft': '#F1DCD8',
        'berry-deep': '#8F4039',
        sage:         '#7D9E7E',
      },
      fontFamily: {
        serif: ['Georgia', 'ui-serif', 'Cambria', 'Times New Roman', 'serif'],
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft:   '0 1px 2px rgba(22,19,15,.04), 0 6px 18px -8px rgba(22,19,15,.08)',
        device: '0 2px 4px rgba(22,19,15,.06), 0 30px 60px -20px rgba(22,19,15,.25), 0 18px 36px -18px rgba(22,19,15,.18)',
      },
      borderRadius: {
        '4xl': '28px',
      },
      maxWidth: {
        container: '1060px',
      },
    },
  },
  plugins: [],
};
