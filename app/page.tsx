import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030E18] font-sans selection:bg-teal-200">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-8 md:px-12 z-20 text-teal-50">
        <div className="text-2xl font-black tracking-widest uppercase drop-shadow-md">
          <Link href="/">Jackdaw</Link>
        </div>
        <nav className="hidden md:flex gap-8 font-medium tracking-wide drop-shadow-md">
          <Link href="#menu" className="hover:text-teal-300 transition-colors">
            Menu
          </Link>
          <Link href="#story" className="hover:text-teal-300 transition-colors">
            Our Story
          </Link>
          <Link
            href="#reservations"
            className="hover:text-teal-300 transition-colors"
          >
            Reservations
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-black text-teal-50 min-h-[65vh]">
        {/* Add a background image here with opacity */}
        <div className="z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6 drop-shadow-lg font-serif">
            Jackdaw
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wide opacity-90 max-w-2xl">
            Where the ocean meets the fire. Authentic island flavors served with
            a tropical breeze.
          </p>
        </div>
      </section>

      {/* Opening Section */}
      <section
        id="story"
        className="bg-[#FAF8F5] py-24 md:py-32 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-950 mb-6 leading-tight">
              Different flavors, <br className="hidden lg:block" /> Right at
              Your Table.
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Something inspirational about this fake eating place
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              More Yapping
            </p>

            <Link
              href="#menu"
              className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold tracking-wide hover:bg-teal-700 hover:shadow-lg transition-all duration-300"
            >
              Explore Our Menu
            </Link>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2 w-full flex justify-center md:justify-end">
            <div className="aspect-[4/5] w-full max-w-md bg-stone-200 rounded-[2.5rem] overflow-hidden relative shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/lobster-pasta.jpg"
                alt="Something good"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
