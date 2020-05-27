import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import CardInfo from "./CardInfo";
import styled from "styled-components";

const SimilarVideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px 30px 0px 20px;
`;

const Similar = () => {
  const params = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;

  const similarData = useFetch(
    `https://api.themoviedb.org/3/${params.type}/${params.id}/recommendations?api_key=${apiKey}&language=es-ES&page=1`
  );
  const recommendations = similarData.results;

  return (
    <SimilarVideosContainer>
      {recommendations &&
        recommendations.map((element) => {
          return (
            <CardInfo
              key={element.id}
              id={element.id}
              title={
                element.original_name ? element.original_name : element.title
              }
              img={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`}
            />
          );
        })}
    </SimilarVideosContainer>
  );
};

export default Similar;
