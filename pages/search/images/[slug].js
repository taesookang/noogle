import { useState, useEffect } from "react";
import { useGlobalContext } from "../../../services";
import { Layout } from "../../../components";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const ImagePage = () => {
  const [results, setResults] = useState([]);
  const { getImageResults } = useGlobalContext();
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const getData = async () => {
      const data = await getImageResults(slug);
      console.log(data);
      setResults(data);
    };

    getData();
  }, [slug]);

  return (
      <div className="flex flex-wrap justify-center sm:justify-start mt-4">
        {results &&
          results.map((result, index) => (
            <div className="m-2 sm:w-52 w-5/6" key={index}>
              <div className="image-container relative  h-40 hover:shadow-gray-400 hover:shadow-md cursor-pointer">
                <Image
                  src={result.image.src}
                  alt={result.image.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="whitespace-nowrap text-xs mt-2 text-gray-700">
                {result.link.title.length > 30
                  ? result.link.title.substring(0, 30) + "..."
                  : result.link.title}
              </p>
            </div>
          ))}
      </div>
  );
};

ImagePage.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

export default ImagePage;
