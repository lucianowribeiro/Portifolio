import typographyVariants from './typographyVariants';

const colors = {
  background: {
    main: {
      color: '#fff',
    },
  },
  borders: {
    main: {
      color: 'rgb(94, 144, 163,.7)',
    },
  },
  primary: {
    text:{
      color: '#000',       
    },
    main: {
      color: '#35474e',
      contrast: '#009688',
    },
  },
};
const breakpoints = {
  xs: 0,
  md: 480,
  /* md: 768, */
};
export default {
  colors,
  typographyVariants,
  breakpoints,
  fontFamily: '\'Truculenta\', sans-serif',
  borderRadius: '50%',
  transition: '500ms ease-in-out',
};
