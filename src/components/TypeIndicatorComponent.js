import React from "react";
import { useParams } from "react-router-dom";
import MediaCategories from "./MediaCategories";

const TypeIndicatorComponent = () => {
  const params = useParams();
  return (
    <>
      {params.type === "movie" && <MediaCategories mediaType="movie" />}
      {params.type === "tv" && <MediaCategories mediaType="tv" />}
    </>
  );
};

export default TypeIndicatorComponent;
