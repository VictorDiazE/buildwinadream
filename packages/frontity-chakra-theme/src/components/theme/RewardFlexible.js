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

const RewardFlexible = ({ state, libraries, actions, ...props }) => {
  const Html2React = libraries.html2react.Component;

  const bg = props?.bg;
  const bgMobile = props?.bgMobile;
  const title = props?.title;
  const subtitle = props?.subtitle;
  const content = props?.content;
  const btn = props?.btn;
  const readmore = props?.readmore;
  const isMobile = props?.isMobile;
  const aligned = props?.align;
  var background = bg?.url;

  var justified;

  {
    aligned &&
      (justified = aligned == "text_right" ? "flex-end" : "flex-start");
  }

  var bgDesktop = "url(" + background + ")";

  var backgroundMobile = "url(" + bgMobile?.url + ")";

  //GTM EVENT
  const ButtonEvent = (btn) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: btn,
        label: "Reward Flexible",
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
    >
      <Wrapper px="30px" maxWidth="1200px" justifyContent={justified}>
        <ContentContainer direction="column">
          {title && (
            <Title
              as="h2"
              color="tamkeen.200"
              fontSize={{ base: "32px", md: "44px" }}
              lineHeight={{ base: "44px", md: "54px" }}
              fontWeight="600"
              mb="15px"
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
            <Content color="tamkeen.50">
              <Html2React html={content} />
            </Content>
          )}
          {readmore && (
            <ReadMore link={readmore?.url}> {readmore?.title}</ReadMore>
          )}
          <ButtonContainer display="flex" mt="15px">
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
export default connect(RewardFlexible);

const ContentContainer = styled(Flex)`
  max-width: 480px;
  height: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  @media only screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
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
  margin: auto;
  @media only screen and (min-width: 768px) {
    min-height: 600px;
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
