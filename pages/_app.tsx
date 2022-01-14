import "../styles/globals.css";

import type { AppProps } from "next/app";

import Header from "../app/components/Header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
