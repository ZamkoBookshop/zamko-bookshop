// pages/books/index.js
import Head from "next/head";
import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";
import { supabaseFetch } from "../../lib/supabaseClient";

export default function BooksPage() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sample = [
    {
      id: "s-1",
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      price: 5000,
      image: "https://picsum.photos/300/420?random=11",
    },
    {
      id: "s-2",
      title: "Isara - A Stage Adaptation",
      author: "Femi Osofisan",
      price: 3000,
      image: "https://picsum.photos/300/420?random=12",
    },
    {
      id: "s-3",
      title: "The Age of White Rulers",
      author: "Akin Adesokan",
      price: 2500,
      image: "https://picsum.photos/300/420?random=13",
    },
  ];

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        // try fetching real data from Supabase REST API
        const rows = await supabaseFetch("books", { query: "select=id,title,author,price,cover_url" });
        if (rows === null) {
          // keys missing → use sample data
          setBooks(sample);
        } else {
          // map supabase rows to expected shape
          const mapped = rows.map((r) => ({
            id: r.id,
            title: r.title,
            author: r.author,
            price: r.price,
            cover_url: r.cover_url,
          }));
          setBooks(mapped.length ? mapped : sample);
        }
      } catch (err) {
        console.error("Books fetch error:", err);
        setError("Unable to load books right now. Showing sample data.");
        setBooks(sample);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <>
      <Head>
        <title>Books · Zamko Bookshop</title>
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Books</h1>
        {error && (
          <div className="mb-4 text-sm text-red-600">{error}</div>
        )}

        {loading && <div className="text-sm text-gray-500">Loading books…</div>}

        {!loading && books && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {books.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
