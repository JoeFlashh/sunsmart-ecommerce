import ProductCard from "./ProductCard";
// import products from "../data/products";
import type { Product } from "../data/products";

interface ProductListProps {
  products: Product[];
  newestProductIds: number[];
}

function ProductList({ products, newestProductIds }: ProductListProps) {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isNew={newestProductIds.includes(product.id)}
        />
      ))}
    </>
  );
}

export default ProductList;
