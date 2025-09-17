import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Zamko Bookshop</h1>

        {/* Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/categories" className="hover:text-gray-200">Categories</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
