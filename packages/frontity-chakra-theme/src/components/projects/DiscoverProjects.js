import React, { useEffect } from "react";
import { connect, styled, decode } from "frontity";
import Image from "@frontity/components/image";
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Flex,
  chakra,
} from "@chakra-ui/react";
import ProjectSlider from "../sliders/ProjectSlider";

const DiscoverProjects = ({ state, libraries, actions, ...props }) => {
  // Get Props items and fields
  const Html2React = libraries.html2react.Component;
  const title = props?.title;
  const content = props?.content;
  var bg = props?.bg?.bg_color;
  var bgGradient = props?.bg?.bg_gradient;
  const items = props?.items;
  const ctaCondicional = props?.cta;

  return (
    <ProjectsContainer
      as="section"
      bg={{ base: bgGradient + ", " + bg, md: bgGradient + ", " + bg }}
      backgroundSize="cover"
      bgColor=""
      backgroundPosition="center"
    >
      <Wrapper
        mx="auto"
        maxWidth="1200px"
        px="30px"
        display="flex"
        direction="column"
      >
        <TextContainer maxWidth={{ base: "100%", md: "100%" }} mb="32px">
          {title && (
            <Heading
              as="h2"
              fontSize={{ base: "32px", md: "44px" }}
              lineHeight={{ base: "44px", md: "52px" }}
              color="#fff"
              mb={{ base: "15px", md: "15px" }}
            >
              {title}
            </Heading>
          )}
          {content && (
            <Text
              fontSize={{ base: "16px", md: "16px" }}
              lineHeight={{ base: "24px", md: "24px" }}
              color="#fff"
              maxWidth={{ base: "100%", md: " 570px" }}
            >
              <Html2React html={content} />
            </Text>
          )}
        </TextContainer>
        <SliderContainer>
          {items && (
            <ProjectSlider items={items} cta={ctaCondicional}></ProjectSlider>
          )}
        </SliderContainer>
      </Wrapper>
    </ProjectsContainer>
  );
};

export default connect(DiscoverProjects);

const ProjectsContainer = styled(Box)`
  padding: 75px 0;
  overflow: hidden;
  position: relative;
  @media only screen and (min-width: 768px) {
    padding: 100px 0;
  }
`;

const TextContainer = styled(Box)``;

const Wrapper = styled(Flex)``;

const SliderContainer = styled(Box)``;
