import React from "react";
import Image from "next/image";
import Link from 'next/link'

const ImagesRenderer = ({ results }) => {
  return (
    <>
    <div className="flex flex-wrap justify-center sm:justify-start mt-4">
      {results &&
        results.map((result, index) => (
          <div className="m-2 sm:w-52 w-5/6" key={index}>
            <Link href={result.image.src}>
              <a target="_blank" rel="noreferrer">
                <div className="image-container relative h-40 hover:shadow-gray-400 hover:shadow-md cursor-pointer">
                  <Image
                    src={result.image?.src}
                    alt={result.image?.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </a>
            </Link>
            <p className="whitespace-nowrap text-xs mt-2 text-gray-700">
              {result.link?.title?.length > 30
                ? result.link.title.substring(0, 30) + "..."
                : result.link.title}
            </p>
          </div>
        ))}
    </div>
    </>
  );
};

export default ImagesRenderer;
