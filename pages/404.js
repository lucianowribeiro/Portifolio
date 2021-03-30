import Screen404 from '../src/components/screens/Screen404/Screen404';
import webPageHOC from '../src/components/wrappers/WebPage/hoc';

export default webPageHOC(Screen404, {
  pageProps: {
    seoProps: {
      headTitle: '404',
    },
    containerProps: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    boxProps: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  },
});
