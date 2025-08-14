import React, { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/media")
      .then((res) => res.json())
      .then((data) => setCarouselItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-gray-100 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md text-black">
        <div className="font-bold text-lg">AsilbekTextile</div>
        <ul className="hidden md:flex gap-6">
          {["Home", "Fabric", "Gallery"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer group"
            >
              <span className="hover:text-purple-600">{item}</span>
              {/* underline animation */}
              <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold shadow-md hover:scale-105 transform transition-all duration-300 cursor-pointer">
            Contact us
          </button>
          <div className="text-sm leading-tight">
            <p>+99890 123 45 67</p>
          </div>
        </div>
      </nav>


{/* Hero Section */}
<section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-10 bg-gradient-to-r from-gray-100 via-purple-50 to-gray-100 text-black">
  {/* Left side */}
  <div className="flex-1">
    <h4 className="font-bold mb-2 tracking-wide text-purple-700">
      It’s all about manufacturing
    </h4>
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
      We are a <span className="text-purple-700">weaving company</span>
    </h1>


{/* Button 1 */}
<span className="relative inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold shadow-md cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105 group">
  {/* Ikonka */}
  <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-5 h-5 relative z-10">
    <path d="M8 5v14l11-7z" />
  </svg>
  
  {/* Matn */}
  <span className="relative z-10">Watch a video</span>

  {/* O‘rtadan fon animatsiyasi */}
  <span className="absolute left-1/2 top-0 w-0 h-full bg-gradient-to-r from-purple-400 to-purple-600 opacity-30 transition-all duration-700 ease-out group-hover:w-full group-hover:left-0"></span>
</span>


  </div>

  {/* Right side */}
  <div className="flex-1 flex justify-center relative">
    <div className="relative bg-purple-700 text-white shadow-lg rounded-l p-8 w-full max-w-md z-10">
      <ul className="space-y-6 text-2xl font-semibold">
        <li className="flex items-center relative">
          <span className="absolute -left-12 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center">✔</span>
          Weaving
        </li>
        <li className="flex items-center relative">
          <span className="absolute -left-12 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center">✔</span>
          Printing
        </li>
        <li className="flex items-center relative">
          <span className="absolute -left-12 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center">✔</span>
          Sewing
        </li>
        <li className="flex items-center relative">
          <span className="absolute -left-12 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center">✔</span>
          Exporting
        </li>
      </ul>
    </div>
  </div>
</section>








      {/* Features Section */}
      {/* <section className="flex flex-col md:flex-row bg-gray-800 p-8 gap-6">
        <div className="flex-1 flex flex-col justify-center gap-3">
          <p>✅ Army fabrics</p>
          <p>✅ Poplin</p>
          <p>✅ Ripstop</p>
          <p>✅ Camouflage</p>
          <p>✅ Satin</p>
        </div>
        <div className="flex-1">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Fabric machine"
            className="rounded-lg"
          />
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="bg-purple-700 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-purple-900 p-6 rounded-lg">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                euismod nulla sed.
              </p>
              <p className="font-bold">Azizbek Xasanov</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Carousel */}
      {/* <section className="bg-gray-100 py-10 text-black">
        <div className="max-w-5xl mx-auto">
          {carouselItems.length > 0 ? (
            <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
              {carouselItems.map((item, index) => (
                <div key={index} className="absolute w-full h-full">
                  {item.type === "video" ? (
                    <video
                      src={item.url}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={`Carousel ${index}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Yuklanmoqda...</p>
          )}
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section className="bg-white text-black py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Contact us</h3>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="border p-2 rounded"
          ></textarea>
          <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-800">
            Send message
          </button>
        </form>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
            className="w-full h-64 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-purple-700 text-white py-6 text-center">
        <div className="flex justify-center gap-4 mb-2">
          <a href="https://instagram.com" className="hover:underline">
            📸 Instagram
          </a>
          <a href="https://t.me" className="hover:underline">
            💬 Telegram
          </a>
          <a href="mailto:example@mail.com" className="hover:underline">
            📧 Email
          </a>
        </div>
        <p className="text-sm text-purple-200">
          © {new Date().getFullYear()} UktamkoTextile. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
}
