import { useState, useEffect } from "react";
import { useGlobalContext, getSearchResults } from "../services";
import {
  Layout,
  SearchRenderer,
  ImagesRenderer,
  NewsRenderer,
} from "../components";
import { useRouter, Router } from "next/router";
import Link from "next/link";

const SearchPage = ({ results }) => {
  // const [results, setResults] = useState([]);
  // const { isLoading, setIsLoading } = useGlobalContext();
  const router = useRouter();
  const { slug } = router.query;
  const searchType = slug[0];
  const searchTerm = slug[1];

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
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
  if (loading) {
    return <h1>Loaidng</h1>;
  } else {
    switch (slug) {
      case "images":
        return results ? (
          <ImagesRenderer results={results} />
        ) : (
          <div>loading</div>
        );

      case "news":
        return results ? (
          <NewsRenderer results={results} />
        ) : (
          <div>loading</div>
        );

      case "search":
        return results ? (
          <SearchRenderer results={results} />
        ) : (
          <div>loading</div>
        );

      default:
        return <div>loading</div>;
    }
  }
};

SearchPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
  const headers = {
    "x-user-agent": "desktop",
    "x-rapidapi-host": "google-search3.p.rapidapi.com",
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
  };

  const { slug, q } = context.query;
  const query = q.split(" ").join("+");

  let data = null;

  switch (slug) {
    case "search":
      data = await fetch(
        `${baseUrl}/search/q=${query}&num=100&lr=lang_en&cr=US`,
        {
          method: "GET",
          headers: headers,
        }
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));

      return {
        props: {
          results: data.results,
        },
      };
    case "news":
      data = await fetch(`${baseUrl}/news/q=${query}&num=20&cied=US:en`, {
        method: "GET",
        headers: headers,
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));

      return {
        props: {
          results: data.entries,
        },
      };
    case "images":
      data = await fetch(`${baseUrl}/images/q=${query}`, {
        method: "GET",
        headers: headers,
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));

      return {
        props: {
          results: data.image_results,
        },
      };
    default:
      return {
        props: {
          results: null,
        },
      };
  }
}

export default SearchPage;
