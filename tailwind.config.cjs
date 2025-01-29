/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        rosewater: 'hsl(var(--border))',
        flamingo: 'hsl(var(--border))',
        c_pink: 'hsl(var(--border))',
        c_mauve: 'hsl(var(--border))',
        c_red: 'hsl(var(--border))',
        c_maroon: 'hsl(var(--border))',
        c_peach: 'hsl(var(--border))',
        c_yellow: 'hsl(var(--yellow))',
        c_green: 'hsl(var(--green))',
        c_teal: 'hsl(var(--teal))',
        c_sky: 'hsl(var(--sky))',
        c_sapphire: 'hsl(var(--sapphire))',
        c_blue: 'hsl(var(--blue))',
        c_lavender: 'hsl(var(--lavender))',
        subtext1: 'hsl(var(--border))',
        subtext0: 'hsl(var(--border))',
        overlay2: 'hsl(var(--border))',
        overlay1: 'hsl(var(--border))',
        overlay0: 'hsl(var(--border))',
        surface2: 'hsl(var(--border))',
        surface1: 'hsl(var(--border))',
        surface0: 'hsl(var(--border))',
        base: 'hsl(var(--border))',
        mantle: 'hsl(var(--border))',
        crust: 'hsl(var(--border))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
