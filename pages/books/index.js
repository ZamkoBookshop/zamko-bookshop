// pages/books/index.js
import Head from "next/head";
import Link from "next/link";

export default function BooksPage() {
  // For now, use sample books to avoid build errors
  const books = [
    {
      id: 1,
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      price: "₦3,500",
      cover_url: "https://picsum.photos/200/300?random=11",
    },
    {
      id: 2,
      title: "Half of a Yellow Sun",
      author: "Chimamanda Ngozi Adichie",
      price: "₦4,200",
      cover_url: "https://picsum.photos/200/300?random=12",
    },
    {
      id: 3,
      title: "The Joys of Motherhood",
      author: "Buchi Emecheta",
      price: "₦3,200",
      cover_url: "https://picsum.photos/200/300?random=13",
    },
  ];

  return (
    <>
      <Head>
        <title>Books · Zamko Bookshop</title>
      </Head>
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Our Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={book.cover_url}
                alt={book.title}
                className="w-full h-56 object-cover rounded-md"
              />
              <h2 className="mt-4 text-lg font-semibold">{book.title}</h2>
              <p className="text-gray-500">{book.author}</p>
              <p className="text-gray-700 font-bold">{book.price}</p>
              <Link href={`/books/${book.id}`}>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
