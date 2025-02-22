import React from "react";
import Link from "next/link";
import { Product } from "../types";

// import styles from '../styles/custom.modules.css'

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log('product',product)
  const truncateTitle = (title: string, maxWords: number) => {
    const words = title.split(" ");
    if (words.length <= maxWords) {
      return title;
    } else {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
  };

  return (
    <Link
      href={`/product/${product.id}`}
      passHref
      className="bg-white cursor-pointer text-black rounded-xl border border-gray-100 shadow hover:shadow-2xl transition-transform hover:scale-105"
    >
      <div className="body-font p-4 text-grey transition-transform">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 min-w-full flex items-start justify-center flex-col border-slate-950">

              <a className="relative max-h-44 rounded overflow-hidden flex justify-center items-center min-w-full">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={product.image}
                ></img>
              </a>

              <div className="mt-4 flex flex-col gap-1">

                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>

                <h2 className="text-gray-900 title-font text-base font-medium">
                  {truncateTitle(product.title, 4)}
                </h2>

                <div className="flex flex-row">
                  <button className="flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-xl">
                  ${product.price}
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;