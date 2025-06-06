import ProductCard from "./ProductCard";

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
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
