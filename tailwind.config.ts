import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          bg1: '#E0F7F7',
          bg2: '#009595',
          fg1: '#009595',
        },
        success: {
          bg1: '#E3F6E9',
          fg1: '#17B24A',
        },
        error: {
          bg1: '#FAE4E4',
          bg2: '#D61E20',
          fg1: '#D61E20',
        },
        neutral: {
          bg1: '#FFFFFF',
          bg2: '#F0F0F0',
          fg1: '#333333',
          st2: '#CCCCCC',
          st3: '#E6E6E6',
        },
      },
    },
  },
  plugins: [],
}
export default config
