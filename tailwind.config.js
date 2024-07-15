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
        "greyLight": "#BDBDBD"
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
      }
    },
  },
  plugins: [],
}

