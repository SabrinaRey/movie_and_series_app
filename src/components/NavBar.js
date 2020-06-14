import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "@styled-icons/feather/Home";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { Search } from "@styled-icons/feather/Search";

// El codigo de los iconos esta muy repetitivo. 
// Yo hubiera privilegiado un componente que los rodeara con todo el estilo, y cada icono dentro de ese componente. 

export const HomeIcon = styled(Home)`
  color: #dcddde;
  width: 30px;
  height: 30px;
  padding: 10px;
  margin-right: 10px;
  @media (max-width: 568px) {
    width: 20px;
    height: 20px;
  }
`;
export const VideoIcon = styled(Video)`
  color: #dcddde;
  width: 30px;
  height: 30px;
  padding: 10px;
  margin-right: 10px;
  @media (max-width: 568px) {
    width: 20px;
    height: 20px;
  }
`;
export const TvIcon = styled(Tv)`
  color: #dcddde;
  width: 30px;
  height: 30px;
  padding: 10px;
  margin-right: 10px;
  @media (max-width: 568px) {
    width: 20px;
    height: 20px;
  }
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

  @media (max-width: 568px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  input {
    font-size: 20px;
    color: rgb(220, 221, 222);
    cursor: pointer;
    background: transparent;
    border-width: 0px;
    padding: 10px 20px 5px 40px;
    @media (max-width: 1024px) {
      margin-top: 15px;
    }
    @media (max-width: 568px) {
      width: 80%;
      margin-bottom: 15px;
      font-size: 12px;
    }
  }
`;

const NavBar = () => {
  const history = useHistory();

  const [searchedItem, setsearchedItem] = useState("");

  const handleChange = (e) => {
    setsearchedItem(e.target.value);
  };

  // excelente como esta resuelto este search 
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
        {/* Algunos usuarios prefieren usar el mouse y estan acostumbrados a que la lupa sea el equivalente de hacer 
        submit en un formulario: considerá agregar un onclick a este icono que ejecute handleSubmit() */}
        <SearchIcon />
        <FormContainer>
          <form onSubmit={handleSubmit}>
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
