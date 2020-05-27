import React from "react";
import useFetch from "../hooks/useFetch";
import CardsContainer from "./CardsContainer";

const HomePage = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const trendingMoviesList = useFetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  );
  const trendingSeriesList = useFetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
  );

  return (
    <main>
      {trendingMoviesList && (
        <CardsContainer
          data={trendingMoviesList.results}
          title="Peliculas que son tendencia"
          link="movie/category/trending/page"
          mediaType="movie"
        />
      )}
      {trendingSeriesList && (
        <CardsContainer
          data={trendingSeriesList.results}
          title="Series que son tendencia"
          link="tv/category/trending/page"
          mediaType="tv"
        />
      )}
    </main>
  );
};

export default HomePage;
