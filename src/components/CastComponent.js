import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import CardInfo from "./CardInfo";
import styled from "styled-components";

const CastContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 30px 0px 20px;
  @media (max-width: 568px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const CastComponent = () => {
  const params = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;

  const crewInfo = useFetch(
    `https://api.themoviedb.org/3/${params.type}/${params.id}/credits?api_key=${apiKey}`
  );
  const castInfo = crewInfo.cast;

  return (
    <CastContainer>
      {castInfo &&
        castInfo.map((actor) => {
          return (
            <CardInfo
              key={actor.id}
              id={actor.id}
              title={actor.name}
              character={actor.character}
              img={actor.profile_path}
            />
          );
        })}
    </CastContainer>
  );
};

export default CastComponent;
