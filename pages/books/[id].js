// pages/books/[id].js
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import { supabaseFetch } from "../../lib/supabaseClient";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!id) return;
    async function load() {
      // try to fetch from Supabase; fallback to sample if not available
      try {
        const rows = await supabaseFetch("books", { query: `select=id,title,author,description,price,cover_url&eq=id.${id}` });
        if (rows && rows.length) {
          setBook(rows[0]);
        } else {
          // fallback sample
          setBook({
            id,
            title: "Sample Book",
            author: "Sample Author",
            description: "Sample description.",
            price: 3000,
            cover_url: "https://picsum.photos/360/480?random=21",
          });
        }
      } catch (err) {
        setBook({
          id,
          title: "Sample Book",
          author: "Sample Author",
          description: "Sample description.",
          price: 3000,
          cover_url: "https://picsum.photos/360/480?random=21",
        });
      }
    }
    load();
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
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Order & Pickup</button>
          </div>
        </div>
      </main>
    </>
  );
}
