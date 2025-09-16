export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Zamko Bookshop
          </h1>
          <p className="text-gray-600">small bookshop big ideas</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome to Zamko Bookshop</h2>
        <p className="text-gray-700">
          Browse our collection of books, discover new ideas, and place your
          order for pick-up at our Maitama store.
        </p>
      </main>

      <footer className="bg-gray-100 py-6 mt-10 text-center text-gray-500">
        20 Gana Street, Maitama Abuja | 08022295640
      </footer>
    </div>
  );
}
