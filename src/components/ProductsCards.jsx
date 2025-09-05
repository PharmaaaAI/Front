import React from 'react'
import { Card } from "flowbite-react";

import blackretinol from "../assets/Black Tea Anti-Aging Eye Cream with retinol-alternative BT Matrix™.webp";
import Kombucha from "../assets/Kombucha Antioxidant Facial Treatment Essence.webp";
import soy from  "../assets/Soy Face Cleanser.webp" ;
import rose from "../assets/Rose & Hyaluronic Acid Deep Hydration Moisturizer.webp";

const products = [
 
  // Add 4 more products here with different details
  {
    id: 1,
    name: "Black Tea Anti-Aging Eye Cream with retinol-alternative BT Matrix™",
    price: "$49",
    rating: 4.5,
    image: blackretinol,
    alt: "Description of product 1"
  },
  {
    id: 2,
    name: "Kombucha Antioxidant Facial Treatment Essence",
    price: "$69",
    rating: 4.8,
    image: Kombucha ,
    alt: "Description of product 2"
  },
  {
    id: 3,
    name: "Soy Face Cleanser",
    price: "$79",
    rating: 4.2,
    image:soy ,
    alt: "Description of product 3"
  },
  {
    id: 4,
    name: "Rose & Hyaluronic Acid Deep Hydration Moisturizer",
    price: "$89",
    rating: 4.9,
    image: rose ,
    alt: "Description of product 4"
  }
];

const ProductCard = ({ product }) => {
  return (
    <>
     
    <Card className="max-w-sm" imgAlt={product.alt} imgSrc={product.image}>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {product.rating}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
    </>
  );
};

const ProductsCards = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Premium Products, Perfectly Matched
          </h2>
          <p className="text-xl text-gray-600">
            Our curated collection features only the best products from trusted brands
          </p>
        </div>
     </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  )
}

export default ProductsCards