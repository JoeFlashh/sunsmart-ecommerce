import type { Product } from "../data/products";
import Button from "@mui/material/Button";

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
          <Button
            disableRipple
            variant="outlined"
            sx={{
              textTransform: "none",
              fontSize: "1rem",
              color: "inherit",
              width: "100%",
              backgroundColor: "transparent",
              border: "1px solid #333",
              "&:hover": {
                backgroundColor: "#333",
                color: "#fff",
              },
              "&.Mui-focusVisible": {
                outline: "2px solid #333",
                outlineOffset: "2px",
              },
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
