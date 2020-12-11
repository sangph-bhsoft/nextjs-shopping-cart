module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      gotham: ['Gotham Pro', 'san-serif'],
    },
    colors: {
      white: '#FFFFFF',
      orange: {
        100: '#FEEDD3',
        200: '#FE7865',
        300: '#E6604D',
        400: '#F55C46',
      },
      blue: {
        100: '#F5F8FC',
        200: '#EFEDFE',
        300: '#5BD5E6',
        400: '#68aaeb',
      },
      green: {
        100: '#FFFBF8',
        200: '#E8FBF7',
        300: '#5Be6B0',
      },
      gray: {
        100: '#ECECEE',
        200: '#DFDAFE',
        300: '#83838B',
      },
      pink: {
        100: '#FEDAE8',
      },
      black: {
        100: '#2C2E3F',
        200: '#141517',
        300: '#2C2E3F',
        400: '#1D2539',
      },
      yellow: {
        100: '#F55C46',
      },
    },
    extend: {
      fontSize: {
        '8xl': '6rem',
      },
      spacing: {
        144: '36rem',
        368: '92rem',
      },
      keyframes: {
        fade: {
          '0%': {
            right: '-100%',
            opacity: 0,
          },
          '100%': {
            right: '0',
            opacity: 1,
          },
        },
        fadeProduct: {
          '0%': {
            top: '2rem',
            opacity: 0,
          },
          '100%': {
            bottom: '0.75rem',
            opacity: 1,
          },
        },
        show: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        rightTo: {
          '0%': {
            right: '-100%',
          },
          '100%': {
            right: '0',
          },
        },
      },
      animation: {
        fade: 'fade 0.75s ease-in-out',
        show: 'show 0.9s',
        fadeProduct: 'fadeProduct 0.75s ease-in-out',
        rightTo: 'rightTo 0.75s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
