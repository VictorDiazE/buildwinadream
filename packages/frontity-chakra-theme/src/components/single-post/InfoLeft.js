import { connect, styled, decode } from "frontity";
import React from "react";
import {
  Flex,
  SimpleGrid,
  Box,
  Button,
  Text,
  chakra,
  Heading,
} from "@chakra-ui/react";
import FrontityLink from "@frontity/components/link";

const WADFoundation = ({ state, actions, libraries, ...props }) => {
  const Html2React = libraries.html2react.Component;

  const bg = props?.bg?.url;
  const bgMobile = props?.bgMobile?.url;
  const title = props?.title;
  const content = props?.content;
  const btn = props?.btn;
  var gradient =
    "linear-gradient(179.92deg, #150f35 0.07%, rgba(30, 41, 59, 0) 99.93%), url(" +
    bg +
    ")";
  var gradientMobile =
    "linear-gradient(0deg, #150f35 50.04%, rgba(30, 41, 59, 0) 99.93%), url(" +
    bgMobile +
    ")";

  //GTM EVENT
  const ButtonEvent = (btn) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: btn,
        label: "Info Section LEFT",
      },
    });

  return (
    <Container
      bgImage={{ base: gradientMobile, md: gradient }}
      bgPosition="center"
      bgSize="cover"
      width="100%"
      minH="500px"
      alignItems="flex-start"
      direction="column"
      justifyContent={{ base: "flex-start", md: "center" }}
      minHeight={{ base: "750px", md: "650px" }}
      pb={{ base: "0", md: "20px" }}
    >
      <Wrapper
        columns={{ base: 0, md: 2 }}
        maxWidth="1200px"
        mx="auto"
        width="100%"
      >
        <ContentContainer px="30px">
          <div className="content-wrapper">
            {title && (
              <Title
                as="h2"
                color="tamkeen.200"
                fontSize={{ base: "32px", md: "44px" }}
                lineHeight={{ base: "44px", md: "54px" }}
                fontWeight="600"
                mb="25px"
              >
                {title}
              </Title>
            )}
            {content && (
              <Content color="tamkeen.50">
                <Html2React html={content} />
              </Content>
            )}
            <ButtonContainer display="flex" mt="25px">
              {btn && (
                <MainButton
                  link={btn?.url}
                  onClick={() => ButtonEvent(btn?.title)}
                >
                  {btn?.title}
                </MainButton>
              )}
            </ButtonContainer>
          </div>
        </ContentContainer>
        <ImageContainer w="100%"></ImageContainer>
      </Wrapper>
    </Container>
  );
};
export default connect(WADFoundation);

const Container = styled(Flex)``;

const Wrapper = styled(SimpleGrid)`
  color: white;
`;

const ContentContainer = styled(Box)`
  margin-top: 50px;
  width: 100%;
  margin-bottom: 60px;
  @media only screen and (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .content-wrapper {
    @media only screen and (min-width: 768px) {
      max-width: 550px;
    }
  }
`;

const ImageContainer = styled(Box)`
  width: 100%;
  margin-bottom: 50px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  .slider-wrapper {
    @media only screen and (min-width: 768px) {
      height: 100%;
      display: flex;
    }
  }
`;

const ButtonContainer = styled(SimpleGrid)`
  max-width: 230px;
  flex-direction: column-reverse;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 100%;
  }
`;

const Title = styled(Heading)``;

const Content = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #dee4ed;
  text-align: left;
  margin-bottom: 15px;
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
