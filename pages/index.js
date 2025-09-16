import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  // Sample books for now (we’ll replace later with real data)
  const books = [
    {
      id: 1,
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      price: "₦3,500",
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      title: "Half of a Yellow Sun",
      author: "Chimamanda Ngozi Adichie",
      price: "₦4,200",
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      title: "The Secret Lives of Baba Segi’s Wives",
      author: "Lola Shoneyin",
      price: "₦3,800",
      image: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      title: "The Joys of Motherhood",
      author: "Buchi Emecheta",
      price: "₦3,200",
      image: "https://picsum.photos/200/300?random=4",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };

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

        {/* Slider */}
        <Slider {...sliderSettings}>
          {books.map((book) => (
            <div key={book.id} className="px-2">
              <img
                src={book.image}
                alt={book.title}
                className="rounded-xl shadow-md mx-auto h-64 object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
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
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Order & Pickup
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
