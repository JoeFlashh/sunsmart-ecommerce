// ---------------------------------
// ---------------------------------
// ---------------------------------

interface Product {
  id: number;
  name: string;
  type: "mineral" | "chemical";
  spf: number;
  reefSafe: boolean;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "ReefGuard Mineral SPF 50",
    type: "mineral",
    spf: 50,
    reefSafe: true,
    price: 18.99,
    image: "src/assets/images/blue.png",
  },
  {
    id: 2,
    name: "SunBlaster Chemical SPF 30",
    type: "chemical",
    spf: 30,
    reefSafe: false,
    price: 12.49,
    image: "src/assets/images/blue.png",
  },
  {
    id: 3,
    name: "OceanSafe Mineral SPF 30",
    type: "mineral",
    spf: 30,
    reefSafe: true,
    price: 15.0,
    image: "src/assets/images/blue.png",
  },
  {
    id: 4,
    name: "WaveShield Chemical SPF 50",
    type: "chemical",
    spf: 50,
    reefSafe: true,
    price: 17.75,
    image: "src/assets/images/blue.png",
  },
  {
    id: 4,
    name: "WaveShield Chemical SPF 50",
    type: "chemical",
    spf: 50,
    reefSafe: true,
    price: 17.75,
    image: "src/assets/images/blue.png",
  },
  {
    id: 4,
    name: "WaveShield Chemical SPF 50",
    type: "chemical",
    spf: 50,
    reefSafe: true,
    price: 17.75,
    image: "src/assets/images/blue.png",
  },
  {
    id: 4,
    name: "WaveShield Chemical SPF 50",
    type: "chemical",
    spf: 50,
    reefSafe: true,
    price: 17.75,
    image: "src/assets/images/blue.png",
  },
];

function ProductList() {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="product-card">
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
      ))}
    </>
  );
}

export default ProductList;
