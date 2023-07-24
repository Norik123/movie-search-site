import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Buttonn from "../button";
import { DataBase } from "../DataBase/DataBase";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MovieListBox from "../layout/MovieListBox";

export default function FilmCard() {
  const params = useParams();
  const location = useNavigate();
  const [filmData, setFilmData] = useState();
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    let data;
    (async function fetchData() {
      data = await DataBase.getFilmCard(params.id);
      setFilmData(data);
    })();
  }, [params, setFilmData]);

  useEffect(() => {
    let data;
    (async function fetchData() {
      data = await DataBase.getRecommended(params.id);
      setRecommended(data);
    })();
  }, [params, setRecommended]);

  return (
    <>
      <Box id="nav_bar" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                },
              }}
            >
              Movies
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {filmData ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2%",
            }}
          >
            <Buttonn onClick={() => location("/")}>Back to navbar</Buttonn>
          </div>
          <div className="FilmCardBox">
            <div className="InnerFilmCardBox">
              <img
                className="BigPoster"
                src={`https://image.tmdb.org/t/p/original${filmData.backdrop_path}`}
                alt={filmData.id}
              />
              <img
                className="LittlePoster"
                src={`https://image.tmdb.org/t/p/w780${filmData.poster_path}`}
                alt={filmData.id}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "30px" }}>{filmData.title}</p>
              <p style={{ fontSize: "22px" }}>{filmData.tagline}</p>
              <p>
                <i>Status............</i>
                {filmData.status}
              </p>
              <p>
                <i>Vote average............</i>
                {filmData.vote_average} / 10
              </p>
              <p>
                <i>Release date............</i>
                {filmData.release_date}
              </p>
              <p>
                <i>Runtime............</i>
                {filmData.runtime} min
              </p>
              <p>
                <h4>Genres</h4>
                {filmData.genres.map((item) => (
                  <span> • {item.name} </span>
                ))}
              </p>
              <p>
                <h4>Overview</h4>
                {filmData.overview}
              </p>
              {filmData.homepage && (
                <a href={filmData.homepage}>
                  <Buttonn>Homepage</Buttonn>
                </a>
              )}
              {filmData.imdb_id && (
                <a href={`https://www.imdb.com/title/${filmData.imdb_id}`}>
                  <Buttonn>More on IMDB</Buttonn>
                </a>
              )}
            </div>
          </div>
          <p className="moveTitle">Recommended movies</p>
          {recommended.length ? (
            <MovieListBox arr={recommended} />
          ) : (
            <h2 style={{ textAlign: "center" }}>
              There are no recommended movies.
            </h2>
          )}
          <div className="pageButtonsBox">
            <a className="pageButtons " href="#nav_bar">
              <Buttonn>
                <ArrowUpwardIcon />
              </Buttonn>
            </a>
          </div>
        </>
      ) : (
        <h2 style={{ textAlign: "center" }}>Loading........</h2>
      )}
    </>
  );
}
