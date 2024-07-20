import Link from 'next/link'
import React from 'react'


const SecondPost = () => {
  return (
    <div className='p-24 mb-4'>
      <h1 className='text-3xl font-bold'>Second Blog Post</h1>
      <p>This is my second blog post</p>
      <Link href="/blog" className='text-blue-500 hover:underline'>Back to blog</Link>
    </div>
  )
}

export default SecondPost
