import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ width, height }) => {
  return (
    <Link href="/" className="logo">
      <a>
        <Image
          src="/logo.svg"
          width={width}
          height={height}
          className="drop-shadow-md"
        />
      </a>
    </Link>
  );
};

export default Logo;
