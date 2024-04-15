import { useState, useEffect } from "react";
let key = `3dda8902`;
export function useMovies(query) {
  //displaying the error message
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  //responsible for if the api still not fetched yet appear the loader component
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      // callback?.();
      let controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          let res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) {
            throw new Error("somthing went wrong with fetching movies");
          }
          let data = await res.json();
          if (data.Response === "False") {
            throw new Error("movie not found");
          }

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      // handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
