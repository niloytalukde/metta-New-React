import React from "react";
const Hero = () => {
  return (
    <div className="w-full">
      <section className=" mt-20 relative bg-[url('./assets/MettaDhamma.png')] bg-cover bg-left-bottom h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 text-center">
        {/* Optional Tagline or Badge */}
        <div className="mb-6 px-4 py-1 bg-white/10 border border-white/30 rounded-full text-sm text-white flex flex-wrap items-center justify-center gap-2.5 max-w-full">
          {/* Example badge: <span>New Release</span> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
