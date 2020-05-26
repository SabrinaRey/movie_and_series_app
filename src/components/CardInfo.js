import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  h4 {
    font-weight: lighter;
    font-size: 24px;
  }
  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
  }
  img {
    width: 270px;
    transition: all 0.3s;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
    }
  }
`;

const CardInfo = ({ id, img, mediaType, title, character }) => {
  return (
    <>
      <Container>
        <Link to={`/${mediaType}/${id}`}>
          <img src={img} alt={title} />
          <h4>{title}</h4>
          {character && <h5>{character}</h5>}
        </Link>
      </Container>
    </>
  );
};

export default CardInfo;
