import React from "react";
// import Image from "next/image";
import products from "../data/products.json";

export default function ProductBox() {
  return (
    <section className=" p-6 ">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#ff7401]">All Products</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="card bg-white rounded-2xl border border-[var(--border)] shadow-xl overflow-hidden"
          >
            <figure className="px-4 pt-4">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl object-cover h-52 w-full"
              />
            </figure>
            <div className="card-body items-center text-center px-4 pb-6 pt-4">
              <h3 className="card-title text-2xl font-bold text-[#ff7401]">
                {product.name}
              </h3>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-600/80 mt-2">
                {product.brand}
              </p>
              <p className="mt-3 text-sm text-[#ff7401]/75">{product.description}</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--primary)]/90">
                <span className="rounded-full bg-[var(--accent)]/80 px-3 py-1 text-[#ff7401]">
                  ${product.price}
                </span>
                <span className="rounded-full bg-[var(--accent)]/80 px-3 py-1 text-[#ff7401]">
                  {product.rating} ★
                </span>
                <span className="rounded-full bg-[var(--accent)]/80 px-3 py-1 text-[#ff7401]">
                  {product.stock} in stock
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
