import typographyVariants from './typographyVariants';

const dark = {
  background: {
    main: {
      color: '#1e3238',
    },
  },
  borders: {
    main: {
      color: 'rgba(0, 150, 136,.7)',
    },
  },
  primary: {
    text: {
      color: '#fff',
    },
    main: {
      color: '#00bdab',
      contrast: '#a6f8d3',
    },
  },
  secondary: {
    main: {
      color: 'rgba(0,189,171,0.2)',
    },
    button: {
      color: 'rgba(255,255,255,0.1)',
    },
  },
};
const light = {
  background: {
    main: {
      color: '#fff',
    },
  },
  borders: {
    main: {
      color: 'rgba(94, 144, 163,.7)',
    },
  },
  primary: {
    text: {
      color: '#000',
    },
    main: {
      color: '#009688',
      contrast: '#35474e',
    },
  },
  secondary: {
    main: {
      color: 'rgba(0,150,136,0.4)',
    },
    button: {
      color: 'rgba(0,0,0,0.1)',
    },
  },
};
const breakpoints = {
  xs: 0,
  md: 652,
  /* md: 768, */
};
const borderRadius = {
  logo: '50%',
  card: '5%',
};
export default {
  light,
  dark,
  typographyVariants,
  breakpoints,
  fontFamily: "'Truculenta', sans-serif",
  borderRadius,
  transition: '350ms ease-in-out',
};
