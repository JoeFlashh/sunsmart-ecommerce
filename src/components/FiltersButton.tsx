import { LuSettings2 } from "react-icons/lu";
import Button from "@mui/material/Button";

interface FiltersButtonProps {
  toggleDrawer: () => void;
}

function FiltersButton({ toggleDrawer }: FiltersButtonProps) {
  return (
    <Button
      disableRipple
      variant="text"
      sx={{
        textTransform: "none",
        fontSize: "1rem",
        color: "inherit",
        "&.Mui-focusVisible": {
          outline: "2px solid #333",
          outlineOffset: "2px",
        },
      }}
      onClick={toggleDrawer}
    >
      <LuSettings2 className="filter-icon" />
      Filters
    </Button>
  );
}

export default FiltersButton;
