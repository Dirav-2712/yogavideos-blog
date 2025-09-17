import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.existsSync(postsDirectory) ? fs.readdirSync(postsDirectory) : []

  const posts = filenames.map((name) => ({
    slug: name.replace(/\.mdx$/, ''),
    title: name.replace(/\.mdx$/, '').replace(/-/g, ' ')
  }))

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <span className="text-purple-600 underline">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
