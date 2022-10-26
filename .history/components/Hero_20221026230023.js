import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header className="flex justify-between items-center py-4 md:py-8 mb-4">
            <div className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5">
              Greenish Glare
            </div>

            <nav className="hidden lg:flex gap-12">
              <a href="#" className="text-indigo-500 text-lg font-semibold">
                New
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
              >
                Catalogue
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
              >
                Payment
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
              >
                Shipping
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
              >
                Wishlist
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
              >
                Contacts
              </a>
            </nav>

            <a
              href="#"
              className="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              MENU
            </a>
           

            <button
              type="button"
              className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
            >
              Menu
            </button>
          </header>

          <section className="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
            <img
              src="/images/images/sc4.jpg"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="w-full h-full object-cover object-center absolute inset-0"
            />

            <div className="sm:max-w-xl flex flex-col items-center relative p-4">
              <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">
                Enrich your beauty
              </h1>
              <p className="text-indigo-800 text-lg sm:text-xl text-center mb-4 md:mb-8">
                Highest quality ingredients,formulated to provide your skin with
                the purest powers of nature
              </p>

              <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                <a
                  href="#"
                  className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Start now
                </a>

                <a
                  href="#"
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Take tour
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
