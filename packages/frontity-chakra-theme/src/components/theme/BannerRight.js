import { connect, styled, decode } from "frontity";
import React from "react";
import {
  Container,
  Flex,
  Grid,
  SimpleGrid,
  GridItem,
  Box,
  Button,
  Text,
  Heading,
  chakra,
  Link,
} from "@chakra-ui/react";
import ScrollDown from "./ScrollDown";
import FrontityLink from "@frontity/components/link";
import { motion, AnimatePresence } from "framer-motion";
import VideoPlay from "./VideoPlay";

const Banner = ({ state, actions, libraries, ...props }) => {
  const Html2React = libraries.html2react.Component;
  const isMobile = state.theme?.isMobile;
  const bg = props?.bg?.url;
  const bgMobile = props?.bgMobile?.url;
  const bgGradient = props?.bgGradient;
  const subtitle = props?.subtitle;
  const title = props?.title;
  const fontSize = props?.fontSize;
  const fontSizeMobile = props?.fontSizeMobile;
  const content = props?.content;
  const align = props?.vertical;
  const btn = props?.btn;
  const videoUrl = props?.video;
  const position = props?.position;

  //GTM EVENT
  const ButtonEvent = (btn) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: btn,
        label: "Banner Right",
      },
    });

  var gridAreas;
  var textAlign;
  var horizontal;
  var column;
  if (position == "right") {
    textAlign = "right";
    horizontal = "flex-end";
    column = "none";
  } else {
    textAlign = "left";
    horizontal = "flex-start";
    column = "auto";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
    >
      <Flex
        bgImage={{
          md: bgGradient + ", url(" + bg + ")",
          base:
            " linear-gradient(0deg, #150f35 8.68%, rgba(15, 23, 42, 0.19) 100%), url(" +
            bgMobile +
            ")",
        }}
        /*  paddingStart="30px" */
        bgPosition="center"
        bgSize="cover"
        width="100%"
        maxWidth="100%"
        minH="100vh"
        mx="auto"
        alignItems={align}
        pb={{ base: "0", md: "20px" }}
      >
        <Wrapper
          templateColumns={{ md: "repeat(4, 1fr)", base: "1fr" }}
          maxWidth="1200px"
          mt="100px"
          mx="auto"
          px="30px"
          width="100%"
          textAlign={{ base: "center", md: "right" }}
          templateRow="1fr"
          templateAreas={`"video content content content"`}
        >
          <EmptyContainer
            colSpan={1}
            height="50%"
            display="flex"
            alignItems="center"
            area={"video"}
          >
            {!isMobile && videoUrl && (
              <Video
                justifyContent="center"
                alignItems="center"
                /*   display={{ base: "none", md: "flex" }} */
              >
                <VideoPlay video={videoUrl} label="Banner Right" />
              </Video>
            )}
          </EmptyContainer>
          <ContentContainer
            colSpan={{ base: "1", md: "3" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="flex-end"
            area={"content"}
          >
            <ContentWrapper>
              {subtitle && <Subtitle align="insetStart">{subtitle}</Subtitle>}
              {title && (
                <Title
                  as="h2"
                  fontWeight="900"
                  fontSize={{ base: fontSizeMobile, md: fontSize }}
                  lineHeight={{ base: fontSizeMobile, md: fontSize }}
                  textTransform="uppercase"
                >
                  {title}
                </Title>
              )}
              {content && (
                <Content color="tamkeen.50">
                  <Html2React html={content} />
                </Content>
              )}
              <ButtonContainer display="flex" justifyContent="flex-end">
                {btn && (
                  <MainButton
                    variant="base"
                    link={btn?.url}
                    onClick={() => ButtonEvent(btn?.title)}
                  >
                    {btn?.title}
                  </MainButton>
                )}
              </ButtonContainer>
              {isMobile && videoUrl && (
                <Video
                  justifyContent="center"
                  alignItems="center"
                  mt="75px"
                  /* display={{ base: "flex", md: "none" }} */
                >
                  <VideoPlay video={videoUrl} label="Banner Right" />
                </Video>
              )}
            </ContentWrapper>
            <ScrollDown />
          </ContentContainer>
        </Wrapper>
      </Flex>
    </motion.div>
  );
};
export default connect(Banner);

const Wrapper = styled(Grid)`
  color: white;
`;

const ContentContainer = styled(GridItem)`
  max-width: 100%;
  padding-top: 50px;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;

    padding: 50px 0;
  }
`;
const ContentWrapper = styled(Box)`
  max-width: 100%;
  margin-bottom: 120px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;

    padding: 50px 0;
  }
`;

const EmptyContainer = styled(GridItem)``;

const Video = styled(Flex)``;

const Title = styled(Heading)`
  color: white;
  font-size: 60px;
  font-weight: 900;
  line-height: 70px;
  maw-width: 1000px;
  @media only screen and (min-width: 768px) {
    font-weight: 900;
  }
`;

const Subtitle = styled(Text)`
  font-size: 18px;
  line-height: 30px;
  color: #dee4ed;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    font-size: 25px;
    line-height: 32px;
  }
`;

const Content = styled(Text)`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #dee4ed;
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 24px;
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
  margin-top: 30px;
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
