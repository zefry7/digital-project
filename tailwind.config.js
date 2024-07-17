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
        "whiteBg": "#F3F3F3"
      },
      screens: {
        "mobile": "320px",
        "tablet": "768px",
        "laptop": "1024px",
        "desktop": "1440px",
      },
      transitionProperty: {
        'top': "top",
        'width': "width"
      },
      backgroundImage: {
        "arrow-right": "url('/src/styles/img/arrow-right.svg')",
        "arrow-right-white": "url('/src/styles/img/arrow-right-white.svg')"
      },
      fontSize: {
        'title-intro': "clamp(1.75rem, 6.3vw, 4rem)"
      }
    },
  },
  plugins: [],
}

