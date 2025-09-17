import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '../../components/Layout'

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.existsSync(postsDirectory) ? fs.readdirSync(postsDirectory) : []

  const paths = filenames.map((name) => ({
    params: { slug: name.replace(/\.mdx$/, '') }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`)
  const source = fs.readFileSync(filePath)
  const { content } = matter(source)
  const mdxSource = await serialize(content)

  return { props: { mdxSource, slug: params.slug } }
}

export default function PostPage({ mdxSource, slug }) {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">{slug.replace(/-/g, ' ')}</h1>
      <MDXRemote {...mdxSource} />
    </Layout>
  )
}
