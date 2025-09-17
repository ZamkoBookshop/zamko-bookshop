import Link from "next/link"; // add this at the top

// inside the book grid (replace your existing book card)
{books.map((book) => (
  <div
    key={book.id}
    className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
  >
    <img
      src={book.image}
      alt={book.title}
      className="w-full h-56 object-cover rounded-md"
    />
    <h2 className="mt-4 text-lg font-semibold">{book.title}</h2>
    <p className="text-gray-500">{book.author}</p>
    <p className="text-gray-700 font-bold">{book.price}</p>

    {/* Link to book detail page */}
    <Link href={`/books/${book.id}`}>
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        View Details
      </button>
    </Link>
  </div>
))}
