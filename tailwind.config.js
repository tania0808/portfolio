module.exports = {
  daisyui: {
    themes: false,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(233, 30, 99)',
        'grey-background': 'rgb(249, 249, 249)',
        'header': 'rgb(58, 49, 84)',
        'icon': 'rgb(234, 226, 249)'
      },
      backgroundImage: {
        'mobilePattern': "url(/src/images/bg-mobile.png)",
        'desktopPattern': "url(/src/images/bg-light.png)"
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '967px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '569px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  fontFamily: {
    'poppins': ['Poppins', 'sans-serif']
  },
  variants: {
    extend: {},
  },
  content: [
    // ...
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [require("daisyui"), require('tw-elements/dist/plugin'), require('flowbite/plugin')]
}
