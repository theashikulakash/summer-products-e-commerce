import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">SummerShop</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Fresh fruits, fast delivery</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-cyan-100">
          Discover the best seasonal jackfruit products and shop with confidence from our curated collection.
        </p>
      </div>
    </section>
  );
}
