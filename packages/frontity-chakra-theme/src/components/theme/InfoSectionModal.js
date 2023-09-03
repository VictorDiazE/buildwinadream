import { connect, styled, decode } from "frontity";
import React from "react";
import {
  Container,
  Flex,
  Grid,
  Box,
  Button,
  SimpleGrid,
  Text,
  Heading,
  chakra,
  Link,
} from "@chakra-ui/react";

import FrontityLink from "@frontity/components/link";

const InfoSectionModal = ({ state, actions, libraries, ...props }) => {
  /*   const bg = props?.bg?.url;
  const bgMobile = props?.bgMobile?.url; */
  /*   const title = props?.title;
  const align = props?.vertical;
; */
  const Html2React = libraries.html2react.Component;

  const bg =
    "https://dev-winadream.pantheonsite.io/wp-content/uploads/2022/07/AdobeStock_346439865_Video_HD_Preview-1.png";
  const bgMobile =
    "https://dev-winadream.pantheonsite.io/wp-content/uploads/2022/07/AdobeStock_346439865_Video_HD_Preview-1.png";
  const btn = props?.btn;
  const title = "FROM OMAN TO THE WORLD";
  const subtitle = "";
  const content =
    "Win a Dream is a great gift that Oman offers to the world and football fans. It will be the occasion to present this extraordinary country to people from all over the world. Its history, culture, and values will be shared with football fans, including through some of Win a Dream monthly rewards.";
  var tag;

  //GTM EVENT
  const ButtonEvent = (btn) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: btn,
        label: "Info Section Modal",
      },
    });

  return (
    <Flex
      bgImage={{
        md:
          "linear-gradient(0deg, #150f35 9.62%, rgba(30, 41, 59, 0) 85.84%), linear-gradient(90deg, #150f35 18.31%, rgba(30, 41, 59, 0) 100%), url(" +
          bg +
          ")",
        base:
          "linear-gradient(0deg, #150f35 8.68%, rgba(15, 23, 42, 0) 85.36%), url(" +
          bgMobile +
          ")",
      }}
      bgPosition="center"
      bgSize="cover"
      width="100%"
      maxWidth="100%"
      minH="700px"
      mx="auto"
      /*    alignItems={align} */
      pb={{ base: "0", md: "20px" }}
    >
      <Wrapper
        maxWidth="1200px"
        mx="auto"
        px="30px"
        width="100%"
        textAlign={{ base: "left", md: "inherit" }}
      >
        <ContentContainer w="100%" alignItems="center">
          <ContentWrapper>
            {tag && (
              <Box
                bg="linear-gradient(271.41deg, #DFE2EB 0%, #FFFFFF 100%)"
                borderRadius="8px"
                width="fit-content"
                py="6px"
                px="12px"
                mb="20px"
              >
                <Text
                  fontSize="19px"
                  lineHeight="30px"
                  fontWeight="500"
                  textTransform="uppercase"
                  color="#524583"
                >
                  {tag}
                </Text>
              </Box>
            )}
            {subtitle && <Subtitle align="insetStart">{subtitle}</Subtitle>}
            {title && (
              <Title
                as="h2"
                fontWeight="900"
                fontSize={{ base: "60px", md: "96px" }}
                lineHeight={{ base: "70px", md: "96px" }}
                mb="24px"
              >
                {title}
              </Title>
            )}
            {content && (
              <Content color="tamkeen.50">
                <Html2React html={content} />
              </Content>
            )}
            <ButtonContainer display="flex">
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
          </ContentWrapper>
        </ContentContainer>
        <EmptyContainer></EmptyContainer>
      </Wrapper>
    </Flex>
  );
};
export default connect(InfoSectionModal);

const Wrapper = styled(Flex)`
  color: white;
`;

const ContentContainer = styled(Flex)`
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
    max-width: 750px;
    padding: 50px 0;
  }
`;

const EmptyContainer = styled(Box)``;

const Title = styled(Heading)`
  color: white;
  font-weight: 900;
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
    font-size: 18px;
    line-height: 30px;
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
