import { LuSettings2 } from "react-icons/lu";

function FiltersAndSort() {
  return (
    <>
      {/* Type filter */}
      <button className="filter-button">
        <LuSettings2 className="filter-icon" />
        Filters
      </button>

      {/* Sort button */}
      <div className="sort-select-container">
        <label htmlFor="sort-select">
          <p>Sort By</p>
        </label>
        <select id="sort-select" className="sort-select-button">
          <option value="newest">Newest</option>
          <option value="low-to-high">Price: $ - $$</option>
          <option value="high-to-low">Price: $$ - $</option>
        </select>
      </div>
    </>
  );
}

export default FiltersAndSort;
