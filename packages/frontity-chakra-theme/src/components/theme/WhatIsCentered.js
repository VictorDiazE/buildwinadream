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

import FrontityLink from "@frontity/components/link";

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
  var background = bg?.url;

  var bgDesktop = bgGradient + ", url(" + background + ")";

  var backgroundMobile = bgGradient + ", url(" + bgMobile?.url + ")";

  //GTM EVENT
  const ButtonEvent = (button) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: button,
        label: "What Is Centered",
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
      textAlign={{ base: "left", md: "center" }}
    >
      <Wrapper
        px="30px"
        pt="100px"
        pb="70px"
        maxWidth="1200px"
        margin="auto"
        justifyContent="center"
      >
        <ContentContainer>
          {title && (
            <Title
              as="h2"
              color="tamkeen.50"
              fontSize={{ base: "32px", md: "44px" }}
              lineHeight={{ base: "44px", md: "54px" }}
              fontWeight="600"
              mb="24px"
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
              color="tamkeen.200"
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
          <ButtonContainer display="flex" justifyContent="center">
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
      </Wrapper>
    </Flex>
  );
};
export default connect(WhatIs);

const ContentContainer = styled.div`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-bottom: 40px;
`;
const Title = styled(Heading)``;

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
  justify-content:center
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
