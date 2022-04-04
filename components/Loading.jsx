import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useGlobalContext } from "../services";

const Loading = () => {
  const { selected } = useGlobalContext();

  const renderSkeletons = () => {
    const skeletons = [];
    for (var i = 0; i < 24; i++) {
      switch (selected) {
        case "images":
          skeletons.push(
            <div className="mb-4">
              <Skeleton width={208} height={160} />
              <Skeleton width={180} height={14} />
            </div>
          );
          break;

        case "news":
          skeletons.push(
            <div className="mb-4">
              <Skeleton width={320} height={20} count={2} />
              <Skeleton width={180} height={14} />
            </div>
          );

          break;

        case "videos":
          skeletons.push(
            <div className="mb-4">
              <div className="flex">
                <Skeleton width={180} height={100} />
                <div className="ml-4">
                  <Skeleton width={160} height={14} count={2} />
                  <Skeleton width={100} height={14} />
                </div>
              </div>
            </div>
          );

          break;

        default:
          skeletons.push(
            <div className="mb-4">
              <Skeleton width={150} height={14} />
              <Skeleton width={240} height={20} count={2} />
              <Skeleton width={180} height={20} />
            </div>
          );
          break;
      }
    }
    return skeletons;
  };

  return (
    <div
      className={`grid grid-cols-1 gap-4 pt-4 ${
        selected === "images"
          ? "md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
          : selected === "news"
          ? "sm:grid-cols-2 xl: grid-cols-2"
          : selected === "search" && "sm:grid-cols-2 xl:grid-cols-3"
      }`}
    >
      {renderSkeletons()}
    </div>
  );
};

export default Loading;
