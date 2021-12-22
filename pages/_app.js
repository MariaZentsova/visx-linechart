import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Head from "next/head";


const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <GlobalStyle />
    <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default MyApp