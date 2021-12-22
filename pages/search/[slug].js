import { useState, useEffect } from "react";
import { useGlobalContext } from "../../services";
import { Layout } from "../../components";
import { useRouter } from "next/router";
import Link from "next/link";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const { getSearchResults } = useGlobalContext();
  const router = useRouter();
  const { slug } = router.query;
  
  useEffect(() => {
    const getData = async () => {
      const data = await getSearchResults(slug);
      console.log(data);
      setResults(data);
    };

    getData()
  }, [slug]);

  return (
    // <Layout slug={slug}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 pt-4">
      {results &&
        results.map((result, index) => (
          <div key={index} className="md:w-4/6 w-full">
            <Link href={result.link}>
              <a className="cursor-pointer" target="_blank" rel="noreferrer">
                <span className="text-sm">{result.link.length > 30 ? result.link.substring(0, 30) + "..." : result.link}</span>
                <h1 className="text-blue-600 text-xl">{result.title}</h1>
              </a>
            </Link>
            </div>
        ))}
        </div>
    // </Layout>
  );
};

SearchPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default SearchPage;
