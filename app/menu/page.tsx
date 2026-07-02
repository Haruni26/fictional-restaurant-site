import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="min-h-screen font-sans selection:bg-teal-200">
      {/* Hero Section */}
      <section className="relative flex flex-col overflow-hidden items-center justify-center px-6 bg-black/90 min-h-[90vh]">
        <Image
          src="/images/dining-room.jpg"
          alt="Dining Room"
          loading="eager"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="z-10 text-center flex flex-col items-center gap-6">
          <h1 className="text-5xl sm:text-6xl md:text-8xl tracking-tight mb-6 drop-shadow-lg font-serif">
            Our Menu
          </h1>
        </div>
        <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-white/90">
          <div className="h-8 w-px bg-white/90" />
        </div>
      </section>

      {/* Starters */}
      <section className="bg-[#FAF8F5] py-20 md:py-32 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1px_1fr] items-start gap-0">
            {/* Left Sidebar */}
            <div className="md:pr-12 pb-12 md:pb-0 flex flex-col gap-8">
              <div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Sample text
                </p>
              </div>

              {/* Horizontal rule on mobile only */}
              <div className="block md:hidden h-px w-full bg-neutral-300" />

              <div className="flex flex-col gap-4">
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                  Details
                </p>
              </div>
            </div>

            {/* Vertical Rule — middle column of the grid */}
            <div className="hidden md:block bg-neutral-300 self-stretch" />

            {/* Right Editorial */}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1"></div>

          {/* Image Content */}
          {/* <div className="order-1 md:order-2 w-full flex justify-center md:justify-end">
            <div className="aspect-3/4 w-full max-w-md overflow-hidden relative shadow-2xl">
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

      {/* Chef Section */}
      <section className="bg-[#527a91] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"></div>
      </section>
    </div>
  );
}
