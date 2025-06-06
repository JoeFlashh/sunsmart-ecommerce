import { LuSettings2 } from "react-icons/lu";

interface FiltersAndSortProps {
  toggleDrawer: () => void;
  sort: "newest" | "low-to-high" | "high-to-low";
  setSort: React.Dispatch<
    React.SetStateAction<"newest" | "low-to-high" | "high-to-low">
  >;
}

function FiltersAndSort({ toggleDrawer, sort, setSort }: FiltersAndSortProps) {
  return (
    <>
      {/* Type filter */}
      <button className="filter-button" onClick={toggleDrawer}>
        <LuSettings2 className="filter-icon" />
        Filters
      </button>
      {/* Sort button */}
      <div className="sort-select-container">
        <label htmlFor="sort-select">
          <p>Sort By</p>
        </label>
        <select
          id="sort-select"
          className="sort-select-button"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value as "newest" | "low-to-high" | "high-to-low")
          }
        >
          <option value="newest">Newest</option>
          <option value="low-to-high">Price: $ - $$</option>
          <option value="high-to-low">Price: $$ - $</option>
        </select>
      </div>
    </>
  );
}

export default FiltersAndSort;
