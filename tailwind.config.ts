import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'font-color-primary': '#414141',
        'font-color-light-grey': '#5c5c5c',
        'brand-primary': '#fd4f35',
        'brand-primary-500': '#d8371f',
        'brand-primary-400': '#fd4f35',
        'brand-primary-300': '#fc735c',
        'brand-primary-200': '#ff9487',
        'brand-primary-100': '#ffbaad',
        'brand-primary-50': '#fcccc2',
        'brand-secondary': '#fd4f35',
        'brand-secondary-500': '#0a3642',
        'brand-secondary-400': '#004559',
        'brand-secondary-300': '#336b78',
        'brand-secondary-200': '#668f9c',
        'brand-secondary-100': '#99b5bd',
        'brand-secondary-50': '#ccd9de',
        'brand-tertiary': '#ede5d9',
        'brand-tertiary-500': '#75736e',
        'brand-tertiary-400': '#b0ada3',
        'brand-tertiary-300': '#c7bfb5',
        'brand-tertiary-200': '#d9d6cf',
        'brand-tertiary-100': '#ede5d9',
        'brand-tertiary-50': '#f5f0e8',
        'background-color-body': '#fff',
        'gray-300': '#a6a6a6',
        'gray-200': '#d3d3d3',
        'gray-100': '#e9e9e9',
        'gray-50': '#fbfbfb',
        'shade-light': '#fff',
        'shade-dark': '#3a3a3a',
        'color-danger': '#c84040',
        'color-success': '#77c697',
        'color-warn': '#fac12f',
      }
    },
  },
  plugins: [],
}
export default config
