import { useState } from "react";
import FiltersAndSort from "../components/FiltersAndSort";
import FiltersDrawer from "../components/FiltersDrawer";
import HeroBanner from "../components/HeroBanner";
import ProductList from "../components/ProductList";

function HomePage() {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer((prev) => !prev);
  };

  return (
    <>
      <HeroBanner />
      <div className="main-content-container">
        <section className="filters-container">
          <FiltersAndSort toggleDrawer={toggleDrawer} />
          <FiltersDrawer isOpen={drawer} onClose={toggleDrawer} />
        </section>
        <section className="products-container">
          <ProductList />
        </section>
      </div>
    </>
  );
}

export default HomePage;
