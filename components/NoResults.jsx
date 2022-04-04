import React from 'react'
import { useGlobalContext } from '../services'
import { EmojiSadIcon } from '@heroicons/react/outline'

const NoResults = () => {

    const { query } = useGlobalContext()
  return (
    <div className='w-full mt-12 flex justify-center'>
        <div className='flex flex-col items-center justify-center'>
        <EmojiSadIcon width={200} height={200} color="#dadada" />
        <p className='text-gray-400 text-center'>We couldn't find a match for <b className='text-gray-600'>"{query}"</b>.<br/>Please try another search.</p>
        </div>
    </div>
  )
}

export default NoResults