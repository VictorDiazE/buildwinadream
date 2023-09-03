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

const WhatIs = ({ state, libraries, actions, ...props }) => {
  const Html2React = libraries.html2react.Component;
  const bg = props?.bg;
  const bgMobile = props?.bgMobile;
  const bgGradient = props?.bgGradient;
  const title = props?.title;
  const subtitle = props?.subtitle;
  const content = props?.content;
  const btn = props?.btn;
  const readmore = props?.readmore;
  const isMobile = props?.isMobile;
  const horizontal = props?.horizontal;
  const sponsors = props?.sponsors;
  var background = bg?.url;

  var bgDesktop = bgGradient + ", url(" + background + ")";
  var backgroundMobile =
    "linear-gradient(180deg, #150F35 3.49%, rgba(21, 15, 53, 0.2) 100%)" +
    ", url(" +
    bgMobile?.url +
    ")";

  var alineadoHorizontal = horizontal;
  var justified;
  var textAlign;
  var flexDirection;
  if (alineadoHorizontal == "flex-end") {
    textAlign = "left";
    flexDirection = "row-reverse";
    justified = "space-between";
  } else {
    textAlign = "left";
    flexDirection = "row";
    justified = "space-between";
  }

  //GTM EVENT
  const ButtonEvent = (button) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: button,
        label: "What Is",
      },
    });

  return (
    <Flex bg="tamkeen.900" width="100%">
      <Flex
        width="100%"
        bgImage={{ base: backgroundMobile, md: bgDesktop }}
        /*   bgColor="linear-gradient(90deg, #150f35 0.07%, rgba(30, 41, 59, 0) 99.93%);" */
        bgPosition="center"
        bgSize="cover"
      >
        <Wrapper
          px="30px"
          maxWidth="1200px"
          py="100px"
          justifyContent={{ md: justified, base: "flex-start" }}
          flexDirection={{ md: flexDirection, base: "column" }}
        >
          <ContentContainer textAlign={textAlign}>
            {title && (
              <Title
                as="h2"
                color="tamkeen.50"
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
                color="tamkeen.50"
              >
                {subtitle}
              </Subtitle>
            )}
            {content && (
              <Content color="tamkeen.200">
                <Html2React html={content} />
              </Content>
            )}
            {readmore && (
              <ReadMore link={readmore?.url}> {readmore?.title}</ReadMore>
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
          <SponsoredContainer
            width={{ base: "100%", md: "fit-content" }}
            direction="column"
            mt={{ md: "100px", base: 0 }}
            justifyContent={{ base: "flex-start", md: "flex-end" }}
          >
            {/* <span className="icon icon-play play"></span> */}

            {sponsors && (
              <Sponsors
                maxWidth="400px"
                mt="75px"
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
          </SponsoredContainer>
        </Wrapper>
      </Flex>
    </Flex>
  );
};
export default connect(WhatIs);

const ContentContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    margin-top: 20px;
    max-width: 480px;
  }
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
`;

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

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  margin: auto;
  min-height: 600px;
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

const SponsoredContainer = styled(Flex)``;

const Sponsors = styled(Flex)``;
