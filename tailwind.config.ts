import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg1: '#E0F7F7',
          'bg2-default': '#009595',
          'bg2-hover': '#007070',
          'bg2-press': '#004A4A',
          'bg2-disable': '#99E3E3',
          'fg1-default': '#009595',
        },
        success: {
          bg1: '#E3F6E9',
          fg1: '#17B24A',
        },
        error: {
          bg1: '#FAE4E4',
          'bg2-default': '#D61E20',
          'bg2-hover': '#AB181A',
          'bg2-press': '#801213',
          'bg2-disable': '#EFA5A6',
          fg1: '#D61E20',
        },
        neutral: {
          bg1: '#FFFFFF',
          bg2: '#F0F0F0',
          fg1: '#333333',
          fg3: '#FFFFFF',
          st2: '#CCCCCC',
          st3: '#E6E6E6',
        },
      },
    },
  },
  plugins: [],
}
export default config
