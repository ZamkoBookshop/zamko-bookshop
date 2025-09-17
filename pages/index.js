// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zamko Bookshop</title>
        <meta
          name="description"
          content="Zamko Bookshop - Small bookshop, big ideas."
        />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Zamko Bookshop
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Small Bookshop, Big Ideas
        </p>

        <div className="text-center text-lg text-gray-700">
          ✅ If you see this page, your deployment is working fine.
        </div>
      </main>
    </>
  );
}
