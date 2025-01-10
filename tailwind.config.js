/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2B1B12',
        'secondary': '#DDCAB9',
        'bgBlue':"#139FD4",
        'customchoco': "#FCF8F4",
        'footercolor':"#170E08",
        'blue':"#2563eb",
        'gray':"#6b7280"
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

