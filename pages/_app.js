import "../styles/globals.scss";
import { GlobalContextProvider } from "../services";


export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <GlobalContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </GlobalContextProvider>
  );
}
