import React from "react";
import { Logo, InputBox, NavBar } from '../components'

const Layout = ({ children }) => {
  return (
    <div className="container md:mx-auto px-4 min-h-full">
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
