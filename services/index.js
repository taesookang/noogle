import React, { useState, useEffect, createContext, useContext } from "react";
import { Router } from 'next/router'

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const cachedSelected = window.localStorage.getItem("selected");
    if (cachedSelected) {
      setSelected(cachedSelected);
    }
  }, []);

  useEffect(() => {
    const start = () => {
      setIsLoading(true);
    };
    const end = () => {
      setIsLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        query,
        setQuery,
        isLoading,
        setIsLoading,
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
