'use client';

export default function Home() {
  // Featured luxury fashion products
  const featuredProducts = [
    { name: 'Monaco Satin Evening Gown', price: '$980' },
    { name: 'Étoile Cashmere Wrap Coat', price: '$1,240' },
    { name: 'Valentina Silk Blouse', price: '$560' },
    { name: 'Lumière Tailored Trousers', price: '$490' },
    { name: 'Noir Pearl-Button Blazer', price: '$820' },
    { name: 'Aurelia Leather Mini Bag', price: '$1,150' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F1] text-[#333333] font-sans">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-30 bg-[#F5F5F1]/95 backdrop-blur border-b border-[#ECEBE6] px-4 py-4 sm:px-6 md:px-16 md:py-6 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-[0.2em] sm:tracking-widest">
          LOVELACE
        </h1>
        <ul className="flex w-full sm:w-auto justify-between sm:justify-start sm:space-x-8 text-sm sm:text-base font-medium">
          <li>
            <a href="#collection" className="hover:underline">
              Collection
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center md:justify-between px-4 sm:px-6 md:px-16 pt-10 sm:pt-14 md:pt-24 pb-12 sm:pb-16 md:pb-24 gap-8 md:gap-0">
        {/* Hero Text */}
        <div className="md:w-1/2 flex flex-col items-start space-y-6 sm:space-y-8">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-[3.5rem] md:leading-none font-light tracking-tight">
            Effortless Elegance,<br />For Modern Women
          </h2>
          <p className="text-base sm:text-lg md:text-xl mt-1 sm:mt-2 max-w-xl">
            Discover timeless pieces crafted for sophistication and comfort.
          </p>
          <a
            href="#collection"
            className="mt-2 sm:mt-4 px-6 sm:px-8 py-3 bg-[#333333] text-[#F5F5F1] rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm hover:bg-[#222] transition"
          >
            Shop Collection
          </a>
        </div>
        {/* Hero Image Placeholder */}
        <div className="md:w-1/2 w-full flex justify-center mb-2 md:mb-0">
          <div className="bg-gray-200 rounded-xl w-full max-w-[330px] h-[390px] sm:h-[430px] md:max-w-[400px] md:h-[520px] flex items-center justify-center shadow-md">
            <span className="text-[#B0B0A9] font-serif text-lg sm:text-xl md:text-2xl select-none">
              Fashion Image
            </span>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="collection" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-16 sm:pb-24">
        <h3 className="font-serif text-2xl md:text-3xl font-normal mb-8 sm:mb-10 text-center tracking-tight">
          Featured Styles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="flex flex-col items-center bg-white/70 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-52 sm:h-56 w-full bg-gray-100 rounded-md mb-5 sm:mb-6 flex items-center justify-center">
                <span className="text-gray-300 font-serif select-none">Image</span>
              </div>
              <span className="font-serif text-lg md:text-xl mb-2 text-center min-h-14 flex items-center">
                {product.name}
              </span>
              <span className="text-base font-medium">{product.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}