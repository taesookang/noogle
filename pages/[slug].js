import { useGlobalContext } from "../services";
import {
  Layout,
  SearchRenderer,
  ImagesRenderer,
  VideosRenderer,
  NewsRenderer,
  NoResults,
  Loading,
} from "../components";
import { useRouter } from "next/router";

const SearchPage = ({ results }) => {
  const { isLoading } = useGlobalContext();
  const router = useRouter();
  const { slug } = router.query;

  console.log(results);

  if (isLoading) {
    return <Loading />;
  } else {
    switch (slug) {
      case "images":
        return results ? <ImagesRenderer results={results} /> : <NoResults />

      case "news":
        return results ? <NewsRenderer results={results} /> : <NoResults />

      case "search":
        return results ? <SearchRenderer results={results} /> : <NoResults />
      case "videos": 
       return results ? <VideosRenderer results={results} /> : <NoResults />
    }
  }
};

SearchPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const youtubeUrl = "https://youtube-search-results.p.rapidapi.com/youtube-search";
  const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

  const { slug } = context.params;
  const { q } = context.query;
  const query = q.split(" ").join("+");
  const headers = {
    "x-user-agent": "desktop",
    'x-proxy-location': 'US',
    "x-rapidapi-host":
      slug === "videos"
        ? "youtube-search-results.p.rapidapi.com"
        : "google-search3.p.rapidapi.com",
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
  };

  let data = null;

  switch (slug) {
    case "search":
      data = await fetch(
        `${baseUrl}/search/q=${query}&num=50&lr=lang_en&cr=US`,
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
      data = await fetch(`${baseUrl}/news/q=${query}&num=50&cied=US:en`, {
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
      data = await fetch(`${baseUrl}/image/q=${query}`, {
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
    case "videos":
      data = await fetch(`${youtubeUrl}/?q=${query}`, {
        method: "GET",
        headers: headers,
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));

      return {
        props: {
          results: data.items,
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
