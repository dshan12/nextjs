import Link from 'next/link'

export default function Blog() {
  return (
    <div className="p-24">
      <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/blog/first-post" className="text-blue-500 hover:underline">
            First Blog Post
          </Link>
        </li>
        <li>
          <Link href="/blog/second-post" className="text-blue-500 hover:underline">
            Second Blog Post
          </Link>
        </li>
      </ul>
    </div>
  )
}
