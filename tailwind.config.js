const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/content/**/*.{tsx, ts, js, jsx}"],
  theme: {
    fontFamily: {
      'TTL': ["TTL"],
      'TTM': ["TTM"],
      'TTR': ["TTR"],
      'TTB': ["TTB"]
    },
    extend: {
      colors: {
        "greyText": "#333333",
        "greyLight": "#BDBDBD",
        "greyEase": "#F2F2F2",
        "whiteBg": "#F3F3F3",
        "blackBg": "#2C2C2C"
      },
      screens: {
        "mobile": "320px",
        "big-mobile": "425px",
        "tablet": "768px",
        "laptop": "1024px",
        "desktop": "1440px",
      },
      transitionProperty: {
        'top': "top",
        'width': "width",
        'left': "left"
      },
      backgroundImage: {
        "arrow-right": "url('/src/styles/img/arrow-right.svg')",
        "arrow-right-white": "url('/src/styles/img/arrow-right-white.svg')",
        "tel": "url('/src/styles/img/tel.svg')",
        "email": "url('/src/styles/img/email.svg')",
        "address": "url('/src/styles/img/address.svg')"
      },
      fontSize: {
        'title-intro': "clamp(2rem, 6.3vw, 4rem)",
      },
      height: {
        'img-project': "clamp(150px, 44vw, 315px)"
      }
    },
  },
  plugins: [],
}

