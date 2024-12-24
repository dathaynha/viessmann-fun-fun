/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "pages/**/*.{ts,tsx}"],
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          gold: {
            400: '#FFD700',
          }
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0) rotate(0)' },
            '50%': { transform: 'translateY(-10px) rotate(5deg)' },
          },
          'float-random': {
            '0%, 100%': { transform: 'translateY(0) rotate(0) scale(1)' },
            '50%': { transform: 'translateY(-20px) rotate(10deg) scale(1.1)' },
          },
          twinkle: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.3 },
          },
          gradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '100%': { backgroundPosition: '100% 50%' },
          },
          tilt: {
            '0%, 50%, 100%': {
              transform: 'rotate(0deg)',
            },
            '25%': {
              transform: 'rotate(1deg)',
            },
            '75%': {
              transform: 'rotate(-1deg)',
            },
          },
          'gradient-y': {
            '0%, 100%': {
              'background-size': '400% 400%',
              'background-position': 'center top'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'center center'
            }
          },
          'gradient-x': {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            }
          },
        },
        animation: {
          'float': 'float 3s ease-in-out infinite',
          'float-random': 'float-random 4s ease-in-out infinite',
          'twinkle': 'twinkle 1.5s ease-in-out infinite',
          'gradient': 'gradient 3s ease infinite alternate',
          'spin-slow': 'spin 3s linear infinite',
          tilt: 'tilt 10s infinite linear',
          'gradient-x': 'gradient-x 15s ease infinite',
          'gradient-y': 'gradient-y 15s ease infinite',
          'gradient-xy': 'gradient-xy 15s ease infinite',
          'christmas-gradient': 'gradient-x 3s ease infinite',
          'newyear-gradient': 'gradient-y 3s ease infinite',
        },
        backgroundImage: {
          'christmas-theme': 'linear-gradient(to right, var(--green-400), var(--red-400))',
          'newyear-theme': 'linear-gradient(to right, var(--purple-400), var(--gold-400))',
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  