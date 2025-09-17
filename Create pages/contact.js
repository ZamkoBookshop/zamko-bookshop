export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Have questions or want to order a book? Reach out to us!
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border p-2 rounded-lg"
        ></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </main>
  );
}
