import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const isOutOfStock = product.quantity === 0;

  return (
    <div className="border rounded-lg overflow-hidden group flex flex-col relative">
      {isOutOfStock && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          Out of Stock
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow gap-2">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-96 h-48 object-contain mx-auto"
          />
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
          <button
            disabled={isOutOfStock}
            className="w-full bg-gray-100 text-gray-800 font-semibold py-2 px-4 mt-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer justify-self-end disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            {isOutOfStock ? "Out of Stock" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
