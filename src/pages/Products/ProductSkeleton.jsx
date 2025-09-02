const ProductSkeleton = () => (
  <div className="container mx-auto px-6 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="animate-pulse">
        <div className="h-96 bg-gray-200 rounded-lg"></div>
        <div className="flex gap-4 mt-4">
          <div className="h-24 w-24 bg-gray-200 rounded-lg"></div>
          <div className="h-24 w-24 bg-gray-200 rounded-lg"></div>
          <div className="h-24 w-24 bg-gray-200 rounded-lg"></div>
          <div className="h-24 w-24 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
      <div className="space-y-4 animate-pulse">
        <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
        <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-10 w-1/2 bg-gray-200 rounded"></div>
        <div className="h-20 w-full bg-gray-200 rounded"></div>
        <div className="h-12 w-full bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
);

export default ProductSkeleton;
