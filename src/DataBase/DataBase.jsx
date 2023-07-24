import axios from "axios";

export class DataBase {
  static async getFilms(whatList, pageNumber) {
    let options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${whatList}`,
      params: {
        language: "en-US",
        page: `${pageNumber}`,
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDkwMjRlZjljOTgyZWVlNmY2NTQ3MGM2MjgzMmJlZSIsInN1YiI6IjY0YTY4NGJmYzNiZmZlMDE0NDUxMzVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._A4hlusAowmkQbUusERSS8CVifUZfpdj-EZ3hN_4npk",
      },
    };
    let response = await axios.request(options);
    return response.data.results;
  }
  static async getSearch(film, pageNumber) {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie`,
      params: {
        include_adult: "false",
        query: `${film}`,
        language: "en-US",
        page: `${pageNumber}`,
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDkwMjRlZjljOTgyZWVlNmY2NTQ3MGM2MjgzMmJlZSIsInN1YiI6IjY0YTY4NGJmYzNiZmZlMDE0NDUxMzVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._A4hlusAowmkQbUusERSS8CVifUZfpdj-EZ3hN_4npk",
      },
    };
    let response = await axios.request(options);
    return response.data.results;
  }
  static async getGenres(genre, pageNumber) {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie`,
      params: {
        include_adult: "false",
        with_genres: `${genre}`,
        language: "en-US",
        page: `${pageNumber}`,
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDkwMjRlZjljOTgyZWVlNmY2NTQ3MGM2MjgzMmJlZSIsInN1YiI6IjY0YTY4NGJmYzNiZmZlMDE0NDUxMzVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._A4hlusAowmkQbUusERSS8CVifUZfpdj-EZ3hN_4npk",
      },
    };
    let response = await axios.request(options);
    return response.data.results;
  }
  static async getFilmCard(movie_id) {
    let options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movie_id}`,
      params: {
        language: "en-US",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDkwMjRlZjljOTgyZWVlNmY2NTQ3MGM2MjgzMmJlZSIsInN1YiI6IjY0YTY4NGJmYzNiZmZlMDE0NDUxMzVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._A4hlusAowmkQbUusERSS8CVifUZfpdj-EZ3hN_4npk",
      },
    };
    let response = await axios.request(options);
    return response.data;
  }
  static async getRecommended(movie_id) {
    let options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movie_id}/recommendations`,
      params: {
        language: "en-US",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDkwMjRlZjljOTgyZWVlNmY2NTQ3MGM2MjgzMmJlZSIsInN1YiI6IjY0YTY4NGJmYzNiZmZlMDE0NDUxMzVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._A4hlusAowmkQbUusERSS8CVifUZfpdj-EZ3hN_4npk",
      },
    };
    let response = await axios.request(options);
    return response.data.results;
  }
}

// MOVIE ID

// Action          28
// Adventure       12
// Animation       16
// Comedy          35
// Crime           80
// Documentary     99
// Drama           18
// Family          10751
// Fantasy         14
// History         36
// Horror          27
// Music           10402
// Mystery         9648
// Romance         10749
// Science Fiction 878
// TV Movie        10770
// Thriller        53
// War             10752
// Western         37
