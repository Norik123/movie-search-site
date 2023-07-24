import React, { useEffect, useState } from "react";
import { AllUseState } from "./AllUseState";
import { DataBase } from "../DataBase/DataBase";

export default function AllUseStateProvider({ children }) {
  const [filmsList, setFilmsList] = useState([]);
  const [menu, setMenu] = useState("popular");
  const [genres, setGenres] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [menuOnOff, setMenuOnOff] = useState(true);
  const [searchOnOff, setSearchOnOff] = useState(false);
  const [genresOnOff, setGenresOnOff] = useState(false);
  const [text, setText] = useState("Loading........");
  const [genreName, setGenreName] = useState("POPULAR");

  useEffect(() => {
    if (!menu && !genres && !search) {
      setText("Select a menu, genre or write a new search query.");
    } else setText("Loading........");
  }, [setText, menu, genres, search]);

  useEffect(() => {
    if (menuOnOff) {
      let data;
      (async function fetchData() {
        data = await DataBase.getFilms(menu, pageNumber);
        setFilmsList(data);
      })();
    }
  }, [menu, pageNumber, setFilmsList, menuOnOff]);

  useEffect(() => {
    if (searchOnOff) {
      let data;
      (async function fetchData() {
        data = await DataBase.getSearch(search, pageNumber);
        setFilmsList(data);
      })();
    }
  }, [search, pageNumber, setFilmsList, searchOnOff]);

  useEffect(() => {
    if (genresOnOff) {
      let data;
      (async function fetchData() {
        data = await DataBase.getGenres(genres, pageNumber);
        setFilmsList(data);
      })();
    }
  }, [genresOnOff, setFilmsList, genres, pageNumber]);

  useEffect(() => {
    if (menu === "popular") setGenreName("POPULAR");
    else if (menu === "top_rated") setGenreName("TOP RATED");
    else if (menu === "upcoming") setGenreName("UPCOMING");
    else if (genres === "28") setGenreName("ACTION");
    else if (genres === "12") setGenreName("ADVENTURE");
    else if (genres === "16") setGenreName("ANIMATION");
    else if (genres === "35") setGenreName("COMEDY");
    else if (genres === "80") setGenreName("CRIME");
    else if (genres === "99") setGenreName("DOCUMENTARY");
    else if (genres === "18") setGenreName("DRAMA");
    else if (genres === "10751") setGenreName("FAMILY");
    else if (genres === "14") setGenreName("FANTASY");
    else if (genres === "36") setGenreName("HISTORY");
    else if (genres === "27") setGenreName("HORROR");
    else if (genres === "10402") setGenreName("MUSIC");
    else if (genres === "9648") setGenreName("MYSTERY");
    else if (genres === "10749") setGenreName("ROMANCE");
    else if (genres === "878") setGenreName("SCIENCE FICTION");
    else if (genres === "10770") setGenreName("TV MOVIE");
    else if (genres === "53") setGenreName("THRILLER");
    else if (genres === "10752") setGenreName("WAR");
    else if (genres === "37") setGenreName("WESTERN");
    else setGenreName("");
  }, [menu, setGenreName, genres]);

  return (
    <AllUseState.Provider
      value={{
        filmsList,
        setFilmsList,
        menu,
        setMenu,
        genres,
        setGenres,
        pageNumber,
        setPageNumber,
        search,
        setSearch,
        menuOnOff,
        setMenuOnOff,
        searchOnOff,
        setSearchOnOff,
        text,
        setText,
        genresOnOff,
        setGenresOnOff,
        genreName,
        setGenreName,
      }}
    >
      {children}
    </AllUseState.Provider>
  );
}
