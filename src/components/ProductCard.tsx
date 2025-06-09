import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  isNew: boolean;
}

function ProductCard({ product, isNew }: ProductCardProps) {
  return (
    <>
      <div className="product-card">
        <div className="product-card-image-container">
          <img
            src={product.defaultImage}
            alt={product.name}
            className="default-image"
          />
          <img
            src={product.hoverImage}
            alt={product.name}
            className="hover-image"
          />
          {isNew && (
            <div className="sort-badge-isNew">
              <p>New</p>
            </div>
          )}
        </div>
        <div className="product-card-info-container">
          <h3>{product.name}</h3>
          <p>Reef Safe: {product.reefSafe ? "Yes" : "No"}</p>
          <p>${product.price.toFixed(2)}</p>
          <button className="product-card-button">Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
