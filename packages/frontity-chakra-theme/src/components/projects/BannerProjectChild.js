import { connect, styled, decode } from "frontity";
import React from "react";
import {
  Container,
  Flex,
  Grid,
  SimpleGrid,
  Box,
  Button,
  Text,
  Heading,
  chakra,
  Link,
} from "@chakra-ui/react";
import ScrollDown from "../theme/ScrollDown";
import FrontityLink from "../link";

const BannerProjectChild = ({ state, libraries, ...props }) => {
  const bg = props?.bg?.url;
  const bgMobile = props?.bgMobile?.url;
  const subtitle = props?.subtitle;
  const title = props?.title;
  const content = props?.content;
  const fontSize = props?.font_size;
  const fontSizeMobile = props?.font_size_mobile;
  const align = props?.vertical;
  const btn = props?.btn;

  return (
    <Flex
      bgImage={{
        md:
          "linear-gradient(0deg, #150f35 15.72%, rgba(15, 23, 42, 0) 57.35%), url(" +
          bg +
          ")",
        base:
          "linear-gradient(180deg, #150f35 7.34%, #150f35 100%), url(" +
          bgMobile +
          ")",
      }}
      /*  paddingStart="30px" */
      bgPosition="right"
      bgRepeat="no-repeat"
      bgSize="contain"
      bgColor="#150f35"
      width="100%"
      maxWidth="100%"
      minH="100vh"
      mx="auto"
      alignItems="space-between"
      pb={{ base: "0", md: "20px" }}
    >
      <Wrapper
        mt="100px"
        columns={{ base: 1, md: 2 }}
        maxWidth="1200px"
        mx="auto"
        px="30px"
        width="100%"
        textAlign={{ base: "center", md: "inherit" }}
      >
        <ContentContainer
          maxWidth={{ md: "750px", base: "100%" }}
          justify="space-between"
          direction="column"
          pb="50px"
        >
          <ContentWrapper>
            {subtitle && (
              <Subtitle align="insetStart" color="#fff">
                {subtitle}
              </Subtitle>
            )}
            {title && (
              <Title
                as="h2"
                color="#ffffff"
                fontWeight="700"
                fontSize={{ base: fontSizeMobile, md: fontSize }}
                lineHeight={{ base: fontSizeMobile, md: fontSize }}
              >
                {title}
              </Title>
            )}
            {content && <Content color="#ffffff">{content}</Content>}
          </ContentWrapper>
          <ScrollDown />
        </ContentContainer>
        <EmptyContainer></EmptyContainer>
      </Wrapper>
    </Flex>
  );
};
export default connect(BannerProjectChild);

const Wrapper = styled(Grid)`
  grid-template-columns: 2fr 1fr;
  color: white;
`;

const ContentContainer = styled(Flex)`
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
const ContentWrapper = styled(Box)`
  max-width: 100%;
  margin-bottom: 120px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    max-width: 500px;
    padding: 50px 0;
  }
`;

const EmptyContainer = styled(Box)``;

const Title = styled(Heading)`
  color: white;
`;

const Subtitle = styled(Text)`
  margin-bottom: 10px;
`;

const Content = styled(Text)`
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Extra = styled(Text)`
  font-size: 18.66px;
  line-height: 30px;
  color: #dee4ed;
  margin: 15px 0;
  @media only screen and (min-width: 768px) {
    padding-left: 32px;
    max-width: 240px;
    margin: 0 0 12px;
  }
`;

const MainButton = styled(FrontityLink)`
  display: flex;
  justify-content: center;
  background: #4c43cd;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 35px;
  border-radius: 40px;
  border: 2px solid #4c43cd;
  height: fit-content;
  transition: ease-in-out 500ms;
  :hover {
    background: #fff;
    color: #4c43cd;
    border-color: #fff;
  }
`;

const ButtonContainer = styled(SimpleGrid)`
  max-width: 230px;
  margin: auto;
  flex-direction: column-reverse;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 100%;
  }
`;
