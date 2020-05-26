import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import CardInfo from "./CardInfo";
import styled from "styled-components";

const VideosContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 30px 0px 20px;
`;

const Videos = () => {
  const params = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;

  const VideosInfo = useFetch(
    `https://api.themoviedb.org/3/${params.type}/${params.id}/videos?api_key=${apiKey}&language=es-ES`
  );

  return (
    <VideosContainer>
      {VideosInfo.results &&
        VideosInfo.results.map((element) => {
          return (
            <CardInfo
              key={element.id}
              id={element.id}
              title={element.name}
              character={element.character}
              img={`https://image.tmdb.org/t/p/w500${element.profile_path}`}
            />
          );
        })}
    </VideosContainer>
  );
};

export default Videos;
