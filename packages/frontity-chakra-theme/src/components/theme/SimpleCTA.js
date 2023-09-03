import { connect, styled, decode } from "frontity";
import React from "react";
import { Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import FrontityLink from "@frontity/components/link";

const SimpleCTA = ({ state, libraries, actions, ...props }) => {
  // Partners Slider Fields
  const Html2React = libraries.html2react.Component;

  const title = props?.title;
  const bgColor = props?.bg;
  const content = props?.content;
  const button = props?.btn;

  //GTM EVENT
  const ButtonEvent = (btn) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: btn,
        label: "Simple CTA",
      },
    });

  return (
    <Contenedor
      width="100%"
      maxWidth="1100px"
      mx="auto"
      py={{ base: "35px", md: "90px" }}
      pb={{ base: "50px", md: "90px" }}
      px={{ base: "20px", md: "0" }}
    >
      <Wrapper
        width="100%"
        bg="#150f35"
        py={{ base: "50px", md: "30px" }}
        px={{ base: "32px", md: "50px" }}
        direction={{ base: "column", md: "row" }}
        borderRadius="8px"
      >
        <ContentWrapper
          direction="column"
          width="100%"
          justifyContent="space-between"
          textAlign={{ base: "center", md: "initial" }}
        >
          {title && (
            <Heading
              fontSize="33px"
              lineHeight="42px"
              color="tamkeen.50"
              mb="5px"
            >
              {title}
            </Heading>
          )}
          {content && (
            <Text
              fontSize="18px"
              lineHeight="30px"
              color="tamkeen.50"
              fontWeight="400"
              maxWidth="700px"
            >
              <Html2React html={content} />
            </Text>
          )}
        </ContentWrapper>
        <ButtonContainer
          display="flex"
          mt={{ base: "32px", md: "0" }}
          width="100%"
          justifyContent={{ base: "center", md: "flex-end" }}
        >
          {button && (
            <MainButton
              link={button?.url}
              onClick={() => ButtonEvent(button?.title)}
            >
              {button?.title}
            </MainButton>
          )}
        </ButtonContainer>
      </Wrapper>
    </Contenedor>
  );
};
export default connect(SimpleCTA);

const Contenedor = styled(Flex)`
  /* backdrop-filter: blur(5px); */
`;

const ContentWrapper = styled(Flex)``;

const Wrapper = styled(Flex)``;

const ButtonContainer = styled(Flex)`
  align-items: center;
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
