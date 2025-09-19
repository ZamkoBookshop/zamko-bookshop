// pages/books/[id].js
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!id) return;

    // For now, use a simple safe fallback book
    setBook({
      id,
      title: `Sample Book ${id}`,
      author: "Sample Author",
      description: "This is a placeholder book description. Replace with real data later.",
      price: 3500,
      cover_url: `https://picsum.photos/360/480?random=${id}`,
    });
  }, [id]);

  if (!book) return <div className="max-w-4xl mx-auto p-6">Loading…</div>;

  return (
    <>
      <Head>
        <title>{book.title} · Zamko Bookshop</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img src={book.cover_url} alt={book.title} className="w-full rounded" />
          </div>
          <div className="md:flex-1">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p className="text-sm text-gray-600">{book.author}</p>
            <p className="mt-4 text-gray-700">{book.description}</p>
            <div className="mt-6 font-semibold">₦{book.price}</div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Order & Pickup
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
