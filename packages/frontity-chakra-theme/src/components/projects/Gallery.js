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
import GallerySlider from "../sliders/GallerySlider";
const Imagen = chakra(Image);

const Gallery = ({ state, libraries, actions, ...props }) => {
  // Get Props items and fields
  const bg = props?.bg;
  const title = props?.title;
  const content = props?.content;
  const items = props?.items;
  const Html2React = libraries.html2react.Component;
  var bgGradient = bg?.bg_gradient;
  var bgColor = bg?.bg_color;
  return (
    <GalleryContainer as="section" bg={bgGradient + "," + bgColor} py="100px">
      <Wrapper
        mx="auto"
        maxWidth="1200px"
        px="30px"
        display="flex"
        direction="column"
      >
        <TextContainer maxWidth={{ base: "100%", md: "570px" }} mb="32px">
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
          {items && <GallerySlider items={items}></GallerySlider>}
        </SliderContainer>
      </Wrapper>
    </GalleryContainer>
  );
};

export default connect(Gallery);

const GalleryContainer = styled(Box)`
  overflow: hidden;
  position: relative;
`;

const TextContainer = styled(Box)``;

const Wrapper = styled(Flex)``;

const SliderContainer = styled(Box)``;
