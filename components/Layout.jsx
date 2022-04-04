import React from "react";
import Head from 'next/head'
import { Logo, InputBox, NavBar } from '../components'
import { useGlobalContext } from '../services'

const Layout = ({ children }) => {

  const { query } = useGlobalContext()
  return (
    <div className="container md:mx-auto px-4 min-h-full">
      <Head>
        <title>{query} - Noogle Search</title>
        <meta property="og:title" content={`${query} - Noogle Search`} key="title" />
      </Head>
      <div className="flex flex-col sm:flex-row space-x-5 mt-8">
        <Logo width={100} height={50} />
        <InputBox />
      </div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
