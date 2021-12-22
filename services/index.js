import React, { useState, createContext, useContext } from "react";

const GlobalContext = createContext();
export const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export function GlobalContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState("Search");

  // / => home
  // /search/[slug] => search
  // /search/images/[slug] => images
  // /search/news/[slug] => news

  const getSearchResults = async(searchTerm) => {
    setIsLoading(true)
    const response = await fetch(`/api/search/${searchTerm}`)
    const data = await response.json()
    setIsLoading(false);

    return data.results;
  }
  const getImageResults = async(searchTerm) => {
    setIsLoading(true)
    const response = await fetch(`/api/search/images/${searchTerm}`)
    const data = await response.json();
    setIsLoading(false);

    return data.image_results;
  }
  const getNewsResults = async(searchTerm) => {
    setIsLoading(true)
    const response = await fetch(`/api/search/news/${searchTerm}`)
    const data = await response.json();
    setIsLoading(false);

    return data.entries;
  }

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
        selected
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
