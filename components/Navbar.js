import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between">
        <Link href="/"><span className="font-bold text-xl">YogaVideos</span></Link>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="#posts">Posts</Link>
        </div>
      </div>
    </nav>
  )
}
