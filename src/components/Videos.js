import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px 30px 0px 20px;
`;

const ElementsContainer = styled.div`
  padding: 30px;

  @media (max-width: 568px) {
    padding: 5px;
    iframe {
      width: 50%;
    }
  }
`;

const TItleDiv = styled.div`
  width: 280px;
  display: flex;
  h4 {
    @media (max-width: 568px) {
      font-size: 10px;
      width: 150px;
    }
  }
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
                key={element.id}
                id={element.id}
                type="text/html"
                src={`https://www.youtube.com/embed/${element.key}`}
                title={element.name}
              />
              <TItleDiv>
                <h4>{element.name}</h4>
              </TItleDiv>
            </ElementsContainer>
          );
        })}
    </VideosContainer>
  );
};

export default Videos;
