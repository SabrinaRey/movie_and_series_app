import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import CardsContainer from "./CardsContainer";
import PaginationComponent from "./PaginationComponent";

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

    // esre objeto es claro, pero dificil de leer. considera poner en variables la url para que se haga mas legible
    // por ejemplo
    // API_BASE + params.type + /week? + API_KEY + LANGUAGE + PAGE

    const allUrls = {
      movie: {
        trending: `https://api.themoviedb.org/3/trending/${params.type}/week?api_key=${apiKey}&language=es-ES&page=${params.pagenumber}`,
        popular: `https://api.themoviedb.org/3/${params.type}/popular?api_key=${apiKey}&language=es-ES&page=${params.pagenumber}`,
        topRated: `https://api.themoviedb.org/3/${params.type}/top_rated?api_key=${apiKey}&language=es-ES&page=${params.pagenumber}`,
        upcoming: `https://api.themoviedb.org/3/${params.type}/upcoming?api_key=${apiKey}&language=es-ES&page=${params.pagenumber}`,
        nowPlaying: `https://api.themoviedb.org/3/${params.type}/now_playing?api_key=${apiKey}&language=es-ES&page=${params.pagenumber}`,
      },
      tv: {
        trending: `https://api.themoviedb.org/3/trending/${params.type}/week?api_key=${apiKey}&language=es-ES&page=${params.pagenumber}`,
        popular: `https://api.themoviedb.org/3/${params.type}/popular?api_key=${apiKey}&language=es-ES&page=${params.pagenumber}`,
        topRated: `https://api.themoviedb.org/3/${params.type}/top_rated?api_key=${apiKey}&language=es-ES&page=${params.pagenumber}`,
        onTheAir: `https://api.themoviedb.org/3/${params.type}/on_the_air?api_key=${apiKey}&language=es-ES&page=${params.pagenumber}`,
      },
    };
    const selectedType = allUrls[params.type];
    allItems = selectedType[params.section];
  }
  const allTypes = useFetch(allItems);

  return (
    <>
      {allTypes && (
        <>
          <CardsContainer
            data={allTypes.results}
            title={selectedTitle}
            mediaType={params.type}
          />
          <PaginationComponent totalPages={allTypes.total_pages} />
        </>
      )}
    </>
  );
};

export default AllCardsSection;
