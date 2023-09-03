import { connect, styled, decode } from "frontity";
import React, { useState, useEffect } from "react";
import { Flex, SimpleGrid, Box, Text, chakra, Heading } from "@chakra-ui/react";

import ScrollDown from "../theme/ScrollDown";
import FrontityLink from "@frontity/components/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@frontity/components/image";
import VideoPlay from "../theme/VideoPlay";
import play from "../styles/svg/play.svg";

const IconoVideo = chakra(Image);

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
  const btn = props?.btn;
  const extra = props?.extra;
  const card1 = props?.card1;
  const card2 = props?.card2;
  const video = props?.video;

  //GTM EVENT
  const ButtonEvent = (btn) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: btn,
        label: "Banner Home",
      },
    });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
    >
      <Flex
        bgImage={{
          base: bgGradient + ", url(" + bgMobile + ")",
          md: bgGradient + ", url(" + bg + ")",
        }}
        /*  paddingStart="30px" */
        bgPosition="center"
        bgSize="cover"
        width="100%"
        maxWidth="100%"
        minH="100vh"
        mx="auto"
        alignItems="center"
        pb={{ base: "0", md: "20px" }}
      >
        <Box
          maxWidth="1440px"
          position="relative"
          width="100%"
          mx="auto"
          pt="120px"
        >
          <Wrapper
            columns={{ base: 1, lg: 2 }}
            maxWidth="1200px"
            padding={{ base: "0", md: "30px" }}
            mx="auto"
            width="100%"
          >
            <ContentContainer padding={{ base: "30px", md: "0" }}>
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
                <ButtonContainer display="flex" alignItems="center">
                  {btn && (
                    <MainButton
                      variant="base"
                      link={btn?.url}
                      onClick={() => ButtonEvent(btn?.title)}
                    >
                      {btn?.title}
                    </MainButton>
                  )}

                  {extra && (
                    <Extra color="tamkeen.300">
                      <Html2React html={extra} />
                    </Extra>
                  )}
                </ButtonContainer>
              </ContentWrapper>
              {isMobile && (
                <Video
                  justifyContent="flex-start"
                  alignItems="center"
                  mb="25px"
                >
                  {video && <VideoPlay video={video} label="Banner" />}
                </Video>
              )}
              <Box mt="50px">
                <ScrollDown />
              </Box>
            </ContentContainer>
            <VideoCardsContainer>
              {!isMobile && (
                <Video justifyContent="center" alignItems="center">
                  {video && <VideoPlay video={video} label="Banner" />}
                </Video>
              )}
              <CardsContainer
                position={{ base: "static", lg: "absolute" }}
                bottom="0"
                left="0"
              >
                <Cards
                  columns={{ base: 1, md: 2 }}
                  gap={{ base: "4px", md: "10px" }}
                >
                  {card1 && (
                    <Card>
                      <p className="title">{card1.title_card}</p>
                      <p className="subtitle">{card1.subtitle}</p>
                      <div className="content">
                        <Html2React className="content" html={card1.content} />
                      </div>
                    </Card>
                  )}
                  {card2 && (
                    <Card>
                      <p className="title">{card2.title_card}</p>
                      <p className="subtitle">{card2.subtitle}</p>
                      <div className="content">
                        <Html2React html={card2.content} />
                      </div>
                    </Card>
                  )}
                </Cards>
              </CardsContainer>
            </VideoCardsContainer>
          </Wrapper>
        </Box>
      </Flex>
    </motion.div>
  );
};
export default connect(Banner);

const Wrapper = styled(SimpleGrid)`
  color: white;
`;

const ContentContainer = styled(Box)`
  max-width: 100%;
  padding-top: 50px;
  margin-bottom: 100px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    max-width: 500px;
    padding: 0px 0;
  }
`;
const ContentWrapper = styled(Box)`
  max-width: 100%;
  padding-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    max-width: 500px;
    padding: 0 0;
    text-align: left;
  }
`;

const CardsContainer = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  padding-top: 30px;
  background: #150f35;
  padding-bottom: 30px;
  @media only screen and (min-width: 768px) {
    justify-content: flex-end;
    background: transparent;
  }
`;

const Cards = styled(SimpleGrid)`
  align-items: flex-end;
  justify-content: flex-end;
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

const Card = styled(Box)`
  background: rgba(233, 231, 255, 0.15);
  backdrop-filter: blur(15px);
  height: fit-content;
  padding: 40px 40px 40px 52px;
  height: 100%;
  max-width: 280px;
  .title {
    font-weight: 300;
    font-size: 33px;
    line-height: 54px;
    color: #dee4ed;
  }
  .subtitle {
    font-weight: 400;
    font-size: 18.66px;
    line-height: 30px;
    color: #dee4ed;
    @media only screen and (min-width: 768px) {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #dee4ed;
    }
  }
  .content p {
    font-weight: 400;
    font-size: 12.25px;
    line-height: 18px;
    color: #ffffff;
  }
`;

const ButtonContainer = styled(SimpleGrid)`
  max-width: 230px;
  flex-direction: column-reverse;
  position: relative;
  z-index: 9;
  margin: auto;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 100%;
  }
`;

const Title = styled(Heading)`
  color: white;
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

const Content = styled(Box)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #dee4ed;
  margin-bottom: 25px;
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

const Video = styled(Flex)``;

const VideoCardsContainer = styled(Box)``;
