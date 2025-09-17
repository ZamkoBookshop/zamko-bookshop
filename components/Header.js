export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Slogan */}
        <div>
          <h1 className="text-2xl font-bold">Zamko Bookshop</h1>
          <p className="text-sm">Small Bookshop, Big Ideas</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:block">
          <a href="/" className="hover:underline">Home</a>
          <a href="/books" className="hover:underline">Books</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
