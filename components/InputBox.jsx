import { SearchIcon } from "@heroicons/react/outline";
import { useGlobalContext, baseUrl } from "../services";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDebounce } from "use-debounce";


import { useState, useEffect, useCallback } from "react";

const InputBox = ({ isHome = false }) => {
  const { query, setQuery } = useGlobalContext()

  useEffect(() => {
    const cachedQuery = window.localStorage.getItem("query");
    isHome ? setQuery("") : cachedQuery && setQuery(cachedQuery);
  }, []);

  const router = useRouter();

  const { slug } = router.query

  const handleSearch = () => {
    isHome
      ? window.localStorage.setItem("query", query) & router.push({ pathname: "/search", query: { q: query } })
      : router.push({ pathname: `/${slug}`, query: { q: query } })
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="inputWrapper flex items-center bg-white w-5/6 sm:w-1/2 h-12 rounded-full shadow-sm hover:shadow-md border border-gray-300">
      <div
        className="flex justify-center items-center w-12 h-12"
        onClick={handleSearch}
      >
        <SearchIcon className="w-4 h-4 text-gray-400" />
      </div>
      <input
        className="w-3/4 h-11 text-lg bg-transparent"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyPress={handleEnterKey}
      />
    </div>
  );
};

export default InputBox;
