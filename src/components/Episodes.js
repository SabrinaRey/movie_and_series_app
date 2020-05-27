import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import CardInfo from "./CardInfo";

const SelectInput = styled.div`
  margin: 10px;

  select {
    font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    color: rgb(220, 221, 222);
    background-color: rgb(35, 39, 42);
    cursor: pointer;
    position: relative;
    border-radius: 6px;
    padding: 3px 31px 3px 16px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(220, 221, 222);
    border-image: initial;
  }
`;

const EpisodesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const IndividualEpisode = styled.div`
  width: 30%;
  margin: 10px;
  img {
    width: 100%;
  }
  h3 {
    font-weight: 400;
    font-size: 18px;
    span {
      line-height: 20px;
      margin-top: 0px;
      color: rgb(33, 150, 243);
      margin-right: 10px;
      font-weight: 400;
    }
  }
  p {
    font-weight: 300;
  }
`;

const Episodes = () => {
  const history = useHistory();
  const params = useParams();

  const apiKey = process.env.REACT_APP_API_KEY;

  const itemDetails = useFetch(
    `https://api.themoviedb.org/3/tv/${params.id}?api_key=${apiKey}&language=es-ES`
  );

  const seasons = itemDetails.seasons;

  console.log(seasons);

  const [selectedSeason, setSelectedSeason] = useState(1);

  const episodesperseason = useFetch(
    `https://api.themoviedb.org/3/tv/${params.id}/season/${selectedSeason}?api_key=${apiKey}&language=es-eS`
  );

  const handleChange = (e) => {
    setSelectedSeason(e.target.value);
  };

  return (
    <>
      <SelectInput>
        <select value={selectedSeason} onChange={handleChange}>
          {seasons &&
            seasons.map((e) => {
              return (
                <option value={e.season_number}>
                  Temporada {e.season_number}
                </option>
              );
            })}
        </select>
      </SelectInput>

      <EpisodesContainer>
        {episodesperseason.episodes &&
          episodesperseason.episodes.map((element) => {
            return (
              <IndividualEpisode key={element.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${element.still_path}`}
                  alt={element.name}
                />
                <h3>
                  <span>
                    S{element.season_number}E{element.episode_number}
                  </span>
                  {element.name}
                </h3>
                <p>{element.overview}</p>
              </IndividualEpisode>
            );
          })}
      </EpisodesContainer>
    </>
  );
};
export default Episodes;
