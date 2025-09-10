import { useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

const FilterSidebar = ({
  filters,
  handleFilterChange,
  clearFilters,
  category,
}) => {
  const [showFilters, setShowFilters] = useState(true);
  const categories = useSelector((state) => state.categories);


  return (
    <aside className="lg:col-span-3">
      <div className="bg-white rounded-xl shadow-md p-6 sticky top-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <FiFilter className="mr-2" />
            Filters
          </h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            {showFilters ? "Hide" : "Show"}
          </button>
        </div>

        <div
          className={`space-y-6 ${
            showFilters ? "block" : "hidden lg:block"
          }`}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Products
            </label>
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
              <input
                type="text"
                name="searchTerm"
                value={filters.searchTerm}
                onChange={handleFilterChange}
                placeholder="e.g., facial cleanser..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                placeholder="Min $"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                placeholder="Max $"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              value={category || filters.category}
              onChange={handleFilterChange}
              disabled={!!category}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={clearFilters}
            className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
