// pages/books/[id].js
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabaseFetch } from "../../lib/supabaseClient";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", note: "" });

  useEffect(() => {
    if (!id) return;
    async function load() {
      try {
        const rows = await supabaseFetch("books", {
          query: `select=id,title,author,description,price,cover_url&eq=id.${id}`,
        });
        if (rows && rows.length) {
          setBook(rows[0]);
        } else {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${form.name}! Your order for "${book.title}" has been placed.`
    );
    setShowForm(false);
    setForm({ name: "", phone: "", note: "" });
  };

  return (
    <>
      <Head>
        <title>{book.title} · Zamko Bookshop</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src={book.cover_url}
              alt={book.title}
              className="w-full rounded"
            />
          </div>
          <div className="md:flex-1">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p className="text-sm text-gray-600">{book.author}</p>
            <p className="mt-4 text-gray-700">{book.description}</p>
            <div className="mt-6 font-semibold">₦{book.price}</div>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Order & Pickup
            </button>

            {/* Navigation buttons */}
            <div className="mt-6 flex gap-4">
              <Link href="/books">
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                  ← Back to Books
                </button>
              </Link>
              <Link href="/">
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                  ← Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Order Modal */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">
                Order & Pickup - {book.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border p-2 rounded"
                  required
                />
                <textarea
                  placeholder="Pickup Note (optional)"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full border p-2 rounded"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
