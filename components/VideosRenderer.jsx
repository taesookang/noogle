import React from "react";
import Image from "next/image";
import Link from "next/link";

const VideosRenderer = ({ results }) => {
  return (
    <div className="w-full px-8">
      {results.map(
        (result, index) =>
          result.type === "video" && (
            <div className="my-8" key={index}>
              <p className="text-sm">
                www.youtube.com{" "}
                <span className="text-gray-400">&gt; watch</span>
              </p>
              <h1 className="text-lg text-blue-600 mb-3">{result.title}</h1>
              <div className="flex flex-col sm:flex-row">
                <Link href={result.url} passHref>
                  <a
                    className="relative aspect-[178/100] min-w-[178px] min-h-[100px] rounded-lg overflow-hidden"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={result.bestThumbnail?.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <span className="absolute bottom-2 left-2 z-20 flex items-center justify-center text-xs py-0.5 px-2 bg-black/70 text-white font-semibold rounded-full">
                      {result.duration}
                    </span>
                  </a>
                </Link>
                <div className="mt-2 sm:mt-0 sm:w-[400px] sm:ml-4 ">
                  <p className="mb-3 text-gray-600">
                    {result.description ? result.description : result.title}
                  </p>
                  <p className="text-sm">
                    YouTube{" "}
                    <span className="text-gray-400">
                      &middot; {result.author?.name} &middot;{" "}
                      {result.uploadedAt}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default VideosRenderer;
