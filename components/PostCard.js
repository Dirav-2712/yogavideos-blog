import Link from 'next/link'

export default function PostCard({ title, slug, image }) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition mb-6">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-primary">{title}</h2>
        </div>
      </div>
    </Link>
  )
}
