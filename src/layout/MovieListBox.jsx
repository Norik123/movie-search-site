import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export default function MovieListBox({ arr }) {
  const location = useNavigate();
  return (
    <ImageList
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {arr.map((item) => {
        return (
          <ImageListItem
            className="ImageListItem"
            key={item.id}
            onClick={() => {
              location(`/movie/${item.id}`);
              window.scrollTo(0, 0);
            }}
            style={{ cursor: "pointer" }}
          >
            <img
              className="Poster"
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w780${item.poster_path}`
                  : "http://www.salasardyechem.com/img/not-available.jpg"
              }
              alt={item.id}
            />
            <p
              style={{
                textAlign: "center",
                height: "50px",
                fontSize: "15px",
              }}
            >
              {item.title}
            </p>
            <ImageListItemBar
              style={{ textAlign: "center" }}
              title={`${item.vote_count} votes`}
              position="below"
            />
            <Rating
              style={{ display: "flex", justifyContent: "center" }}
              name="half-rating-read"
              defaultValue={item.vote_average / 2}
              precision={0.1}
              readOnly
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
