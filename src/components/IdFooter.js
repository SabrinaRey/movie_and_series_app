import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Imdb } from "@styled-icons/boxicons-logos/Imdb";

export const TwitterIcon = styled(Twitter)`
  color: #dcddde;
  width: 30px;
  height: 30px;
`;

export const FacebookIcon = styled(FacebookCircle)`
  color: #dcddde;
  width: 30px;
  height: 30px;
`;

export const InstagramIcon = styled(Instagram)`
  color: #dcddde;
  width: 30px;
  height: 30px;
`;

export const ImdbIcon = styled(Imdb)`
  color: #dcddde;
  width: 30px;
  height: 30px;
`;

const SocialMediaFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-left: -350px;
  margin-bottom: 20px;
  a {
    text-decoration: none;
    margin: 5px;
  }
`;

const IdFooter = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const params = useParams();

  const externalLinks = useFetch(
    `https://api.themoviedb.org/3/${params.type}/${params.id}/external_ids?api_key=${apiKey}`
  );

  return (
    <SocialMediaFooter>
      <a
        href={`https://www.twitter.com/${externalLinks.twitter_id}`}
        target="_blank"
      >
        <TwitterIcon />
      </a>
      <a
        href={`https://www.facebook.com/${externalLinks.facebook_id}`}
        target="_blank"
      >
        {" "}
        <FacebookIcon />
      </a>
      <a
        href={`https://www.instagram.com/${externalLinks.instagram_id}`}
        target="_blank"
      >
        <InstagramIcon />
      </a>
      <a
        href={`https://www.imdb.com/title/${externalLinks.imdb_id}`}
        target="_blank"
      >
        <ImdbIcon />
      </a>
    </SocialMediaFooter>
  );
};

export default IdFooter;
