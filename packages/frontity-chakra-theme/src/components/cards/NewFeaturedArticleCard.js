import { connect, styled, frontity, decode } from "frontity";
import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Flex,
  Heading,
  Text,
  Button,
  chakra,
} from "@chakra-ui/react";
import FrontityLink from "@frontity/components/link";

const Link = chakra(FrontityLink);

const NewFeaturedArticleCard = ({
  state,
  libraries,
  actions,
  featuredArticle,
  ...props
}) => {
  // Featured Articles Fields
  const Html2React = libraries.html2react.Component;
  const type = featuredArticle?.post_type;
  const slug = featuredArticle?.post_name;
  const link = "/" + type + "/" + slug;
  useEffect(() => {
    actions.source.fetch("/" + type + "/" + slug);
  }, [actions.source]);
  const id = featuredArticle?.ID;

  const post = state.source.news[id];

  const subtitle = post?.acf?.subtitle;
  const bg = post?.acf?.bg?.url;
  const duration = post?.acf?.duration;

  return (
    <FeaturedArticleContainer
      width="100%"
      minHeight="374px"
      mx="auto"
      mb={{ base: "40px", md: "20px" }}
      px={{ base: "15px", md: "43px" }}
      py={{ base: "35px", md: "43px" }}
      borderRadius="18px"
      background={
        "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" +
        bg +
        ")"
      }
      justifyContent="space-between"
    >
      <ContentContainer flexDirection="column" width="100%">
        {duration && (
          <FeaturedArticleSubTitle>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#8684b1" />
            </svg>
            FEATURED ARTICLE {duration}
          </FeaturedArticleSubTitle>
        )}
        <FeaturedArticleTitle>
          {featuredArticle?.post_title && (
            <Html2React html={featuredArticle?.post_title} />
          )}
        </FeaturedArticleTitle>
        {subtitle && (
          <FeaturedArticleContent>{subtitle}</FeaturedArticleContent>
        )}
      </ContentContainer>
      {link && <FeaturedArticleLink link={link}>View More</FeaturedArticleLink>}
    </FeaturedArticleContainer>
  );
};
export default connect(NewFeaturedArticleCard);

const FeaturedArticleContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 768px) {
    margin-bottom: 10px;
    max-width: 1200px;
  }
`;
const FeaturedArticleTitle = styled(Flex)`
  max-width: 554px;
  font-family: "Rubik";
  font-weight: 600;
  color: #dee4ed;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: center;
  font-size: 36px;
  line-height: 42px;
  @media only screen and (min-width: 768px) {
    text-align: left;
    font-size: 44.2px;
    line-height: 54px;
    max-width: 100%;
    margin-bottom: 10px;
  }
`;
const FeaturedArticleSubTitle = styled(Flex)`
  max-width: 554px;
  font-family: "Rubik";
  font-weight: 400;
  font-size: 10.5px;
  line-height: 18px;
  color: #dee4ed;
  margin: auto;
  align-items: center;
  gap: 5px;
  padding-top: 10px;
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;
const FeaturedArticleContent = styled(Flex)`
  max-width: 554px;
  margin: auto;
  font-family: "Rubik";
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #dee4ed;
  text-align: center;
  margin-bottom: 30px;
  @media only screen and (min-width: 768px) {
    text-align: left;
    margin: 0;
  }
`;
const FeaturedArticleLink = styled(Link)`
  width: fit-content;
  margin-top: 23px;
  font-family: "Rubik";
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #dee4ed;
  text-decoration: underline;
  transition: ease-in-out 500ms;
  margin: auto;
  :hover {
    color: #4c43cd;
  }
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const ContentContainer = styled(Flex)``;
