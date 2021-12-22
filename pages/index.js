import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import InputBox from "../components/InputBox";
import Logo from "../components/Logo";


export default function Home() {
  return (
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
