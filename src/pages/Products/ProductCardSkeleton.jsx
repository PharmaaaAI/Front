const ProductCardSkeleton = () => (
  <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
    <div className="bg-gray-200 h-48 w-full animate-pulse"></div>
    <div className="p-4 flex flex-col flex-grow">
      <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mt-2 animate-pulse"></div>
      <div className="space-y-2 mt-3 flex-grow">
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-full mt-3 animate-pulse"></div>
      </div>
    </div>
  </div>
);

export default ProductCardSkeleton;
