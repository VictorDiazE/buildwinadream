import { connect, styled, decode } from "frontity";
import React from "react";
import {
  Container,
  Flex,
  Text,
  Heading,
  chakra,
  SimpleGrid,
  Button,
  Box
} from "@chakra-ui/react";
import PartnersSlider from "../sliders/PartnersSlider";
import FrontityLink from "../link";

const Partners = ({ state, libraries, actions, ...props }) => {
  //Getting props
  const Html2React = libraries.html2react.Component;

  const bg = props?.bg;
  const bgMobile = props?.bgMobile;
  const bgGradient = props?.bgGradient;
  const title = props?.title;
  const content = props?.content;
  const isMobile = props?.isMobile;
  const theme = props?.theme;
  const partners = props?.partners;

  //Background and color variables props

  var bgDesktop;
  {
    bg && (bgDesktop = bgGradient +",url(" + bg?.url + ")");
  }

  var backgroundMobile;
  {
    bgMobile && (backgroundMobile = bgGradient +",url(" + bgMobile?.url + ")");
  }
  var color;

  if (theme == "light") {
    color = "tamkeen.900";
  } else {
    color = "#fff";
  }

  return (
    <Flex
      bg="tamkeen.900"
      width="100%"
      bgImage={{ base: backgroundMobile, md: bgDesktop }}
      bgPosition="center"
      bgSize="cover"
      position="relative"
      overflow="hidden"
      minHeight="700px"
    >
      <Wrapper px="30px" maxWidth="1200px" direction="column" justify="center">
        <ContentContainer direction="column" align="flex-start">
          {title && (
            <Title
              as="h2"
              color={color}
              fontSize={{ base: "32px", md: "44px" }}
              lineHeight={{ base: "44px", md: "54px" }}
              fontWeight="600"
            >
              {title}
            </Title>
          )}

          {content && (
            <Content
              color={color}
              fontSize="16px"
              lineHeight="24px"
              maxWidth="630px"
            >
              <Html2React html={content} />
            </Content>
          )}
        </ContentContainer>
        <SliderContainer mt="24px">
          <PartnersSlider items={partners} />
        </SliderContainer>
      </Wrapper>
    </Flex>
  );
};
export default connect(Partners);

const ContentContainer = styled(Flex)``;

const SliderContainer = styled(Box)``;

const Wrapper = styled(Flex)`
  width: 100%;
  margin: auto;
`;

const Title = styled(Heading)`
  margin-bottom: 10px;
`;

const Content = styled(Text)``;
