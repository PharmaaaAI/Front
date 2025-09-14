import React, { useState, useEffect, useContext } from "react";
import React, { useState, useEffect, useContext } from "react";

import {
  FiChevronRight,
  FiMinus,
  FiPlus,
  FiTruck,
  FiShield,
} from "react-icons/fi";

import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router";
import ProductSkeleton from "./ProductSkeleton";
import { getProduct } from "../../api/Products";
import ProductImageGallery from "../../components/ProductImageGallery";
import RelatedProducts from "../../components/RelatedProducts";

import { useDispatch, useSelector } from "react-redux";
import updateProductFetch from "../../utils/updateProductFetch";
import {
  addToCart,
  removeFromCart,
  increaseItemInCart,
  decreaseItemInCart,
} from "../../rtk/slices/items-slice";
import updateProductFetch from "../../utils/updateProductFetch";
import {
  addToCart,
  removeFromCart,
  increaseItemInCart,
  decreaseItemInCart,
} from "../../rtk/slices/items-slice";
import { Trash2, Minus, Plus } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../context/AuthContext.jsx";

const ProductDetails = () => {
  let params = useParams();
  const { id } = params;
  const { token } = useContext(AuthContext);
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProduct(id),
    select: (apiResponse) => apiResponse.data,
  });

  const { token } = useContext(AuthContext);

  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setQuantity(1);
  }, [id]);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const isOutOfStock = product?.quantity === 0;

  const items = useSelector((state) => state.items);
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const item = items.find((product) => product.productID === id);
  const item = items.find((product) => product.productID === id);

  console.log("quantity => ", quantity);
  console.log("quantity => ", quantity);

  if (isLoading) {
    return (
      <div className="container mx-auto px-6 py-12">
        <ProductSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-6 py-12">Error loading product.</div>
    );
  }

  const inc = (id) => {
    dispatch(increaseItemInCart(id));
    updateProductFetch("increaseProduct", id);
  };
  const dec = (id) => {
    dispatch(decreaseItemInCart(id));
    updateProductFetch("decreaseProduct", id);
  };
  const remove = (id) => {
    dispatch(removeFromCart(id));
    updateProductFetch("removeProduct", id);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex products-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-800">
            Home
          </Link>
          <FiChevronRight className="mx-2" />
          <Link
            to={`/products/${product.category}`}
            className="hover:text-gray-800"
          >
            {product.category}
          </Link>
          <FiChevronRight className="mx-2" />
          <span className="text-gray-800">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />

          <div className="flex flex-col">
            <Link
              to={`/products/${product.category}`}
              className="text-blue-500 uppercase text-sm font-semibold hover:underline"
            >
              {product.category}
            </Link>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
              {product.name}
            </h1>
            <div className="flex products-baseline space-x-3 mt-4">
              <p className="text-3xl font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
              <p
                className={`font-semibold ${
                  isOutOfStock ? "text-red-500" : "text-green-600"
                }`}
              >
                {isOutOfStock ? "Out of Stock" : "In Stock"}
              </p>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>

            {item ? (
            {item ? (
              // <div className="flex items-center justify-between border rounded-full overflow-hidden shadow-inner">
              <div className="flex items-center justify-between border rounded-full w-3xs overflow-hidden shadow-inner">
                <button
                  aria-label={`Decrease quantity of ${product.name}`}
                  onClick={() => {
                    item.quantity > 1 ? dec(product._id) : remove(product._id);
                  }}
                  className={`px-4 py-2 cursor-pointer
                <button
                  aria-label={`Decrease quantity of ${product.name}`}
                  onClick={() => {
                    item.quantity > 1 ? dec(product._id) : remove(product._id);
                  }}
                  className={`px-4 py-2 cursor-pointer
                  
                ${
                  item.quantity > 1
                    ? "bg-gray-100 hover:bg-gray-200"
                    : "bg-red-500 hover:bg-red-600"
                }
                ${
                  item.quantity > 1
                    ? "bg-gray-100 hover:bg-gray-200"
                    : "bg-red-500 hover:bg-red-600"
                }
                  `}
                >
                  {item.quantity > 1 ? (
                    <Minus className="w-3.5" size={20} />
                  ) : (
                    <Trash2 className="w-3.5" size={20} />
                  )}
                </button>
                <span className="px-3 text-sm tabular-nums">
                  {item.quantity}
                </span>
                <button
                  aria-label={`Increase quantity of ${product.name}`}
                  onClick={() => {
                    inc(product._id);
                  }}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 cursor-pointer"
                >
                  <Plus className="w-3.5" size={20} />
                </button>
              </div>
            ) : (
                >
                  {item.quantity > 1 ? (
                    <Minus className="w-3.5" size={20} />
                  ) : (
                    <Trash2 className="w-3.5" size={20} />
                  )}
                </button>
                <span className="px-3 text-sm tabular-nums">
                  {item.quantity}
                </span>
                <button
                  aria-label={`Increase quantity of ${product.name}`}
                  onClick={() => {
                    inc(product._id);
                  }}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 cursor-pointer"
                >
                  <Plus className="w-3.5" size={20} />
                </button>
              </div>
            ) : (
              <div className="flex products-center mt-6">
                <div className="flex border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={isOutOfStock}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiMinus />
                  </button>
                  <span className="px-5 py-2">
                    {isOutOfStock ? 0 : quantity}
                  </span>
                  <span className="px-5 py-2">
                    {isOutOfStock ? 0 : quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={isOutOfStock}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiPlus />
                  </button>
                </div>
                <button
                  onClick={() => {
                    const decodedToken = jwtDecode(token);
                    dispatch(addToCart({ id: product._id, quantity }));
                    updateProductFetch(
                      "addProduct",
                      product._id,
                      token,
                      decodedToken.userId
                    );
                  }}
                  disabled={isOutOfStock}
                  className="flex-1 ml-4 bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {isOutOfStock
                    ? "Out of Stock"
                    : item
                    ? "Product Already In Cart"
                    : "Add to cart"}
                  {isOutOfStock
                    ? "Out of Stock"
                    : item
                    ? "Product Already In Cart"
                    : "Add to cart"}
                </button>
              </div>
            )}
            )}

            <div className="border-t mt-6 pt-6 space-y-3 text-sm text-gray-600">
              <p className="flex products-center">
                <FiTruck className="mr-3 text-gray-500" /> Free Shipping &
                Returns on this product
              </p>
              <p className="flex products-center">
                <FiShield className="mr-3 text-gray-500" /> Money-back Guarantee
              </p>
            </div>
          </div>
        </div>

        <RelatedProducts product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
