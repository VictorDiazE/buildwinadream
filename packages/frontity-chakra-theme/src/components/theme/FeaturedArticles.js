import { connect, styled, frontity, decode } from "frontity";
import React, { useEffect } from "react";
import { Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import FrontityLink from "../link";
import FeaturedArticleCard from "../cards/FeaturedArticleCard";
import NewFeaturedArticleCard from "../cards/NewFeaturedArticleCard";

const FeaturedArticles = ({ state, libraries, actions, ...props }) => {
  // Featured Articles Fields
  const items = props?.items;
  /*   console.log(items); */
  var cards;

  {
    items &&
      (cards = items?.map(({ ID, post_title, post_type, post_name }) => {
        /*         console.log(ID); */

        const type = post_type;
        const slug = post_name;
        const featuredArticleLink = "/" + type + "/" + slug;
        useEffect(() => {
          actions.source.fetch("/" + type + "/" + slug);
        }, [actions.source]);
        /*   console.log(featuredArticle); */
        const featuredArticle = state.source.news[ID];
        /*         console.log(featuredArticle); */
        const featuredArticleDuration = featuredArticle?.acf?.duration;
        const featuredArticleImage = featuredArticle?.featured_media;
        const featuredArticleSubtitle = featuredArticle?.acf?.subtitle;
        /*         console.log(featuredArticleDuration); */
        return (
          <FeaturedArticleCard
            image={featuredArticleImage}
            title={post_title}
            link={featuredArticleLink}
            subtitle={featuredArticleSubtitle}
            duration={featuredArticleDuration}
          />
        );
      }));
  }

  return (
    <FeaturedArticleContainer
      width="100%"
      mb={{ base: "40px", md: "20px" }}
      px={{ base: "0", md: "0" }}
      py={{ base: "32px", md: "32px" }}
      borderRadius="0px 0px 8px 8px"
      direction={{ base: "column", md: "row" }}
      backgroundColor="#150f35"
    >
      {cards}
    </FeaturedArticleContainer>
  );
};
export default connect(FeaturedArticles);

const FeaturedArticleContainer = styled(Flex)`
  width: 100%;
  margin: 0px;
  margin-bottom: 10px;
  align-items: space-between;
  @media only screen and (min-width: 768px) {
    margin-bottom: 10px;
    max-width: 1200px;
    margin: auto;
  }
`;
