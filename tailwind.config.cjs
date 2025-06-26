/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'fluid-xs':  'clamp(1.2rem, calc(1.2rem + 0.3 * ((100vw - 20rem) / 110)), 1.5rem)',
        'fluid-sm':  'clamp(1.4rem, calc(1.4rem + 0.35 * ((100vw - 20rem) / 110)), 1.75rem)',
        'fluid-base':'clamp(1.6rem, calc(1.6rem + 0.4 * ((100vw - 20rem) / 110)), 2rem)', 
        'fluid-lg':  'clamp(2rem, calc(2rem + 0.5 * ((100vw - 20rem) / 110)), 2.5rem)',
        'fluid-xl':  'clamp(2.5rem, calc(2.5rem + 0.75 * ((100vw - 20rem) / 110)), 3.25rem)',
        'fluid-2xl': 'clamp(3rem, calc(3rem + 1 * ((100vw - 20rem) / 110)), 4rem)',
        'fluid-5xl': 'clamp(4.109890672858455rem, calc(4.109890672858455rem + ((11.145125560319995 - 4.109890672858455) * ((100vw - 20rem) / (130 - 20)))), 11.145125560319995rem)',
        'fluid-7xl': 'clamp(6.437402705112534rem, calc(6.437402705112534rem + ((17.412657937585667 - 6.437402705112534) * ((100vw - 20rem) / (130 - 20)))), 17.412657937585667rem)',
      },
      screens: {
        '4xl': '4000px',
      },
      fontFamily: {
        spaceMono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
