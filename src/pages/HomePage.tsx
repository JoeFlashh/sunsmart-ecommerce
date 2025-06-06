import { useState } from "react";
import FiltersAndSort from "../components/FiltersAndSort";
import FiltersDrawer from "../components/FiltersDrawer";
import HeroBanner from "../components/HeroBanner";
import ProductList from "../components/ProductList";
import products from "../data/products";

function HomePage() {
  const [drawer, setDrawer] = useState(false);
  const [sort, setSort] = useState<"newest" | "low-to-high" | "high-to-low">(
    "newest"
  );

  const toggleDrawer = () => {
    setDrawer((prev) => !prev);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "newest") {
      return (
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      );
    }
    if (sort === "low-to-high") {
      return a.price - b.price;
    }
    if (sort === "high-to-low") {
      return b.price - a.price;
    }
    return 0;
  });

  // const newestProducts = [...products].sort(
  //   (a, b) =>
  //     new Date(b.releaseDate).getTime() -
  //     new Date(a.releaseDate)
  //       .getTime()
  //       .slice(0, 2)
  //       .map((product) => product.id)
  // );

  const newestProducts = [...products]
    .sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    )
    .slice(0, 2)
    .map((product) => product.id);

  return (
    <>
      <HeroBanner />
      <div className="main-content-container">
        <section className="filters-container">
          <FiltersAndSort
            sort={sort}
            setSort={setSort}
            toggleDrawer={toggleDrawer}
          />
          <FiltersDrawer isOpen={drawer} onClose={toggleDrawer} />
        </section>
        <section className="products-container">
          <ProductList
            products={sortedProducts}
            newestProductIds={newestProducts}
          />
        </section>
      </div>
    </>
  );
}

export default HomePage;
