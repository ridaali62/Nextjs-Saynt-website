import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: "1280px",
      // xl: "1280px",
    },
    extend: {
      screens:{
        'mblres': { 'max': '780px' },
        'md': {'min':"768px",'max':"1280px"}, // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        body: ["Outfit"],
      },
      boxShadow: {
        "custom-bottom": "0 50px 20px rgba(32, 81, 116, 0.3)", // Customize shadow color and opacity here
        "left-bottom":
          "0 20px 40px rgba(2, 81, 116, 0.4), 10px 0 20px rgba(2, 81, 116, 0.4), -10px 0 30px rgba(2, 81, 116, 0.4)",
        "four-sides":
          "0 1px 5px rgba(126, 235, 182, 0.4),0 -1px 5px rgba(126, 235, 182, 0.4), 1px 0 5px rgba(126, 235, 182, 0.4), -1px 0 5px rgba(126, 235, 182, 0.4)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
