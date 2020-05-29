import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowRight } from "@styled-icons/feather/ArrowRight";
import CardInfo from "./CardInfo";

const CardContainerSection = styled.div`
  margin: 30px;
  @media (max-width: 900px) {
    margin: 10px;
  }
`;

const CardsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    margin: 20px;
  }
`;

const TitleDiv = styled.div`
  h2 {
    font-size: 36px;
    font-weight: lighter;
    @media (max-width: 900px) {
      font-size: 24px;
    }
    @media (max-width: 568px) {
      font-size: 22px;
    }
  }
  a {
    margin-top: 10px;
    text-decoration: none;
    color: rgb(220, 221, 222);
  }
`;
const ContainerTitle = styled.div`
  display: flex;
`;
export const ArrowIcon = styled(ArrowRight)`
  margin-top: 25px;
  color: rgb(33, 150, 243);
  width: 30px;
  height: 30px;
  padding: 10px;
  margin-right: 10px;
  @media (max-width: 900px) {
    margin-top: 10px;
  }
`;

const CardsContainer = ({ data, mediaType, title, link }) => {
  return (
    <CardContainerSection>
      {data && (
        <>
          <TitleDiv>
            {link ? (
              <Link to={`${link}`}>
                <ContainerTitle>
                  <h2>{title}</h2>
                  <ArrowIcon />
                </ContainerTitle>
              </Link>
            ) : (
              <h2>{title}</h2>
            )}
          </TitleDiv>

          <CardsSection>
            {data.map((element, i) => {
              if (link && i < 5) {
                return (
                  <CardInfo
                    link={link}
                    key={element.id}
                    id={element.id}
                    title={
                      element.original_name
                        ? element.original_name
                        : element.title
                    }
                    img={element.poster_path || element.backdrop_path}
                    mediaType={mediaType}
                  />
                );
              } else if (!link) {
                return (
                  <CardInfo
                    key={element.id}
                    id={element.id}
                    title={
                      element.original_name
                        ? element.original_name
                        : element.title
                    }
                    img={element.poster_path || element.backdrop_path}
                    mediaType={mediaType}
                  />
                );
              }
            })}
          </CardsSection>
        </>
      )}
    </CardContainerSection>
  );
};

export default CardsContainer;
