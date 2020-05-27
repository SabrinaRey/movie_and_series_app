import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "@styled-icons/feather/Home";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { Search } from "@styled-icons/feather/Search";
import useFetch from "../hooks/useFetch";
import SearchResults from "./SearchResults";

export const HomeIcon = styled(Home)`
  color: #dcddde;
  width: 30px;
  height: 30px;
  padding: 10px;
  margin-right: 10px;
`;
export const VideoIcon = styled(Video)`
  color: #dcddde;
  width: 30px;
  height: 30px;
  padding: 10px;
  margin-right: 10px;
`;
export const TvIcon = styled(Tv)`
  color: #dcddde;
  width: 30px;
  height: 30px;
  padding: 10px;
  margin-right: 10px;
`;
export const SearchIcon = styled(Search)`
  color: #dcddde;
  width: 30px;
  height: 30px;
  padding: 10px;
  margin-right: 10px;
`;

const Navigation = styled.nav`
  background-color: #141414;
  display: flex;
`;

const FormContainer = styled.div`
  input {
    font-size: 20px;
    color: rgb(220, 221, 222);
    cursor: pointer;
    background: transparent;
    border-width: 0px;
    padding: 10px 20px 5px 40px;
  }
`;

const NavBar = () => {
  const history = useHistory();

  const apiKey = process.env.REACT_APP_API_KEY;

  const [searchedItem, setsearchedItem] = useState("");

  const search = useFetch(
    `https://api.themoviedb.org/3/search/multi?query=${searchedItem}&api_key=${apiKey}&language=es-ES&page=1&include_adult=false`
  );

  const handleChange = (e) => {
    setsearchedItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/multi/:${searchedItem}`);
    setsearchedItem("");
  };

  return (
    <>
      <Navigation>
        <Link to="/">
          <HomeIcon />
        </Link>
        <Link to="/movie">
          <VideoIcon />
        </Link>
        <Link to="/tv">
          {" "}
          <TvIcon />
        </Link>

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <SearchIcon />
            <input
              type="text"
              value={searchedItem}
              placeholder="Busqueda"
              onChange={handleChange}
            ></input>
          </form>
        </FormContainer>
      </Navigation>

      {search.results && <SearchResults info={search.results} />}
    </>
  );
};

export default NavBar;
