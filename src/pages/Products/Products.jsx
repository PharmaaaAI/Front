import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCard from "./ProductCard";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router";
import FilterSidebar from "../../components/FilterSidebar";

const Products = () => {
  const { category } = useParams();

  const {
    products,
    isLoading,
    isError,
    error,
    filters,
    handleFilterChange,
    clearFilters,
    pagination,
  } = useProducts({ category });

  const pageTitle = category
    ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
    : "Our Products";

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            {pageTitle}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Discover our medicine and healthcare products tailored to your needs.
          </p>
        </header>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <FilterSidebar
            filters={filters}
            handleFilterChange={handleFilterChange}
            clearFilters={clearFilters}
            category={category}
          />

          <main className="lg:col-span-9 mt-8 lg:mt-0">
            {isError && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <p className="text-red-600">Error: {error.message}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading
                ? Array.from({ length: 9 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                  ))
                : products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
            </div>

            {!isLoading && products.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-800">
                    No Products Found
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your search or filters.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}

            {products.length > 0 && pagination.totalPages > 1 && (
              <div className="flex justify-center items-center mt-8">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={pagination.handlePreviousPage}
                    disabled={pagination.currentPage === 1 || isLoading}
                    className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-700 cursor-pointer"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                    <span className="ml-1">Previous</span>
                  </button>

                  <span className="px-4 py-2 text-sm text-gray-700">
                    Page {pagination.currentPage}
                  </span>

                  <button
                    onClick={pagination.handleNextPage}
                    disabled={
                      pagination.isPreviousData ||
                      pagination.currentPage >= pagination.totalPages ||
                      isLoading
                    }
                    className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-700 cursor-pointer"
                  >
                    <span className="mr-1">Next</span>
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </nav>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
export default Products;
