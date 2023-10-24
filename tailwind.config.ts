import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "theme-color": "var(--theme-color)",
        "logo-header-height": "var(--logo-header-height)",
        "logo-footer-height": "var(--logo-footer-height)",
        "paper-primary": "var(--paper-primary)",
        white: "var(--white)",
        black: "var(--black)",
        "success-color": "var(--success-color)",
        "error-color": "var(--error-color)",
        "body-background-color": "var(--body-background-color)",
        "card-background-color": "var(--card-background-color)",
        "color-main": "var(--text-color-main)",
        "color-dark": "var(--text-color-dark)",
        "tag-background-color": "var(--tag-background-color)",
        "background-color-alt": "var(--background-color-alt)",
        "text-color-alt": "var(--text-color-alt)",
        "border-color": "var(--border-color)",
        "code-background-color": "var(--code-background-color)",
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
      fontSize: {
        "heading-1": "var(--heading-1)",
        "heading-2": "var(--heading-2)",
        "heading-3": "var(--heading-3)",
        "heading-4": "var(--heading-4)",
        "heading-5": "var(--heading-5)",
        "heading-6": "var(--heading-6)",
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      container: {
        center: true,
        screens: {},
      },
      backgroundImage: {
        "gradient-color-primary": "var(--gradient-color-primary))",
        "gradient-color-secondary": "var(--gradient-color-secondary))",
        "gradient-angle": "var(--gradient-angle)",
        "gradient-primary": "var(--gradient-primary)",
      },
      maxWidth: {
        wide: "var(--wide)",
        content: "var(--content)",
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
  plugins: [require("tailwindcss-animate")],
};
export default config;
