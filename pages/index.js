import fs from 'fs'
import path from 'path'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.existsSync(postsDirectory) ? fs.readdirSync(postsDirectory) : []

  const posts = filenames.map(name => ({
    slug: name.replace(/\.mdx$/, ''),
    title: name.replace(/-/g, ' '),
    image: 'https://source.unsplash.com/400x300/?yoga' // placeholder image
  }))

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <Layout>
      <Hero />
      <section id="posts" className="grid md:grid-cols-2 gap-6">
        {posts.map(post => (
          <PostCard key={post.slug} {...post} />
        ))}
      </section>
    </Layout>
  )
}
