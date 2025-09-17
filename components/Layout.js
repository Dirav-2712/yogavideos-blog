export default function Layout({ children }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-center text-purple-700">
          Yoga Videos Blog 🧘‍♀️
        </h1>
      </header>
      <main>{children}</main>
      <footer className="mt-10 text-center text-gray-500">
        © {new Date().getFullYear()} YogaVideos.com
      </footer>
    </div>
  )
}
