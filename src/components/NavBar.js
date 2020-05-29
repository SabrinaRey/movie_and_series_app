import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "@styled-icons/feather/Home";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { Search } from "@styled-icons/feather/Search";

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
  align-items: center;
  height: 70px;
`;

const FormContainer = styled.div`
  input {
    font-size: 20px;
    color: rgb(220, 221, 222);
    cursor: pointer;
    background: transparent;
    border-width: 0px;
    padding: 10px 20px 5px 40px;
    @media (max-width: 900px) {
      font-size: 15px;
    }
  }
`;

const NavBar = () => {
  const history = useHistory();

  const [searchedItem, setsearchedItem] = useState("");

  const handleChange = (e) => {
    setsearchedItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/multi/${searchedItem}`);
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
    </>
  );
};

export default NavBar;
