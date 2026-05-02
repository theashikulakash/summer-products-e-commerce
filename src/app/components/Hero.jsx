import React from "react";
import heroImage from "../assets/hero.png";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.jpg";
import Marquee from "react-fast-marquee";
import SummerTips from "../data/summertips.json";

export default function Hero() {
    return (
        <section
            className="relative w-full bg-cover bg-center text-white py-20 flex items-center justify-center" // added 'relative'
            style={{
                backgroundImage: `url(${heroImage.src})`,
                minHeight: "520px",
            }}
        >
            {/* Content Center
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--secondary)]">PeakSummer</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Fresh Vibes, Hot Deals</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/90">
          Discover the best seasonal products and shop with confidence from our curated collection.
        </p>
      </div> */}

            {/* summer tips */}
            <div
                id="marquee"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] rounded-3xl bg-sky-400 px-4 py-4 text-center text-black font-bold shadow-xl border-2 border-white flex items-center"
            >
                <p className="mr-2">Top Brands</p>
                <span className="flex flex-row gap-3 mr-2">
                    
                    <div className="card h-[20px] justify-center bg-white rounded-2xl">
                        <a href="/"><img src={brand1.src} className="h-[20px]" alt="brand1" /></a>
                    </div>
                    <div className="card h-[20px] justify-center bg-white rounded-2xl">
                        <a href="/"><img src={brand2.src} className="h-[20px]" height="20px" alt="brand2" /></a>
                    </div>
                    <div className="card h-[20px] justify-center bg-white rounded-2xl">
                        <a href="/"><img src={brand3.src} className="h-[20px]" height="20px" alt="brand3" /></a>
                    </div>
                </span>
                <Marquee className="flex-1 px-4" pauseOnHover={true} gradient={false}>
                    {SummerTips.map((tip) => (
                        <span key={tip.id} className="mx-6 whitespace-nowrap cursor-pointer">
                            {tip.tip}
                        </span>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}