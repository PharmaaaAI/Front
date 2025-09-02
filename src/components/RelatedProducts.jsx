import { useQuery } from "@tanstack/react-query";
import { getRelatedProducts } from "../api/Products";
import ProductCard from "../pages/Products/ProductCard";

const RelatedProducts = ({ product }) => {
  const { data: relatedProducts = [] } = useQuery({
    queryKey: ["products", product],
    queryFn: () => getRelatedProducts(product),
    select: (apiResponse) => apiResponse.data,
    enabled: !!product,
  });
  if (relatedProducts.length) {
    return (
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Related Products
        </h2>
        <div className="">
          <div className="flex flex-wrap gap-8 justify-center">
            {relatedProducts.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default RelatedProducts;
