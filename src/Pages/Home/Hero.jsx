import React from "react";
const Hero = () => {
  return (
    <div className="w-full">
      <section className=" p-10 relative bg-[url('./assets/hero.jpg')] bg-cover bg-left-bottom h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 text-center">
        {/* Optional Tagline or Badge */}
        <div className="mb-6 px-4 py-1 bg-white/10 border border-white/30 rounded-full text-sm text-white flex flex-wrap items-center justify-center gap-2.5 max-w-full">
          {/* Example badge: <span>New Release</span> */}
        </div>

        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight">
          Intrinsically grow sustainable products
        </h1>

        {/* Subheading / Description */}
        <p className="text-white text-base sm:text-lg md:text-xl mt-6 max-w-xl px-4">
          Understand the essence of the Quran and apply its wisdom in your daily
          life. Illuminate your path with this divine scripture.
        </p>
      </section>
    </div>
  );
};

export default Hero;
