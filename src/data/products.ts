// default image

import blueImg from "../assets/images/blue.png";
import goldImg from "../assets/images/gold.png";
import grayImg from "../assets/images/gray.png";
import pinkImg from "../assets/images/pink.png";
import purpleImg from "../assets/images/purple.png";
import tealImg from "../assets/images/teal.png";
import whiteImg from "../assets/images/white.png";
import yellowImg from "../assets/images/yellow.png";

// hover image

import blueHoverImg from "../assets/images/blueHoverImg.png";
import goldHoverImg from "../assets/images/goldHoverImg.png";
import grayHoverImg from "../assets/images/grayHoverImg.png";
import pinkHoverImg from "../assets/images/pinkHoverImg.png";
import purpleHoverImg from "../assets/images/purpleHoverImg.png";
import tealHoverImg from "../assets/images/tealHoverImg.png";
import whiteHoverImg from "../assets/images/whiteHoverImg.png";
import yellowHoverImg from "../assets/images/yellowHoverImg.png";

interface Product {
  id: number;
  name: string;
  type: "mineral" | "chemical";
  spf: number;
  reefSafe: boolean;
  price: number;
  defaultImage: string;
  hoverImage: string;
  releaseDate: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sunny Splash Mineral SPF 50",
    type: "mineral",
    spf: 50,
    reefSafe: true,
    price: 18.99,
    defaultImage: yellowImg,
    hoverImage: yellowHoverImg,
    releaseDate: "2025-01-10",
  },
  {
    id: 2,
    name: "Wave Rider Chemical SPF 30",
    type: "chemical",
    spf: 30,
    reefSafe: false,
    price: 12.49,
    defaultImage: grayImg,
    hoverImage: grayHoverImg,
    releaseDate: "2024-12-15",
  },
  {
    id: 3,
    name: "Ocean Breeze Mineral SPF 30",
    type: "mineral",
    spf: 30,
    reefSafe: true,
    price: 15.0,

    defaultImage: whiteImg,
    hoverImage: whiteHoverImg,
    releaseDate: "2025-05-20",
  },
  {
    id: 4,
    name: "Sunset Glow Chemical SPF 50",
    type: "chemical",
    spf: 50,
    reefSafe: true,
    price: 17.75,
    defaultImage: purpleImg,
    hoverImage: purpleHoverImg,
    releaseDate: "2025-04-01",
  },
  {
    id: 5,
    name: "Beach Bliss Mineral SPF 45",
    type: "mineral",
    spf: 45,
    reefSafe: true,
    price: 19.99,
    defaultImage: tealImg,
    hoverImage: tealHoverImg,
    releaseDate: "2025-03-20",
  },
  {
    id: 6,
    name: "Tide Turner Chemical SPF 40",
    type: "chemical",
    spf: 40,
    reefSafe: false,
    price: 14.5,
    defaultImage: pinkImg,
    hoverImage: pinkHoverImg,
    releaseDate: "2023-11-30",
  },
  {
    id: 7,
    name: "Coral Calm Mineral SPF 30",
    type: "mineral",
    spf: 30,
    reefSafe: true,
    price: 16.25,
    defaultImage: blueImg,
    hoverImage: blueHoverImg,
    releaseDate: "2025-02-05",
  },
  {
    id: 8,
    name: "Surf Shine Chemical SPF 35",
    type: "chemical",
    spf: 35,
    reefSafe: false,
    price: 13.75,
    defaultImage: goldImg,
    hoverImage: goldHoverImg,
    releaseDate: "2025-05-28",
  },
];

export default products;
