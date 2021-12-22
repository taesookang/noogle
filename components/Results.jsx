import React from "react";
import { useGlobalContext } from "../services";
import { Loading } from "../components";
import Image from "next/image";

const Results = ({ slug, results }) => {
  const { isLoading } = useGlobalContext();
  console.log(results);

  switch (isLoading) {
    case true:
      return <Loading />;

    default:
      if (slug === "images") {
        return (
          <div>
            {results &&
              results.map((result, index) => (
                <Image 
                  src={result.image}
                  width={100}
                  height={100}
                  key={index}
                />
              ))}
          </div>
        );
      } else {
        return (
          <div>
            {results &&
              results.map((result, index) => (
                <div key={index}>{result.title}</div>
              ))}
          </div>
        );
      }
  }
};

export default Results;
