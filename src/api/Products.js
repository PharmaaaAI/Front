const API_BASE_URL = "https://back-phi-jet.vercel.app/api";

export const fetchProducts = async ({ queryKey }) => {
  const [
    _key,
    {
      currentPage,
      itemsPerPage,
      debouncedSearchTerm,
      minPrice,
      maxPrice,
      category,
    },
  ] = queryKey;

  const params = new URLSearchParams();
  params.append("page", currentPage);
  params.append("limit", itemsPerPage);
  if (debouncedSearchTerm) params.append("description", debouncedSearchTerm);
  if (minPrice) params.append("minPrice", minPrice);
  if (maxPrice) params.append("maxPrice", maxPrice);
  if (category) params.append("category", category);

  const response = await fetch(`${API_BASE_URL}/products?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export async function getProduct(id) {
  const url = `${API_BASE_URL}/products/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
}

export async function getRelatedProducts(product) {
  const url = `${API_BASE_URL}/products?category=${product.category}&sample=3&exclude=${product._id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
}
