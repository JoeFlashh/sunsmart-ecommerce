import { FormControl, Select, MenuItem } from "@mui/material";

interface SortSelectProps {
  sort: "newest" | "low-to-high" | "high-to-low";
  setSort: React.Dispatch<
    React.SetStateAction<"newest" | "low-to-high" | "high-to-low">
  >;
}

function SortSelect({ sort, setSort }: SortSelectProps) {
  return (
    <div className="sort-select-container">
      <label htmlFor="sort-select">
        <p>Sort By</p>
      </label>
      <FormControl size="small" sx={{ minWidth: 180 }}>
        <Select
          id="sort-select"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value as "newest" | "low-to-high" | "high-to-low")
          }
          sx={{
            fontSize: "0.875rem",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#333",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#333",
              boxShadow: "none",
            },
            outline: "none",
            boxShadow: "none",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#333",
            },
            "& .MuiSelect-icon": {
              color: "#333",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                boxShadow: "none",
                border: "none",
              },
            },
          }}
        >
          <MenuItem sx={{ fontSize: ".875rem" }} value="newest">
            Newest
          </MenuItem>
          <MenuItem sx={{ fontSize: ".875rem" }} value="low-to-high">
            Price: $ - $$
          </MenuItem>
          <MenuItem sx={{ fontSize: ".875rem" }} value="high-to-low">
            Price: $$ - $
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SortSelect;
