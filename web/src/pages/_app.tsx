import { GlobalStyle } from "../styles/globalStyles";
import type { AppProps } from "next/app";
import { ChannelContextProvider } from "../context/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChannelContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChannelContextProvider>
  );
}

export default MyApp;
