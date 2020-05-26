import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import IdFooter from "./IdFooter";

const DescriptionContainer = styled.div`
  display: flex;
`;

const ExtraImageContainer = styled.div`
  margin: 10px 20px 30px 70px;
  img {
    width: 250px;
  }
`;

const NameAndInfoContainer = styled.div`
  width: 40%;
  margin-left: 20px;
  h2 {
    font-size: 32px;
    font-weight: 300;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    margin-top: 20px;
  }
  a {
    text-decoration: none;
    color: rgb(33, 150, 243);
  }
`;

const IdInfoComponent = ({ searchedItem }) => {
  const params = useParams();

  return (
    <>
      <DescriptionContainer>
        <ExtraImageContainer>
          <img
            src={`https://image.tmdb.org/t/p/w500${searchedItem.poster_path}`}
            alt={searchedItem.title}
          />
        </ExtraImageContainer>

        <NameAndInfoContainer>
          <h2>
            {searchedItem.original_name
              ? searchedItem.original_name
              : searchedItem.title}
          </h2>

          <p>{searchedItem.overview}</p>
          <p>
            <span>Duración: </span>{" "}
            {params.type === "movie"
              ? searchedItem.runtime
              : searchedItem.episode_run_time}{" "}
            minutos.
          </p>

          <p>
            {" "}
            <span>Genero: </span>
            {searchedItem.genres &&
              searchedItem.genres.map((element, i) => {
                return (
                  <>
                    <Link key={element.i} to="">
                      {element.name}
                      {"  "}
                    </Link>{" "}
                  </>
                );
              })}
          </p>

          <p>
            {" "}
            <span>Presupuesto: $</span>
            {searchedItem.budget}
          </p>

          <p>
            {" "}
            <span>Recaudación: $</span>
            {searchedItem.revenue}
          </p>
        </NameAndInfoContainer>
      </DescriptionContainer>
      <IdFooter />
    </>
  );
};

export default IdInfoComponent;
