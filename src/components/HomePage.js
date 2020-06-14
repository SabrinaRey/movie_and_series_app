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

  // hay un poco de espanglish en los nombres de tus variables. ("trendingSeriesList")
  // considera usar todas en español o todas en ingles (lo habitual es 100% ingles)
  // esto es importante cuando trabajamos en equipo, que todos usen la misma convención para evitar confusiones. 

  return (
    <main>
      {trendingMoviesList && (
        <CardsContainer
          data={trendingMoviesList.results}
          title="Peliculas que son tendencia"
          link="movie/category/trending/page/1"
          mediaType="movie"
        />
      )}
      {trendingSeriesList && (
        <CardsContainer
          data={trendingSeriesList.results}
          title="Series que son tendencia"
          link="tv/category/trending/page/1"
          mediaType="tv"
        />
      )}
    </main>
  );
};

export default HomePage;
