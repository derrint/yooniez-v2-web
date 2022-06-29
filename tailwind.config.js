module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // fontSize: {
    //   xs: '0.75rem',
    //   sm: '0.875rem',
    //   base: '1rem',
    //   lg: '1.125rem',
    //   xl: '1.25rem',
    //   '2xl': '1.5rem',
    //   '3xl': '1.875rem',
    //   '4xl': '2.25rem',
    //   '5xl': '3rem',
    //   '6xl': '4rem',
    // },
    fontFamily: {
      sans: ['Work Sans'],
      headline: ['Russo One'],
      script: ['Caveat'],
    },
    extend: {
      colors: {
        primary: '#500D8C',
        'primary-light': '#A100FF',
        'primary-dark': '#20003D',
        secondary: '#61FAE3',
        'secondary-dark': '#002520',
        tertiary: '#EEE560',
        'tertiary-dark': '#242200',
        black: '#111111',
        // gray: '#888888',
        gradient: {
          primary: {
            start: '#A100FF',
            end: '#6E07AA',
          },
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      boxShadow: {
        md: '0px 2px 10px #441463',
        lg: '0px 4px 0px #111111',
      },
    },
  },
  variants: {},
  plugins: [],
};
