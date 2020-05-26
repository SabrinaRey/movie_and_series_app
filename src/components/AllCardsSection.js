import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import CardsContainer from "./CardsContainer";

const AllCardsSection = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams();
  let allItems = "";

  const allTitles = {
    movie: {
      trending: "Películas que son tendencia",
      popular: "Películas populares",
      topRated: "Películas con mejores críticas",
      upcoming: "Películas a estrenarse",
      nowPlaying: "Películas en cines",
    },
    tv: {
      trending: "Series que son tendencia",
      popular: "Series populares",
      topRated: "Series con mejores críticas",
      onTheAir: "Series al aire",
    },
  };
  const selectedTitle = allTitles[params.type][params.section];

  if (params && params.type) {
    const allUrls = {
      movie: {
        trending: `https://api.themoviedb.org/3/trending/${params.type}/week?api_key=${apiKey}`,
        popular: `https://api.themoviedb.org/3/${params.type}/popular?api_key=${apiKey}&language=en-US&page=1`,
        topRated: `https://api.themoviedb.org/3/${params.type}/top_rated?api_key=${apiKey}&language=en-US&page=1`,
        upcoming: `https://api.themoviedb.org/3/${params.type}/upcoming?api_key=${apiKey}&language=en-US&page=1`,
        nowPlaying: `https://api.themoviedb.org/3/${params.type}/now_playing?api_key=${apiKey}&language=en-US&page=1`,
      },
      tv: {
        trending: `https://api.themoviedb.org/3/trending/${params.type}/week?api_key=${apiKey}`,
        popular: `https://api.themoviedb.org/3/${params.type}/popular?api_key=${apiKey}&language=en-US&page=1`,
        topRated: `https://api.themoviedb.org/3/${params.type}/top_rated?api_key=${apiKey}&language=en-US&page=1`,
        onTheAir: `https://api.themoviedb.org/3/${params.type}/on_the_air?api_key=${apiKey}&language=en-US&page=1`,
      },
    };
    const selectedType = allUrls[params.type];
    allItems = selectedType[params.section];
  }
  const allTypes = useFetch(allItems);

  return (
    <>
      {allTypes && (
        <CardsContainer
          data={allTypes.results}
          title={selectedTitle}
          mediaType={params.type}
        />
      )}
    </>
  );
};

export default AllCardsSection;
