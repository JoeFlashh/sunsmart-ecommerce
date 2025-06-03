import { LuSettings2 } from "react-icons/lu";
import { MdClose } from "react-icons/md";

function FiltersDrawer() {
  return (
    <div className="filters-drawer">
      <div className="filters-drawer-header">
        <div className="filters-drawer-header-flex">
          <p>
            <LuSettings2 className="drawer-icon" />
            Filters
          </p>
          <button className="drawer-button">
            <MdClose />
          </button>
        </div>
      </div>
      {/* First filter group */}
      <div className="filter-group">
        <h4>Type</h4>
        <label>
          <input type="checkbox" name="type" value="mineral" />
          <span>Mineral</span>
        </label>
        <label>
          <input type="checkbox" name="type" value="chemical" />
          <span>Chemical</span>
        </label>
      </div>
      {/* Second filter group */}
      <div className="filter-group">
        <h4>SPF</h4>
        <label>
          <input type="checkbox" name="spf" value="30" />
          <span>SPF 30</span>
        </label>
        <label>
          <input type="checkbox" name="spf" value="50" />
          <span>SPF 50+</span>
        </label>
      </div>
      {/* Thirid filter group */}
      <div className="filter-group grid-start">
        <h4>Reef Safe</h4>
        <label>
          <input type="checkbox" name="reef" value="yes" />
          <span>Reef Safe</span>
        </label>
      </div>
    </div>
  );
}

export default FiltersDrawer;
