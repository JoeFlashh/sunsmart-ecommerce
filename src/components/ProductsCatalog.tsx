import { useState, useEffect, useCallback } from "react";
import { LuSettings2 } from "react-icons/lu";

import type { Product } from "../data/products";
import ProductCard from "./ProductCard";
import FiltersDrawer from "./FiltersDrawer";

interface ProductsCatalogProps {
  products: Product[];
}

function ProductsCatalog({ products }: ProductsCatalogProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // State for filters currently selected in the drawer (temporary)
  const [tempSelectedFilters, setTempSelectedFilters] = useState<{
    [key: string]: string[];
  }>({});
  // State for filters that are actually applied to the product list
  const [appliedFilters, setAppliedFilters] = useState<{
    [key: string]: string[];
  }>({});
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Initialize tempSelectedFilters and appliedFilters with empty objects on mount
  // This ensures a clean state on initial load
  useEffect(() => {
    setTempSelectedFilters({});
    setAppliedFilters({});
  }, []);

  const openDrawer = () => {
    // When opening, sync temporary filters with the currently applied ones
    setTempSelectedFilters(appliedFilters);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Effect to handle body scrolling when the drawer is open/closed
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "unset"; // Enable scrolling
    }
    // Cleanup function to re-enable scrolling if the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  // Function to update tempSelectedFilters based on checkbox changes in the drawer
  const handleTempFilterChange = (
    groupKey: string,
    value: string,
    isChecked: boolean
  ) => {
    setTempSelectedFilters((prevFilters) => {
      const currentGroupSelections = prevFilters[groupKey] || [];
      if (isChecked) {
        // Add the value if it's not already there
        return {
          ...prevFilters,
          [groupKey]: [...new Set([...currentGroupSelections, value])], // Using Set for uniqueness
        };
      } else {
        // Remove the value
        return {
          ...prevFilters,
          [groupKey]: currentGroupSelections.filter((item) => item !== value),
        };
      }
    });
  };

  // Clears both temporary and applied filters, then closes the drawer
  const handleClearFilters = () => {
    setTempSelectedFilters({}); // Clear temporary filters in the drawer
    setAppliedFilters({}); // Clear applied filters immediately
  };

  // Applies the temporary filters to the main product list and closes the drawer
  const applyFilters = useCallback(() => {
    setAppliedFilters(tempSelectedFilters);
    closeDrawer(); // Close the drawer after applying filters
  }, [tempSelectedFilters]); // Only re-create if tempSelectedFilters changes

  // Core filtering logic: runs when original products or applied filters change
  useEffect(() => {
    let currentFilteredProducts = [...products];

    // Determine if there are any active filters to apply
    const hasActiveAppliedFilters = Object.values(appliedFilters).some(
      (arr) => arr.length > 0
    );

    if (hasActiveAppliedFilters) {
      currentFilteredProducts = products.filter((product) => {
        // For each product, check if it satisfies ALL currently applied filter groups
        return Object.entries(appliedFilters).every(([groupKey, values]) => {
          // If no values are selected for a group, that group doesn't filter anything
          if (values.length === 0) {
            return true;
          }

          // Check the product's property against the selected filter values
          switch (groupKey) {
            case "type":
              return values.some((val) => product.type === val);
            case "spf":
              // IMPORTANT: Convert filter value string to number for comparison with product.spf
              return values.some((val) => product.spf === parseInt(val, 10));
            case "reef":
              // 'yes' maps to true, anything else (like no 'yes') maps to false
              return values.some((val) => product.reefSafe === (val === "yes"));
            default:
              // If a filter group key doesn't match, don't filter by it
              return true;
          }
        });
      });
    }

    setFilteredProducts(currentFilteredProducts);
  }, [products, appliedFilters]); // Dependencies: re-run when original products or applied filters change

  const numberOfProducts = filteredProducts.length;

  // Check if there are any selected filters in the drawer (temporary ones)
  const hasActiveFiltersInDrawer = Object.values(tempSelectedFilters).some(
    (arr) => arr.length > 0
  );

  return (
    <div className="products-catalog-container">
      <div className="filters-container">
        <button onClick={openDrawer} className="is-drawer-open-button">
          <LuSettings2 className="filter-icon" />
          Filters
        </button>
        <p>{numberOfProducts} Total</p>
        <FiltersDrawer
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          // Pass temporary filters to the drawer so it reflects current selections
          selectedFilters={tempSelectedFilters}
          hasActiveFilters={hasActiveFiltersInDrawer}
          // Drawer updates temporary filters
          onFilterChange={handleTempFilterChange}
          onClearFilters={handleClearFilters}
          // Pass applyFilters to the drawer's "Apply" button
          onApplyFilters={applyFilters}
        />
      </div>
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={closeDrawer}></div>
      )}
      <div className="products-catalog-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsCatalog;
