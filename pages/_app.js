import "../styles/globals.scss";
import { GlobalContextProvider } from "../services";


export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <GlobalContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </GlobalContextProvider>
  );
}
