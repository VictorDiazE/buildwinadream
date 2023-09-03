import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import { connect, styled } from "frontity";
import { React, useEffect, useState } from "react";
import { loadable } from "frontity";
import ArchiveHeader from "./archive-header";
import ArchiveItem from "./archive-item";
import HomepageArchive from "./homepage-archive";
import Pagination from "./pagination";
import { decode } from "frontity";
import SimpleCTA from "../theme/SimpleCTABlog";
import InstagramFeed from "../theme/InstagramFeed";
import HeaderBlog from "./HeaderBlog";
import FeaturedArticles from "../theme/FeaturedArticles";
import NewFeaturedArticleCard from "../cards/NewFeaturedArticleCard";

/* import { FeaturedPostSection } from "../featured-post/featured-post";
import { formatPostData, splitPosts } from "../helpers";
import { PaginationButton } from "./pagination"; */
const MediaCardBlocked = loadable(() => import("../cards/MediaCardBlocked"));
const MediaCard = loadable(() => import("../cards/MediaCard"));

//import { loadable } from "frontity";

const Archive = ({ state, libraries, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  /* const [firstThreePosts, othersPosts] = splitPosts(state, data.items); */

  /* Guarda todo los post en el state */
  state.theme.news = data.items.map((news) => state.source[news.type][news.id]);
  const media = state.source.get("media-archive/");

  var archivo = media?.acf;
  const featuredMediaTitle = archivo?.featured_article_title;
  const featuredMedia = archivo?.featured_media;
  const featuredArticle = archivo?.featured_media_card;
  const ctaTitle = archivo?.title_cta;
  const ctaSubtitle = archivo?.subtitle_cta;
  const ctaButton = archivo?.button_cta;
  const MediaTitle = archivo?.archive_title;

  const totalPages = data.totalPages;
  console.log(featuredArticle);
  /* const news = state.source.data['/news/'] */

  /* if (data.isHome) return <HomepageArchive />; */

  // Define isLogin variable and re render each time it changes
  var isLogin = state.theme.isLogin;
  const LoginVerification = ({ isLogin }) => {
    useEffect(() => {
      var isLogin = state.theme.isLogin;
    }, [isLogin]);

    return isLogin;
  };

  return (
    <Box bg="tamkeen.900" as="section">
      {/* If the list is a taxonomy, we render a title. */}

      {/*       {data.isTaxonomy && (
        <ArchiveHeader
          showPattern={state.theme.showBackgroundPattern}
          taxonomy={data.taxonomy}
          title={decode(state.source[data.taxonomy][data.id].name)}
        />
      )} */}

      {/* If the list is an author, we render a title. */}

      {data.isAuthor && (
        <ArchiveHeader
          showPattern={state.theme.showBackgroundPattern}
          taxonomy="Posts By"
          title={decode(state.source.author[data.id].name)}
        />
      )}

      {/* Header del Archive News, último aticulo publicado  */}
      {featuredArticle && (
        <HeaderBlog article={state.theme?.news[0]} card={featuredArticle} />
      )}
      {/* Feature Articles de News */}
      <Box
        bg="#150f35"
        marginTop="20px"
        borderRadius="8px 8px 0px 0px"
        maxWidth={{ base: "100%", md: "1200px" }}
        mx="auto"
        display="block"
        px="30px"
        width={{ base: "fit-content", md: "100%" }}
      >
        <Box
          zIndex="1000"
          borderBottom="solid 1px white"
          maxWidth={{ md: "1200px" }}
          mx="auto"
        >
          <Heading
            as="h5"
            fontSize={{ base: "25px", md: "25px" }}
            lineHeight={{ base: "36px" }}
            color="#FFFFFF"
            fontWeight="600"
            bg="#150f35"
            width="100%"
            textAlign={{ base: "center", md: "left" }}
            height="50px"
            mb="12px"
          >
            <TextFeatured
              marginLeft={{ base: "0px", md: "0" }}
              borderBottom="solid 1px"
              maxWidth="1200px"
              m="auto"
              textAlign={{ base: "center", md: "left" }}
            >
              {" "}
              {featuredMediaTitle}
            </TextFeatured>
          </Heading>
        </Box>
      </Box>
      <FeaturedArticles items={featuredMedia} />
      <Box
        px="30px"
        bg="tamkeen.900"
        maxWidth="1200px"
        mx="auto"
        mt="50px"
        width={{ base: "fit-content", md: "100%" }}
      >
        {/* Iterate over the items of the list. */}
        <Box mb="50px" display="block" borderBottom="1px solid #dee4ed">
          {MediaTitle && (
            <Heading
              as="h5"
              fontSize="25px"
              lineHeight="36px"
              color="white"
              mb="12px"
            >
              {MediaTitle}
            </Heading>
          )}
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="20px">
          {data?.items?.map(({ type, id }) => {
            const item = state.source[type][id];
            var link = item?.link;
            var postTitle = item?.title.rendered;
            var img = item?.featured_media;
            var subtitle = item?.acf?.subtitle;
            var duration = item?.acf?.duration;
            var blocked = item?.acf?.post_private;

            // Check if it's a Private Post or not.
            if (blocked && !isLogin === true) {
              return (
                <MediaCardBlocked
                  title={postTitle}
                  bg={img}
                  subtitle={subtitle}
                  link={link}
                  duration={duration}
                />
              );
            } else {
              return (
                <MediaCard
                  title={postTitle}
                  bg={img}
                  subtitle={subtitle}
                  link={link}
                  duration={duration}
                />
              );
            }
          })}
        </SimpleGrid>
        <Pagination mt="56px" totalPages={totalPages} />
      </Box>
      <InstagramFeed align="center" />
      <CustomBg
        backgroundColor={{ md: "tamkeen.900", base: "#150f35" }}
        minHeight="370px"
        pt="30px"
        align="center"
      >
        <SimpleCTA title={ctaTitle} content={ctaSubtitle} btn={ctaButton} />
      </CustomBg>
    </Box>
  );
};

export default connect(Archive);

const CustomBg = styled(Box)`
  background-blend-mode: soft-light;
`;
const TextFeatured = styled.div`
  display: flex;
  padding-top: 16px;
`;
