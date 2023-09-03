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
  Box,
} from "@chakra-ui/react";
import Image from "@frontity/components/image";

import FrontityLink from "@frontity/components/link";

const SponsorImage = chakra(Image);

const WhatIsSponsored = ({ state, libraries, actions, ...props }) => {
  const Html2React = libraries.html2react.Component;

  const bg = props?.bg;
  const bgMobile = props?.bgMobile;
  const title = props?.title;
  const subtitle = props?.subtitle;
  const content = props?.content;
  const btn = props?.btn;
  const sponsors = props?.sponsors;
  const isMobile = props?.isMobile;
  var background = bg?.url;

  var bgDesktop =
    "linear-gradient(0deg, #150f35 0%, rgba(51, 65, 85, 0) 100%), linear-gradient(90deg, #150f35 31.28%, rgba(51, 65, 85, 0) 100%), url(" +
    background +
    ")";

  var backgroundMobile =
    "linear-gradient(180.01deg, #150f35 37.19%, rgba(39, 53, 73, 0) 85.35%), url(" +
    bgMobile?.url +
    ")";

  //GTM EVENT
  const ButtonEvent = (btn) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: btn,
        label: "What Is Sponsored",
      },
    });

  return (
    <Flex
      bg="tamkeen.900"
      width="100%"
      bgImage={{ base: backgroundMobile, md: bgDesktop }}
      /*   bgColor="linear-gradient(90deg, #150f35 0.07%, rgba(30, 41, 59, 0) 99.93%);" */
      bgPosition="top"
      bgSize="cover"
      minHeight="600px"
      py="60px"
    >
      <Wrapper
        px="30px"
        maxWidth="1200px"
        templateColumns={{ base: "repeat(1 , 1fr)", md: "repeat(2, 1fr)" }}
        gap={{ base: "4px", md: "50px" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <ContentContainer>
          {title && (
            <Title
              as="h2"
              color="tamkeen.200"
              fontSize={{ base: "32px", md: "44px" }}
              lineHeight={{ base: "44px", md: "54px" }}
              fontWeight="600"
            >
              {title}
            </Title>
          )}
          {subtitle && (
            <Subtitle
              as="h4"
              fontSize={{ base: "24px", md: "25px" }}
              lineHeight={{ base: "34px", md: "32px" }}
              fontWeight="400"
              color="white"
            >
              {subtitle}
            </Subtitle>
          )}
          {content && (
            <Content color="#dee4ed" fontSize="14px" lineHeight="24px">
              <Html2React html={content} />
            </Content>
          )}
          <ButtonContainer display="flex">
            {btn && (
              <MainButton
                link={btn?.url}
                onClick={() => ButtonEvent(btn?.title)}
              >
                {btn?.title}
              </MainButton>
            )}
            {/*   {extra && <Extra color="tamkeen.300">{extra}</Extra>} */}
          </ButtonContainer>
        </ContentContainer>
        <VideoContainer
          width="100%"
          direction="column"
          mt="100px"
          justifyContent={{ base: "flex-start", md: "flex-end" }}
        >
          {/* <span className="icon icon-play play"></span> */}

          {sponsors && (
            <Sponsors
              maxWidth="400px"
              justifyContent="flex-end"
              align={{ base: "flex-start", md: "flex-end" }}
              direction="column"
              /*     mt={{ base: "0", md: "200px" }} */
            >
              <Text
                color="white"
                fontSize="10.5px"
                lineHeight="18px"
                mb="16px"
                mr="115px"
              >
                {sponsors?.title}
              </Text>
              <Flex alignItems="center">
                <Box mr="30px">
                  <SponsorImage src={sponsors?.logo?.url} />
                </Box>
                <Box>
                  <SponsorImage src={sponsors?.logo2?.url} />
                </Box>
              </Flex>
            </Sponsors>
          )}
        </VideoContainer>
      </Wrapper>
    </Flex>
  );
};
export default connect(WhatIsSponsored);

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  /*   margin-top: 100px;
  margin-bottom: 100px;
  @media only screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 25px;
  } */
`;
const Title = styled(Heading)`
  margin-bottom: 10px;
`;

const Subtitle = styled(Heading)`
  font-weight: 400;
  margin-bottom: 15px;
`;

const Content = styled(Text)`
  font-size: 14px;
  line-height: 24px;
  p {
    font-size: 14px;
    line-height: 24px;
  }
`;
const VideoContainer = styled(Flex)``;

const Sponsors = styled(Flex)``;

const ReadMore = styled(FrontityLink)`
  color: #8684b1;
  font-size: 14px;
  line-height: 24px;
  margin: 15px 0 0;
  text-decoration: underline;
`;
const ButtonContainer = styled(SimpleGrid)`
  max-width: 230px;
  flex-direction: column-reverse;
  margin-top: 24px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 100%;
  }
`;

const Wrapper = styled(SimpleGrid)`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin: auto;
  min-height: 600px;
  .play {
    font-size: 80px;
    color: white;
    text-align: center;
    @media only screen and (min-width: 768px) {
      font-size: 60px;
    }
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
