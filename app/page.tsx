import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-teal-200">
      {/* Hero Section */}
      <section className="relative flex flex-col overflow-hidden items-center justify-center px-6 bg-black/90 min-h-screen">
        <Image
          src="/images/outside-dining.jpg"
          alt="Outside Dining Area"
          loading="eager"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="z-10 text-center flex flex-col items-center gap-6">
          <h1 className="text-5xl sm:text-6xl md:text-8xl tracking-tight mb-6 drop-shadow-lg font-serif">
            Welcome
          </h1>
        </div>
        <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-white/90">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="h-8 w-px bg-white/90" />
        </div>
      </section>

      {/* Opening Section */}
      <section className="bg-[#FAF8F5] py-20 md:py-32 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1px_1fr] items-start gap-0">
            {/* Left Sidebar */}
            <div className="md:pr-12 pb-12 md:pb-0 flex flex-col gap-8">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-3">
                  Book
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Reservations are recommended for all dining experiences.
                </p>
              </div>

              {/* Horizontal rule on mobile only */}
              <div className="block md:hidden h-px w-full bg-neutral-300" />

              <div className="flex flex-col gap-4">
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                  Details
                </p>
                <div className="text-sm text-neutral-600 leading-relaxed space-y-3">
                  <div>
                    <p className="font-semibold text-neutral-800">Dress Code</p>
                    <p>
                      Resort Chic — Dress beautifully for an evening to
                      remember.
                    </p>
                  </div>
                  <p>
                    Gentlemen: Collared shirts, blazers, or attire of equivalent
                    elegance.
                  </p>
                  <p>Ladies: Dressy resort wear to formal evening attire.</p>
                  <p className="text-neutral-400 text-xs italic mt-1">
                    Athletic wear, flip flops, and beachwear are not permitted.
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Rule — middle column of the grid */}
            <div className="hidden md:block bg-neutral-300 self-stretch" />

            {/* Right Editorial */}
            <div className="md:pl-16 lg:pl-24">
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-[0.08em] uppercase text-neutral-900 mb-10 leading-tight">
                Where the Sea <br className="hidden lg:block" />
                Meets the Table
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-loose">
                <p>
                  For centuries, the waters surrounding Paradise Island have
                  drawn those who seek something beyond the ordinary. A
                  convergence of sea, sky, and flavor unlike anything found
                  elsewhere on earth.
                </p>
                <p>
                  Jackdaw is our expression of that singular place. A kitchen
                  shaped by the rhythm of the tides, the warmth of the trade
                  winds, and the deep culinary traditions of the Caribbean.
                  Every dish is an invitation to stay a little longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-4">
              The Kitchen
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-[0.08em] uppercase text-black mb-8 leading-tight">
              Different flavors, <br className="hidden lg:block" /> Right at
              Your Table.
            </h2>
            {/* Left Text */}
            <div className="space-y-4 text-base text-black leading-2 mb-10">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Our michilin star crew draw from the abundant waters, and rich
                culinary traditions of the Bahamas. Each dish is a work of local
                ingredients, timed technique, and industry renowned service.
              </p>
              <p>
                Italian housemade pasta, cracked conch, even fresh lobster.
                Every dish is created to be savoured.
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-block text-sm tracking-[0.25em] uppercase py-4 bg-black text-white rounded-md font-semibold border hover:bg-white hover:border-black hover:text-black hover:shadow-lg transition-all duration-300"
            >
              Explore Our Menu
            </Link>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2 w-full flex justify-center md:justify-end">
            <div className="aspect-4/5 w-full max-w-md bg-stone-200 rounded-4xl overflow-hidden relative shadow-2xl">
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

      {/* Fictional Chef Section */}
      <section className="bg-[#FAF8F5] py-20 md:py-28 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-950 mb-6 leading-tight">
              Message from the Chef
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Cooking is my passion and stuff
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              even more Yapping
            </p>

            <Link
              href="/about-us"
              className="inline-block text-sm tracking-[0.25em] uppercase py-4"
            >
              Meet the Team
            </Link>
          </div>

          {/* Need to edit image position and find stock photo */}
          {/* <div className="order-1 md:order-2 w-full flex justify-center md:justify-end">
            <div className="aspect-4/5 w-full max-w-md bg-stone-200 rounded-4xl overflow-hidden relative shadow-2xl">
              <Image
                src="/images/lobster-pasta.jpg"
                alt="Lobster pasta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
