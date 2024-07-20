import Link from 'next/link'
import React from 'react'



const FirstPost = () => {
  return (
    <div className='p-24'>
      <h1 className='text-3xl text-font-bold mb-4'>This is my first blog post</h1>
      <p className='mb-4'>This is my first blog post</p>
      <Link className='text-blue-600 hover:underline-offset-1' href={"/blog"}>Back to Blog</Link>
    </div>
  )
}

export default FirstPost
