import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily : {
            'figtree': [ 'Figtree', 'sans-serif' ],
        },
        extend: {
            colors: {
                'dx-blue-light': '#63ABCC',
                'dx-blue-dark': '#32529D',
                'dx-blue-darkest': '#2F287B'
            },
        },
    },
    plugins: [],
};
export default config;
