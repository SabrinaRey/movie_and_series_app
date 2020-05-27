import React from "react";
import { Switch, Route, useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import IdInfoComponent from "./IdInfoComponent";

const MainContainer = styled.div``;

const MainImageContainer = styled.div`
  img {
    width: 100%;
    height: 450px;
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
            {searchedItem.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${searchedItem.backdrop_path}`}
                alt={searchedItem.title}
              />
            ) : (
              <img src="" alt="not available" />
            )}
          </MainImageContainer>

          <SectionOptionsContainer>
            <Link to={`/${params.type}/${params.id}`}>INFO</Link>
            {params.type === "tv" && (
              <Link to={`/${params.type}/${params.id}/seasons/`}>
                EPISODIOS
              </Link>
            )}

            {params.type === "movie" && (
              <Link to={`/${params.type}/${params.id}/videos`}>VIDEOS</Link>
            )}
            <Link to={`/${params.type}/${params.id}/cast`}>REPARTO</Link>

            <Link to={`/${params.type}/${params.id}/similar`}>SIMILARES</Link>
          </SectionOptionsContainer>
          <IdInfoComponent searchedItem={searchedItem} />
        </>
      )}
    </MainContainer>
  );
};

export default IdComponent;
