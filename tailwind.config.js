/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(107.9deg, #0C5FD1 1.25 %, #8703C5 93.71 %)',
        'hero-img': "url('./assets/img/webp/hero_sec_bg.webp')",
        'your-ex': "url('./assets/img/webp/your_ex.webp')",
        'binding-img': " url('./assets/img/webp/non_bindind.webp')",
        'gradientBg': 'linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)',
        'footer-img': 'url("./assets/img/png/footer_img.png")',
        'target-img': 'url(  "./assets/img/webp/target_bg_img.webp")',
        'your-fault': 'url("./assets/img/webp/your_fault.webp")',
        'slick-slider': 'url("./assets/img/png/slider-bg-img.png")',
      },
      fontFamily: {
        'inter': ["Inter", 'sans-serif'],
        'poopins': ["Poppins", 'sans-serif'],
        'HelveticaNeue': ["HelveticaNeue", 'sans-serif'],
      },
      colors: {
        'white': '#FFFFFF',
        'orange-200': '#F77B0B',
        'black': '#000000',
        'blue-50': 'rgba(0, 62, 146, 0.2)',
        'blue-100': 'rgba(0, 62, 146, 0.7)',
        'blue-200': '#003E92',
        'purpal': '#9800B0',
        'gradient-blue-100': '#0C5FD1',
        'gradient-blue-200': '#8703C5',
        'blue-30': '#F2F8FF',
        'white-100': 'rgba(255, 255, 255, 0.15)',
        'skyblue': '#F5FAFF'
      },
      fontSize: {
        "xs": ["14px", "20px"],
        "sm": ["16px", "25px"],
        "md": ["18px", "24px"],
        "lg": ["20px", "28px"],
        'xxlg': ["30px", "37px"],
        "xlg": ["36px", "47px"],
        "xl": ["52px", "62px"],
        "xxl": ["60px", "77px"],

      },
      screens: {
        "sm": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1200px",
        "xxl": "1400px",
        "4xl": "1900px",
      },
      boxShadow: {
        "sliderBoxShadow": "0px 2px 48px 0px #00000014",
      }
    },
  },
  plugins: [],
}
