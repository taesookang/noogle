import { SearchIcon } from "@heroicons/react/outline";
import { useGlobalContext, baseUrl } from "../services";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDebounce } from "use-debounce";

import { useState, useEffect, useCallback } from "react";

const InputBox = ({ isHome = false, slug = null }) => {
  const { setQuery, query, getResults, setResults } = useGlobalContext();
  // const [text, setText] = useState("")
  // const [value] = useDebounce(query, 800);

  useEffect(() => {
    const savedQuery = window.localStorage.getItem("query");
    isHome ? setQuery("") : savedQuery && setQuery(savedQuery);
  }, []);

  const router = useRouter();

  // const handleSearch = async () => {
  //   const res = await fetch(`${baseUrl}/search/q=${query}&num=20&&lr=lang_en&hl=en&cr=US`,{
  //     method: "GET",
  //     headers: {
  //       "x-user-agent": "desktop",
  //       "x-rapidapi-host": "google-search3.p.rapidapi.com",
  //       "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
  //     },
  //   });
  //   const data = await res.json()

  //   window.localStorage.setItem('query', query)

  //   setResults(data.results);
  //   router.push("/search")
  // }
  const handleSearch =  useCallback(() => {
    // const res = await getResults(slug, query);

    window.localStorage.setItem("query", query);

    isHome? router.push(`/search/${query}`) : router.reload()
  });

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
