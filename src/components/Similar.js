import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams, Switch, Route } from "react-router-dom";
import CardInfo from "./CardInfo";
import styled from "styled-components";
import IdComponent from "./IdComponent";

const SimilarVideosContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
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
              mediaType={params.type}
              key={element.id}
              id={element.id}
              title={
                element.original_name ? element.original_name : element.title
              }
              img={element.backdrop_path}
            />
          );
        })}

      <Switch>
        <Route exact path="/:type/:id/info" component={<IdComponent />} />
      </Switch>
    </SimilarVideosContainer>
  );
};

export default Similar;
