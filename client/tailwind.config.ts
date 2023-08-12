import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      rem: ["REM", "sans-serif"],
      beginner: ["Edu SA Beginner", "cursive"],
      kanit: ["Kanit", "sans-serif"],
      oswald: ["Oswald", "sans-serif"]
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
