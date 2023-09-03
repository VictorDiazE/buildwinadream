import { connect, styled, decode } from "frontity";
import React from "react";
import {
  Container,
  Flex,
  Text,
  Heading,
  chakra,
  Grid,
  Button,
  Box,
  MenuProvider,
} from "@chakra-ui/react";

import Image from "@frontity/components/image";

import FrontityLink from "../../link";

const Legend = chakra(Image);

const Map = chakra(Image);

const Headquarters = ({ state, libraries, actions, ...props }) => {
  const Html2React = libraries.html2react.Component;

  var isMobile = props?.isMobile;
  var bg = props?.bg;
  var title = props?.title;
  var content = props?.content;
  var legend = props?.legend;
  var map = props?.map;
  var mapMobile = props?.mapMobile;
  var bgColor = props?.bg?.bg_color;
  var bgGradient = props?.bg?.bg_gradient;

  return (
    <Flex
      /*       bg="tamkeen.900" */
      width="100%"
      bg={{
        base: bgGradient + ", " + bgColor,
        md: bgGradient + ", " + bgColor,
      }}
      minHeight="700px"
    >
      <Wrapper
        px="30px"
        py={{ md: "30px", base: "60px" }}
        maxWidth="1200px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <ContentContainer
          maxWidth="320px"
          width="100%"
          direction="column"
          justify="center"
        >
          {title && (
            <Title
              as="h2"
              color="tamkeen.800"
              fontSize={{ base: "32px", md: "44px" }}
              lineHeight={{ base: "44px", md: "54px" }}
              fontWeight="600"
            >
              {title}
            </Title>
          )}
          {content && (
            <Content
              color="#150f35"
              fontSize="14px"
              lineHeight="24px"
              my="24px"
            >
              <Html2React html={content} />
            </Content>
          )}
          {legend && (
            <Legend
              w="100%"
              maxWidth={legend.width}
              src={legend?.url}
              alt={legend?.alt}
              mb="40px"
            />
          )}
        </ContentContainer>
        <MapContainer justify="center" direction="column">
          {!isMobile && <Map w="100%" src={map?.url} alt={map?.alt} />}
          {isMobile && (
            <Map w="100%" src={mapMobile?.url} alt={mapMobile?.alt} />
          )}
        </MapContainer>
      </Wrapper>
    </Flex>
  );
};
export default connect(Headquarters);

const ContentContainer = styled(Flex)``;

const Title = styled(Heading)``;

const Content = styled(Text)``;

const MapContainer = styled(Flex)``;

const Wrapper = styled(Flex)`
  width: 100%;
  margin: auto;
  min-height: 600px;
`;
