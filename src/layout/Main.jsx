import React, { useCallback, useContext } from "react";
import { AllUseState } from "../context/AllUseState";
import Buttonn from "../button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MovieListBox from "./MovieListBox";

function Main() {
  const { filmsList } = useContext(AllUseState);
  const { pageNumber, setPageNumber } = useContext(AllUseState);
  const { text } = useContext(AllUseState);
  const { search } = useContext(AllUseState);
  const { genreName } = useContext(AllUseState);

  const pageMinus = useCallback(() => {
    setPageNumber((pageNumber) => pageNumber - 1);
  }, [setPageNumber]);

  const pagePlus = useCallback(() => {
    setPageNumber((pageNumber) => pageNumber + 1);
  }, [setPageNumber]);

  return (
    <main>
      {filmsList.length ? (
        <p className="moveTitle">{genreName || search.toUpperCase()} movies</p>
      ) : (
        <p></p>
      )}
      {filmsList.length ? (
        <MovieListBox arr={filmsList} />
      ) : (
        <h2 style={{ textAlign: "center" }}>{text}</h2>
      )}
      <div className="pageButtonsBox">
        {pageNumber === 1 ? (
          <p></p>
        ) : (
          <a className="pageButtons" href="#navbar">
            <Buttonn onClick={pageMinus}>Page {pageNumber - 1}</Buttonn>
          </a>
        )}
        {filmsList.length ? (
          <>
            <a className="pageButtons" href="#navbar">
              <Buttonn>
                <ArrowUpwardIcon />
              </Buttonn>
            </a>
            <a className="pageButtons" href="#navbar">
              <Buttonn onClick={pagePlus}>Page {pageNumber + 1}</Buttonn>
            </a>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </main>
  );
}

export default Main;
