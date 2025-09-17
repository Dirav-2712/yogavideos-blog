import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">{children}</main>
      <footer className="text-center text-gray-500 mt-10 mb-6">
        © {new Date().getFullYear()} YogaVideos.com
      </footer>
    </div>
  )
}
