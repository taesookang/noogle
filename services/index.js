import React, { useState, createContext, useContext } from "react";

const GlobalContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
const headers = {
  "x-user-agent": "desktop",
  "x-rapidapi-host": "google-search3.p.rapidapi.com",
  "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
};

export function GlobalContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState("Search");

  /*
  / => home
  /search/[slug] => search
  /search/images/[slug] => images
  /search/news/[slug] => news
  */

  const getSearchResults = async (category, searchTerm) => {
    setIsLoading(true);
    const res = await fetch(
      `${baseUrl}/${category}/q=${searchTerm}&num=20&&lr=lang_en&hl=en&cr=US`,
      {
        method: "GET",
        headers: headers,
      }
    );
    const data = await res.json();

    setIsLoading(false);

    switch (category) {
      case "images":
        return data.image_results;

        case "news":
          return data.entries;

      default:
        return data.results;
    }
  };
  const getImageResults = async (searchTerm) => {
    setIsLoading(true);
    const res = await fetch(`/api/search/images/${searchTerm}`);
    const data = await res.json();
    setIsLoading(false);

    return data.image_results;
  };
  const getNewsResults = async (searchTerm) => {
    setIsLoading(true);
    const response = await fetch(`/api/search/news/${searchTerm}`);
    const data = await response.json();
    setIsLoading(false);

    return data.entries;
  };

  return (
    <GlobalContext.Provider
      value={{
        query,
        setQuery,
        // getResults,
        isLoading,
        setIsLoading,
        results,
        getSearchResults,
        getImageResults,
        getNewsResults,
        setResults,
        setSelected,
        selected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const getSearchResults = async (category, searchTerm) => {
  const res = await fetch(
    `${baseUrl}/${category}/q=${searchTerm}`,
    {
      method: "GET",
      headers: headers,
    }
  );
  const data = await res.json();

  switch (category) {
    case "images":
      return data.image_results;

      case "news":
        return data.entries;

    default:
      return data.results;
  }
};


export const useGlobalContext = () => useContext(GlobalContext);
