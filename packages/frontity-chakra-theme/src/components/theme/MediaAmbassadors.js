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
import MediaSlider from "../ambassadors/MediaSlider";
const Imagen = chakra(Image);

const Media = ({ state, libraries, actions, ...props }) => {
  // Get Props items and fields
  const title = props?.title;
  const items = props?.items;
  const estado = state.source.news;
  const bg = props?.bg;
  var bgColor = bg?.bg_color;
  var bgGradient = bg?.bg_gradient;

  // News
  const GetNews = state.source.news;
  const news = Object.values(GetNews);
  /*   console.log(news); */

  return (
    <MediaContainer as="section" bg={bgGradient + "," + bgColor}>
      <Wrapper
        mx="auto"
        maxWidth="1200px"
        px="30px"
        display="flex"
        direction="column"
      >
        <TextContainer maxWidth={{ base: "100%", md: "400px" }}>
          <Heading
            as="h2"
            fontSize={{ base: "32px", md: "44px" }}
            lineHeight={{ base: "44px", md: "52px" }}
            color="#fff"
            mb={{ base: "35px", md: "50px" }}
          >
            {title}
          </Heading>
        </TextContainer>
        <SliderContainer>
          <MediaSlider
            items={items}
            estado={estado}
            news={GetNews}
          ></MediaSlider>
        </SliderContainer>
      </Wrapper>
    </MediaContainer>
  );
};

export default connect(Media);

const MediaContainer = styled(Box)`
  padding: 75px 0;
  overflow: hidden;
  position: relative;
`;

const TextContainer = styled(Box)`
  margin: 0 0;
`;

const Wrapper = styled(Flex)``;

const SliderContainer = styled(Box)``;
