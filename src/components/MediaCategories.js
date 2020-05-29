import React from "react";
import useFetch from "../hooks/useFetch";
import CardsContainer from "./CardsContainer";
import { useParams } from "react-router-dom";

const MediaCategories = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams();

  const topRated = useFetch(
    `https://api.themoviedb.org/3/${params.type}/top_rated?api_key=${apiKey}&language=en-US&page=1`
  );

  const popular = useFetch(
    `https://api.themoviedb.org/3/${params.type}/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  const upcoming = useFetch(
    `https://api.themoviedb.org/3/${params.type}/upcoming?api_key=${apiKey}&language=en-US&page=1`
  );

  const nowPlaying = useFetch(
    `https://api.themoviedb.org/3/${params.type}/now_playing?api_key=${apiKey}&language=en-US&page=1`
  );

  const onTheAir = useFetch(
    `https://api.themoviedb.org/3/${params.type}/on_the_air?api_key=${apiKey}&language=en-US&page=1`
  );

  return (
    <>
      {popular && (
        <CardsContainer
          data={popular.results}
          title={
            params.type === "tv" ? "Series populares" : "Peliculas populares"
          }
          link={`${params.type}/category/popular/page/1`}
          mediaType={params.type}
        />
      )}
      {topRated && (
        <CardsContainer
          data={topRated.results}
          title={
            params.type === "tv"
              ? "Series con mejores críticas"
              : "Peliculas con mejores críticas"
          }
          link={`${params.type}/category/topRated/page/1`}
          mediaType={params.type}
        />
      )}
      {upcoming && params.type === "movie" && (
        <CardsContainer
          data={upcoming.results}
          title="Peliculas a estrenarse"
          link={`${params.type}/category/upcoming/page/1`}
          mediaType={params.type}
        />
      )}
      {nowPlaying && params.type === "movie" && (
        <CardsContainer
          data={nowPlaying.results}
          title="Películas en cines"
          link={`${params.type}/category/nowPlaying/page/1`}
          mediaType={params.type}
        />
      )}

      {onTheAir && params.type === "tv" && (
        <CardsContainer
          data={onTheAir.results}
          title="Series al aire"
          link={`${params.type}/category/onTheAir/page/:pagenumber`}
          mediaType={params.type}
        />
      )}
    </>
  );
};

export default MediaCategories;
