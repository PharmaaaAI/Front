import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useScrollToTop from "./useScrollToTop";
import { fetchProducts } from "../api/Products";

const useProducts = ({ category: initialCategory = null } = {}) => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    minPrice: "",
    maxPrice: "",
    category: "",
  });
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const scrollToTop = useScrollToTop();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(filters.searchTerm);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(handler);
  }, [filters.searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters.minPrice, filters.maxPrice, filters.category, initialCategory]);

  const {
    data: result,
    isLoading,
    isError,
    error,
    isPreviousData,
  } = useQuery({
    queryKey: [
      "products",
      {
        currentPage,
        itemsPerPage,
        debouncedSearchTerm,
        ...filters,
        category: initialCategory || filters.category,
      },
    ],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  useEffect(() => {
    scrollToTop();
  }, [currentPage, result, scrollToTop]);

  const products = result?.data || [];
  const totalPages =
    products.length < itemsPerPage ? currentPage : currentPage + 1;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({ searchTerm: "", minPrice: "", maxPrice: "", category: "" });
  };

  return {
    products,
    isLoading,
    isError,
    error,
    filters,
    handleFilterChange,
    clearFilters,
    pagination: {
      currentPage,
      totalPages,
      isPreviousData,
      handlePreviousPage: () => setCurrentPage((p) => Math.max(1, p - 1)),
      handleNextPage: () => {
        if (!isPreviousData && currentPage < totalPages) {
          setCurrentPage((p) => p + 1);
        }
      },
    },
  };
};

export default useProducts;
