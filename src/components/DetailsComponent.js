import React from "react";
import { useParams } from "react-router-dom";
import MovieCards from "./MovieCards";

const DetailsComponent = () => {
  const params = useParams();

  return (
    <>
      {params.type === "movies" && (
        <MovieCards mediaType="movie" id={params.id} />
      )}
      {params.type === "tv" && <MovieCards mediaType="tv" id={params.id} />}
    </>
  );
};

export default DetailsComponent;
