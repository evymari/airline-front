

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "sm": "640px",
      },
      
    },
    extend: {
      
        colors: {
          primaryPurple: 'hsl(291, 96, 62, 7)',    // Azul oscuro: #025A6E
          secondaryWhite: 'hsl(0, 0%, 100%)',  // Blanco: #FFFFFF
          accentBlack: 'hsl(0, 0%, 0%)',       // Negro: #000000
          backgroundGray: 'hsl(240, 18%, 95%)',// Gris de fondo: #F4EFF4
          neutralGray: 'hsl(210, 22%, 89%)',   // Botón search: #DFE6E9
          // Colors ShadCN
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
        },
        // Travel Buddy
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
        fontSize: {
          'text-xs': ['12px', '1.5'],
          'text-sm': ['14px', '1.5'],
          'text-base': ['16px', '1.5'],
          'text-3xl': ['30px', '1.5'],
          'text-5xl': ['48px', '1.5'],
        },
        // ShadCN
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [],
  };
  // [tailwindcssAnimate]