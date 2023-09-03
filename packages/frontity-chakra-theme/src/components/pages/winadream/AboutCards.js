import { connect, styled, decode } from "frontity";
import React from "react";
import {
  Flex,
  Text,
  Heading,
  chakra,
  Wrap,
  WrapItem,
  Box,
} from "@chakra-ui/react";

import AboutCard from "../../cards/AboutCard";

const AboutCards = ({ state, libraries, actions, ...props }) => {
  const Html2React = libraries.html2react.Component;
  const bgColor = props?.bg;
  const title = props?.title;
  const subtitle = props?.subtitle;
  const cards = props?.cards;

  // Mapping GOALS CARDS
  var cardsitems;

  {
    cards &&
      (cardsitems = cards?.map(({ index, title, bg, content }) => {
        var background = bg?.url;
        return (
          <WrapItem w={{ base: "100%", md: "350px" }} key={index}>
            <AboutCard title={title} content={content} bg={background} />
          </WrapItem>
        );
      }));
  }

  return (
    <Container
      as="section"
      /*  bgImage={{ base: gradientMobile, md: gradient }} */
      bg={{
        base: "linear-gradient(304.74deg, #95A4B9 0%, " + bgColor + " 100%);",
        md: "linear-gradient(304.74deg, #95A4B9 0%, " + bgColor + " 100%);",
      }}
      bgPosition="center"
      bgSize="cover"
    >
      <Wrapper
        maxWidth="1200px"
        mx="auto"
        width="100%"
        px="30px"
        minHeight="600px"
        py="80px"
      >
        <HeadingWrapper
          textAlign={{ md: "center", base: "left" }}
          direction="column"
          width="100%"
          /*  mb="20px" */
        >
          {title && (
            <Heading
              as="h4"
              fontWeight={{ md: "600", base: "600" }}
              fontSize={{ md: "44px", base: "32px" }}
              lineHeight={{ base: "44px", md: "52px" }}
              color={{ md: "#150f35", base: "#150f35" }}
              mb="40px"
            >
              {title}
            </Heading>
          )}
          {subtitle && (
            <Heading
              as="h6"
              fontWeight={{ md: "400", base: "400" }}
              fontSize={{ md: "32px", base: "32px" }}
              lineHeight={{ base: "44px", md: "52px" }}
              color={{ md: "#150f35", base: "#150f35" }}
              mb="40px"
            >
              {subtitle}
            </Heading>
          )}
        </HeadingWrapper>
        <Cards w="100%" spacing="40px" justify="center">
          {cardsitems}
        </Cards>
      </Wrapper>
    </Container>
  );
};
export default connect(AboutCards);

const Container = styled(Box)``;

const HeadingWrapper = styled(Flex)``;

const Cards = styled(Wrap)``;

const Wrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
`;
