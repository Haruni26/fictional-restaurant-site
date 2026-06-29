import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030E18] font-sans selection:bg-teal-200">
      {/* Hero Section */}
      <section className="relative flex overflow-hidden flex-col items-center justify-center pt-32 pb-20 px-6 bg-black/90 text-teal-50 min-h-[65vh]">
        <Image
          src="/images/dining-room.jpg"
          alt="Main dining room"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6 drop-shadow-lg font-serif">
            Welcome
          </h1>
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
            <div className="aspect-[4/5] w-full max-w-md bg-stone-200 rounded-[2rem] overflow-hidden relative shadow-2xl">
              <Image
                src="/images/lobster-pasta.jpg"
                alt="Lobster pasta"
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
