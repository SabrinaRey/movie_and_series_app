import React from "react";
import CardInfo from "./CardInfo";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

const ResultsDiv = styled.div`
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    margin: 20px;
    justify-content: center;
  }
`;

const TitleDiv = styled.div`
  margin: 30px;
  h4 {
    font-weight: lighter;
    font-size: 36px;
    @media (max-width: 900px) {
      font-size: 20px;
    }
  }
`;

const SearchResults = () => {
  const params = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;

  const search = useFetch(
    `https://api.themoviedb.org/3/search/multi?query=${params.search}&api_key=${apiKey}&language=es-ES&page=1&include_adult=false`
  );
  return (
    <>
      <TitleDiv>
        <h4>Resultados para: {params.search}</h4>
      </TitleDiv>
      <ResultsDiv>
        {search.results &&
          search.results.map((element) => (
            <CardInfo
              key={element.id}
              id={element.id}
              title={
                element.original_name ? element.original_name : element.title
              }
              img={element.poster_path}
              mediaType={element.media_type}
            />
          ))}
      </ResultsDiv>
    </>
  );
};
export default SearchResults;
