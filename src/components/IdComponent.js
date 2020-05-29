import React from "react";
import { useParams, Link, Switch, Route } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import IdInfoComponent from "./IdInfoComponent";
import Similar from "./Similar";
import Videos from "./Videos";
import ImageNot from "../assests/unavailable.jfif";

import CastComponent from "./CastComponent";

import Episodes from "./Episodes";

const MainContainer = styled.div``;

const MainImageContainer = styled.div`
  img {
    width: 100%;
  }
`;

const SectionOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  a {
    text-decoration: none;
    margin-right: 30px;
    color: rgb(220, 221, 222);
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
    margin: 10px;
    transition: all 0.3s ease 0s;
    :visited {
      text-decoration: underline;
    }

    @media (max-width: 900px) {
      font-size: 15px;
    }
  }
`;

const IdComponent = () => {
  const params = useParams();

  const apiKey = process.env.REACT_APP_API_KEY;

  const searchedItem = useFetch(
    `https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=${apiKey}&language=es-ES`
  );

  return (
    <MainContainer>
      {searchedItem && (
        <>
          <MainImageContainer>
            {searchedItem.backdrop_path || searchedItem.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${
                  searchedItem.backdrop_path || searchedItem.poster_path
                }`}
                alt={searchedItem.title}
              />
            ) : (
              <img src={ImageNot} alt="not available" />
            )}
          </MainImageContainer>

          <SectionOptionsContainer>
            <Link to={`/${params.type}/${params.id}/info`}>INFO</Link>
            {params.type === "tv" && (
              <Link to={`/${params.type}/${params.id}/seasons`}>EPISODIOS</Link>
            )}

            {params.type === "movie" && (
              <Link to={`/${params.type}/${params.id}/videos`}>VIDEOS</Link>
            )}
            <Link to={`/${params.type}/${params.id}/cast`}>REPARTO</Link>

            <Link to={`/${params.type}/${params.id}/similar`}>SIMILARES</Link>
          </SectionOptionsContainer>

          <Switch>
            <Route
              exact
              path="/:type/:id/info"
              render={(props) => (
                <IdInfoComponent searchedItem={searchedItem} />
              )}
            />
            <Route exact path="/:type/:id/cast" component={CastComponent} />
            <Route exact path="/:type/:id/videos" component={Videos} />
            <Route exact path="/:type/:id/similar" component={Similar} />
            <Route exact path="/:type/:id/seasons" component={Episodes} />
          </Switch>
        </>
      )}
    </MainContainer>
  );
};

export default IdComponent;
