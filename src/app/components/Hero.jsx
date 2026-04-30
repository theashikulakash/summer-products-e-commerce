import React from "react";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-center text-white py-20 flex items-center justify-center" // added 'relative'
      style={{
        backgroundImage: `url(${heroImage.src})`,
        minHeight: "520px",
      }}
    >
      {/* Content Center */}
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--secondary)]">PeakSummer</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Fresh Vibes, Hot Deals</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/90">
          Discover the best seasonal products and shop with confidence from our curated collection.
        </p>
      </div>

      {/* summer tips */}
      <div 
        id="marqee" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] max-w-10/12 rounded-3xl bg-yellow-400 px-4 py-4 text-center text-black font-bold shadow-xl border-2 border-white"
      >
        <p>🔥 Summer Care Tip: Stay hydrated and wear SPF 50! ☀️</p>
      </div>
    </section>
  );
}