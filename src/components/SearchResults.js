import React from "react";
import CardInfo from "./CardInfo";

const SearchResults = ({ info }) => {
  return (
    <>
      {info &&
        info.map((element) => (
          <CardInfo
            key={element.id}
            id={element.id}
            title={
              element.original_name ? element.original_name : element.title
            }
            img={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
            mediaType={element.media_type}
          />
        ))}
    </>
  );
};
export default SearchResults;
