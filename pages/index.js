import HomeScreen from '../src/components/screens/HomeScreen';
import webPageHOC from '../src/components/wrappers/WebPage/hoc';

export default webPageHOC(HomeScreen, {
  pageProps: {
    seoProps: {
      headTitle: 'Home',
    },
    boxProps: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  },
});
