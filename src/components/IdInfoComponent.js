import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import IdFooter from "./IdFooter";
import Rating from "@material-ui/lab/Rating";

const DescriptionContainer = styled.article`
  display: flex;
`;

const ExtraImageContainer = styled.div`
  margin: 10px 20px 30px 70px;
  @media (max-width: 900px) {
    margin: 10px 10px 20px 20px;
  }
  img {
    width: 280px;

    @media (max-width: 900px) {
      width: 180px;
    }
  }
`;

const NameAndInfoContainer = styled.div`
  width: 40%;
  margin-left: 20px;

  h2 {
    font-size: 32px;
    font-weight: 300;

    @media (max-width: 900px) {
      font-size: 24px;
    }
    @media (max-width: 568px) {
      font-size: 15px;
    }
  }
  .MuiRating-readOnly {
    width: 20px;
    height: 20px;
    margin-right: 3px;
    color: rgb(33, 150, 243);
    @media (max-width: 568px) {
      width: 10px;
      height: 10px;
    }
  }

  p {
    font-size: 14px;
    line-height: 20px;
    margin-top: 20px;
    @media (max-width: 900px) {
      font-size: 12px;
    }
    @media (max-width: 568px) {
      font-size: 8px;
    }
  }
  a {
    text-decoration: none;
    color: rgb(33, 150, 243);
  }
`;

const IdInfoComponent = ({ searchedItem }) => {
  const params = useParams();

  console.log(searchedItem);

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
          <Rating
            name="rating"
            value={searchedItem.vote_average / 2}
            precision={0.5}
            readOnly
          />

          <p>{searchedItem.overview}</p>
          <p>
            <span>Duración: </span>{" "}
            {params.type === "movie"
              ? searchedItem.runtime
              : searchedItem.episode_run_time}{" "}
            minutos.
          </p>
          {params.type === "tv" && (
            <p>Temporadas: {searchedItem.number_of_seasons}</p>
          )}
          {params.type === "tv" && (
            <p>Episodios: {searchedItem.number_of_episodes}</p>
          )}

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

          {params.type === "movie" && (
            <p>
              {" "}
              <span>Presupuesto: $</span>
              {searchedItem.budget}
            </p>
          )}

          {params.type === "movie" && (
            <p>
              {" "}
              <span>Recaudación: $</span>
              {searchedItem.revenue}
            </p>
          )}
          <IdFooter />
        </NameAndInfoContainer>
      </DescriptionContainer>
    </>
  );
};

export default IdInfoComponent;
