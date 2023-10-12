import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-color": "var(--accent-color)",
        "logo-header-height": "var(--logo-header-height)",
        "logo-footer-height": "var(--logo-footer-height)",
        "white": "var(--white)",
        "black": "var(--black)",
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
      },
      boxShadow: {
        "shadow": "var(--shadow)",
      },
      borderRadius: {
        "xs": "var(--radius-xs)",
        "sm": "var(--radius-sm)",
        "md": "var(--radius-md)",
        "lg": "var(--radius-lg)",
        "xl": "var(--radius-xl)",
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
    },
  },
  plugins: [],
};
export default config;
