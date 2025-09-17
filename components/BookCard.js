// components/BookCard.js
import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <article className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition">
      <div className="w-full h-56 bg-gray-100 rounded overflow-hidden">
        <img
          src={book.cover_url || book.image || '/placeholder-book.png'}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-3 text-sm font-semibold text-gray-800">
        {book.title}
      </h3>
      <p className="text-xs text-gray-500">{book.author}</p>
      {book.price && (
        <div className="mt-2 text-sm font-bold text-gray-800">₦{book.price}</div>
      )}

      <div className="mt-3">
        <Link href={`/books/${book.id || book.slug || book.title}`}>
          <a className="block text-center bg-blue-600 text-white px-3 py-2 rounded">
            Order & Pickup
          </a>
        </Link>
      </div>
    </article>
  );
}
