import React from 'react'
import Link from 'next/link'

const NewsRenderer = ({ results }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-4">
        {results &&
          results.map(({ link, source, title }, index) => (
            <div key={index} className="md:w-4/5 w-full mt-2">
              <Link href={link}>
                <a target="_blank" rel="noreferrer">
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                  <div className="flex gap-4">
                    <p className="text-sm hover:underline">{source?.href}</p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    )
}

export default NewsRenderer
