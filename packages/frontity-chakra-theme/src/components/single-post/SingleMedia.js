import { connect, styled } from "frontity";
import { useState, useEffect, React } from "react";
/* import FeaturedMedia from "./featured-media"; */
import Image from "@frontity/components/image";
import CTACard from "../cards/CTACard";
import HeaderSinglePost from "../theme/HeaderSinglePost";
import SimpleCTA from "../theme/SimpleCTABlog";

import { chakra, Flex, Grid, GridItem, Box, Heading } from "@chakra-ui/react";

const SingleMedia = ({ state, libraries, actions }) => {
  //Getting data from state

  const data = state.source.get(state.router.link);
  const id = data.id;
  const post = state.source[data.type][id];

  const media = state.source.get("media-archive/");
  var archivo = media?.acf;
  const ctaTitle = archivo?.title_cta;
  const ctaSubtitle = archivo?.subtitle_cta;
  const ctaButton = archivo?.button_cta;

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return data.isReady ? (
    /*     <Container>
      <Sidebar></Sidebar>
      <Article>
        {       <FeaturedMedia id={post.featured_media} /> }
        <Title dangerouslySetInnerHTML={{ __html: post?.title?.rendered }} />
        <Content>
          <Html2React html={post?.content?.rendered} />
        </Content>
      </Article>
    </Container> */

    <Container width="100%" bg="tamkeen.900">
      <HeaderSinglePost article={data} />
      <Grid
        width="100%"
        margin="auto"
        maxWidth="1200px"
        px="30px"
        templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
        position="relative"
        height="100%"
        mt="-40vh"
      >
        <Article height="100%" colSpan={{ base: "1", lg: "2" }}>
          <Title
            as="h1"
            color="#dee4ed"
            fontSize={{ md: "59px", base: "32px" }}
            lineHeight={{ md: "78px", base: "44px" }}
            dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
          />
          {data.isNews && (
            <Content>
              <Html2React html={post?.content?.rendered} />
            </Content>
          )}
        </Article>
        <Sidebar
          position="relative"
          height="100%"
          pt={{ base: "0", md: "200px" }}
          pb={{ base: "20px", md: "0" }}
          colSpan={{ base: "1", lg: "1" }}
          /*  bg="blue" */
          ml={{ base: "0", md: "50px" }}
        >
          <Box width="100%" position="relative" height="100%">
            <Box position="sticky" top="150px">
              <CTACard />
            </Box>
          </Box>
        </Sidebar>
      </Grid>
      <SimpleCTA title={ctaTitle} content={ctaSubtitle} btn={ctaButton} />
    </Container>
  ) : null;
};

export default connect(SingleMedia);

const CustomBg = styled(Box)`
  background-blend-mode: soft-light;
`;

const Container = styled(Box)``;

const Sidebar = styled(GridItem)``;

const Article = styled(GridItem)``;

const Title = styled(Heading)``;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  padding-bottom: 30px;
  word-break: break-word;
  font-family: "Rubik", sans-serif;
  height: 100%;
  color: white;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }
  p {
    color: white;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  img {
    width: auto;
    object-fit: cover;
    object-position: center;
  }
  figure {
    margin: 24px auto;
    width: 100%;
    figcaption {
      font-size: 0.7em;
    }
  }
  div {
    margin-bottom: 1.5rem;
    margin-top: 2em;
  }
  iframe {
    display: block;
    margin: auto;
  }
  blockquote {
    border-left: 1px solid #40986b;
    color: #40986b;
    font-family: "Martel", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding: 0 12px;
    margin: 24px 0;
  }
  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }
  /* Input fields styles */
  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;
    &:focus {
      outline-color: #1f38c5;
    }
  }
  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }
  /* WordPress Core Align Classes */
  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }
    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .alignright {
      float: right;
      margin-left: 24px;
    }
    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
