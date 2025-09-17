export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Zamko Bookshop</h2>
          <p className="text-sm">
            Small bookshop, big ideas. Promoting African literature and timeless classics
            while supporting our community of readers.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Contact</h2>
          <p className="text-sm">📍 Jos, Plateau State, Nigeria</p>
          <p className="text-sm">📞 +234 800 000 0000</p>
          <p className="text-sm">✉️ info@zamkobookshop.com</p>
        </div>

        {/* Opening Hours */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Opening Hours</h2>
          <p className="text-sm">Mon - Fri: 9:00am - 6:00pm</p>
          <p className="text-sm">Sat: 10:00am - 4:00pm</p>
          <p className="text-sm">Sun: Closed</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Zamko Bookshop. All rights reserved.
      </div>
    </footer>
  );
}
