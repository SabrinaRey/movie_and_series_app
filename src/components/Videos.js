import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const VideosContainer = styled.div`
  display: flex;
  margin: 40px 30px 0px 20px;
`;

const ElementsContainer = styled.div`
  padding: 30px;
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
            <ElementsContainer>
              <iframe
                id={element.id}
                type="text/html"
                src={`https://www.youtube.com/embed/${element.key}`}
                title={element.name}
              />
              <h4>{element.name}</h4>
            </ElementsContainer>
          );
        })}
    </VideosContainer>
  );
};

export default Videos;
