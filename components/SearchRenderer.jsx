import React from 'react'
import Link from 'next/link'


const SearchRenderer = ({ results }) => {
    return (
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
    )
}

export default SearchRenderer
