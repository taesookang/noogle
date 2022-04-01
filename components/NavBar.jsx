import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  SearchIcon,
  PhotographIcon,
  NewspaperIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { useGlobalContext } from "../services";
const links = [
  { url: "/search", text: "search", icon: <SearchIcon className="w-4 h-4" /> },
  { url: "/news", text: "news", icon: <NewspaperIcon className="w-4 h-4" /> },
  {
    url: "/images",
    text: "images",
    icon: <PhotographIcon className="w-4 h-4" />,
  },
  {
    url: "/search",
    text: "videos",
    icon: <VideoCameraIcon className="w-4 h-4" />,
  },
];

const NavBar = () => {
  const router = useRouter();
  const { query } = useGlobalContext()

  const { slug } = router.query

  return (
    <div className="border-b border-gray-200">
      <ul className="flex pt-3">
        {links.map((link, index) => (
          <li
            className={`text-gray-500 text-sm p-2 ${
              slug === link.text && "border-b-2 border-blue-500"
            }`}
            key={index}
          >
            <button
              className="flex items-center mr-2"
              onClick={() =>{ router.push(link.url + "/" + query)}}
            >
              {link.icon}
              <span className="ml-1 ">{link.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
