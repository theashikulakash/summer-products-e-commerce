import React from 'react';
import products from '../data/products.json';

const PopularProduct = () => {
    const popularProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <section className="card rounded-3xl p-6">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#ff7401]">Popular Products</h2>
            <div className="grid gap-6 md:grid-cols-3 ">
                {popularProducts.map((product) => (
                    <article
                        key={product.id}
                        className="card bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <figure className="px-4 pt-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-xl object-cover h-48 w-full"
                            />
                        </figure>
                        <div className="card-body items-center text-center px-4 pb-6 pt-4">
                            <h3 className="card-title text-2xl font-bold text-[#ff7401]">
                                {product.name}
                            </h3>
                            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mt-2">
                                {product.brand}
                            </p>
                            <p className="mt-3 text-sm text-[#ff7401]/85">
                                {product.description}
                            </p>
                            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--primary)]/90">
                                <span className="rounded-full bg-[var(--accent)]/80 px-3 py-1 text-[#ff7401]">
                                    ${product.price}
                                </span>
                                <span className="rounded-full bg-[var(--accent)]/80 px-3 py-1 text-[#ff7401]">
                                    {product.rating} ★
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PopularProduct;