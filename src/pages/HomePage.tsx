import FiltersAndSort from "../components/FiltersAndSort";
import FiltersDrawer from "../components/FiltersDrawer";
import HeroBanner from "../components/HeroBanner";
import ProductList from "../components/ProductList";

function HomePage() {
  return (
    <>
      <HeroBanner />
      <div className="main-content-container">
        <FiltersDrawer />
        <div className="main-content-container-inner">
          <section className="filters-container">
            <FiltersAndSort />
          </section>
          <section className="products-container">
            <ProductList />
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
