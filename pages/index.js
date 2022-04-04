import Head from "next/head";
import InputBox from "../components/InputBox";
import Logo from "../components/Logo";
import { useGlobalContext } from "../services";
import { Layout, Loading } from '../components'

export default function Home() {
  const { isLoading } = useGlobalContext();

  return isLoading ? (
    <Layout>
      <Loading />
    </Layout>
  ) : (
    <div className="container mx-auto">
      <Head>
        <title>Noogle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center items-center flex-col">
        <Logo width={300} height={150} />
        <InputBox isHome={true} />
      </div>
    </div>
  );
}
