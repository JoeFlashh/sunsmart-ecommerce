interface Product {
  id: number;
  name: string;
  type: "mineral" | "chemical";
  spf: number;
  reefSafe: boolean;
  price: number;
  image: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <div className="product-card">
        <div className="product-card-image-container">
          <img src={product.image} alt="product image" />
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
