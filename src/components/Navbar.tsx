// import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar-outer-container">
      <nav className="navbar-inner-container">
        <Link to="/">
          <p className="sunsmart-title">Sunsmart</p>
        </Link>
        <div>
          <Link to="/cart" className="shopping-bag">
            {/* <AiOutlineShoppingCart /> */}
            <HiOutlineShoppingBag />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
