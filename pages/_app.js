import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Luciano Weber Ribeiro - Portfolio</title>
        <link rel="icon" href="./favicon.svg"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Truculenta:wght@100;300;400;500;700&display=swap" rel="stylesheet" /> 
      </Head>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
