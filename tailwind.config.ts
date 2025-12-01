import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                rock: {
                    black: '#0a0a0a',
                    darkgray: '#1a1a1a',
                    gray: '#2a2a2a',
                    red: '#e63946',
                    white: '#f8f9fa',
                    cream: '#e8e5d9',
                }
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
                display: ['Impact', 'Arial Black', 'sans-serif'],
            },
            fontSize: {
                'hero': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '0.9', fontWeight: '900' }],
            },
            backgroundImage: {
                'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"3.5\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
            }
        },
    },
    plugins: [],
};
export default config;
