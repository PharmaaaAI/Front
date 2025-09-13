import React from "react";
import { Link } from "react-router";

const RecommendedProduct = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden group flex flex-col relative mb-4">
      <div className="p-4 flex flex-col flex-grow gap-2">
        <Link to={`/product/${product._id}`}>
          <h3 className="text-md mt-2 font-semibold text-gray-800 truncate">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 leading-relaxed max-w-96">
          {product.description.length > 100
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </p>

        <div className="mt-auto">
          <p className="text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProduct;
