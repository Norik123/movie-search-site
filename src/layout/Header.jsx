import React, { useCallback, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AllUseState } from "../context/AllUseState";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../fragments/HeaderFragments";

export default function Header() {
  const { menu, setMenu } = useContext(AllUseState);
  const { genres, setGenres } = useContext(AllUseState);
  const { setPageNumber } = useContext(AllUseState);
  const { search, setSearch } = useContext(AllUseState);
  const { setMenuOnOff } = useContext(AllUseState);
  const { setSearchOnOff } = useContext(AllUseState);
  const { setGenresOnOff } = useContext(AllUseState);

  const handleMenu = useCallback(
    (event) => {
      setMenuOnOff(true);
      setSearchOnOff(false);
      setGenresOnOff(false);
      setSearch("");
      setGenres("");
      setMenu(event.target.value);
      setPageNumber(1);
    },
    [
      setMenu,
      setPageNumber,
      setSearch,
      setSearchOnOff,
      setMenuOnOff,
      setGenresOnOff,
      setGenres,
    ]
  );

  const handleGenres = useCallback(
    (event) => {
      setGenresOnOff(true);
      setMenuOnOff(false);
      setSearchOnOff(false);
      setSearch("");
      setMenu("");
      setGenres(event.target.value);
      setPageNumber(1);
    },
    [
      setSearch,
      setPageNumber,
      setMenu,
      setMenuOnOff,
      setSearchOnOff,
      setGenres,
      setGenresOnOff,
    ]
  );

  const handleSearch = useCallback(
    (event) => {
      setSearchOnOff(true);
      setMenuOnOff(false);
      setGenresOnOff(false);
      setMenu("");
      setGenres("");
      setSearch(String(event.target.value));
      setPageNumber(1);
    },
    [
      setSearch,
      setPageNumber,
      setMenu,
      setMenuOnOff,
      setSearchOnOff,
      setGenres,
      setGenresOnOff,
    ]
  );

  return (
    <header id="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <FormControl sx={{ m: 2, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Menu
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={menu}
                onChange={handleMenu}
                autoWidth
                label="Menu"
              >
                <MenuItem value={"popular"}>Popular</MenuItem>
                <MenuItem value={"top_rated"}>Top Rated</MenuItem>
                <MenuItem value={"upcoming"}>Upcoming</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 2, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Genres
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={genres}
                onChange={handleGenres}
                autoWidth
                label="Genres"
              >
                <MenuItem value={"28"}>Action</MenuItem>
                <MenuItem value={"12"}>Adventure</MenuItem>
                <MenuItem value={"16"}>Animation</MenuItem>
                <MenuItem value={"35"}>Comedy</MenuItem>
                <MenuItem value={"80"}>Crime</MenuItem>
                <MenuItem value={"99"}>Documentary</MenuItem>
                <MenuItem value={"18"}>Drama</MenuItem>
                <MenuItem value={"10751"}>Family</MenuItem>
                <MenuItem value={"14"}>Fantasy</MenuItem>
                <MenuItem value={"36"}>History</MenuItem>
                <MenuItem value={"27"}>Horror</MenuItem>
                <MenuItem value={"10402"}>Music</MenuItem>
                <MenuItem value={"9648"}>Mystery</MenuItem>
                <MenuItem value={"10749"}>Romance</MenuItem>
                <MenuItem value={"878"}>Science Fiction</MenuItem>
                <MenuItem value={"10770"}>TV Movie</MenuItem>
                <MenuItem value={"53"}>Thriller</MenuItem>
                <MenuItem value={"10752"}>War</MenuItem>
                <MenuItem value={"37"}>Western</MenuItem>
              </Select>
            </FormControl>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Movies
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={handleSearch}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
