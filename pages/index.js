import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center items-center flex-col">
        <Link href="/" className="logo">
          <a>
            <Image src="/logo.svg" width={300} height={150} />
          </a>
        </Link>
        <div className="inputWrapper flex items-center bg-white w-1/2 h-12 rounded-full shadow-sm hover:shadow-md border border-gray-300">
          <Link href="/">
            <a className="flex justify-center items-center w-12 h-12">
              <SearchIcon className="w-4 h-4 text-gray-400" />
            </a>
          </Link>
          <input
            className="w-10/12 h-11 text-lg"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
