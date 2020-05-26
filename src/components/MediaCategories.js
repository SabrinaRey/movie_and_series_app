import React from "react";
import useFetch from "../hooks/useFetch";
import CardsContainer from "./CardsContainer";

const MediaCategories = ({ mediaType }) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const topRated = useFetch(
    `https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${apiKey}&language=en-US&page=1`
  );

  const popular = useFetch(
    `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  const upcoming = useFetch(
    `https://api.themoviedb.org/3/${mediaType}/upcoming?api_key=${apiKey}&language=en-US&page=1`
  );

  const nowPlaying = useFetch(
    `https://api.themoviedb.org/3/${mediaType}/now_playing?api_key=${apiKey}&language=en-US&page=1`
  );

  const onTheAir = useFetch(
    `https://api.themoviedb.org/3/${mediaType}/on_the_air?api_key=${apiKey}&language=en-US&page=1`
  );

  return (
    <>
      {popular && (
        <CardsContainer
          data={popular.results}
          title={
            mediaType === "tv" ? "Series populares" : "Peliculas populares"
          }
          link={`${mediaType}/category/popular`}
          mediaType={mediaType}
        />
      )}
      {topRated && (
        <CardsContainer
          data={topRated.results}
          title={
            mediaType === "tv"
              ? "Series con mejores críticas"
              : "Peliculas con mejores críticas"
          }
          link={`${mediaType}/category/topRated`}
          mediaType={mediaType}
        />
      )}
      {upcoming && mediaType === "movie" && (
        <CardsContainer
          data={upcoming.results}
          title="Peliculas a estrenarse"
          link={`${mediaType}/category/upcoming`}
          mediaType={mediaType}
        />
      )}
      {nowPlaying && mediaType === "movie" && (
        <CardsContainer
          data={nowPlaying.results}
          title="Películas en cines"
          link={`${mediaType}/category/nowPlaying`}
          mediaType={mediaType}
        />
      )}

      {onTheAir && mediaType === "tv" && (
        <CardsContainer
          data={onTheAir.results}
          title="Series al aire"
          link={`${mediaType}/category/onTheAir`}
          mediaType={mediaType}
        />
      )}
    </>
  );
};

export default MediaCategories;
