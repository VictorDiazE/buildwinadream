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
import Image from "@frontity/components/image";
const SponsorImage = chakra(Image);
import FrontityLink from "@frontity/components/link";

const InfoSectionSponsored = ({ state, actions, libraries, ...props }) => {
  const Html2React = libraries.html2react.Component;
  const bg = props?.bg?.url;
  const bgMobile = props?.bgMobile?.url;
  const title = props?.title;
  var align = props?.vertical;
  const btn = props?.btn;
  var tag = props?.tag;
  var subtitle = props?.subtitle;
  var content = props?.content;
  var sponsor = props?.sponsor;
  var fontSize = props?.fontSize;
  var fontSizeMobile = props?.fontSizeMobile;

  //GTM EVENT
  const ButtonEvent = (btn) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: btn,
        label: "Info Section Sponsored",
      },
    });

  return (
    <Flex
      bgImage={{
        md: " url(" + bg + ")",
        base:
          "linear-gradient(180deg, #150f35 18.31%, rgba(30, 41, 59, 0) 100%), url(" +
          bgMobile +
          ")",
      }}
      bgPosition="center"
      bgSize="cover"
      width="100%"
      maxWidth="100%"
      minH="700px"
      mx="auto"
      alignItems="center"
      pb={{ base: "0", md: "0px" }}
    >
      <Wrapper
        maxWidth="1200px"
        mx="auto"
        px="30px"
        width="100%"
        height="fit-content"
        textAlign={{ base: "left", md: "inherit" }}
      >
        <ContentContainer w="100%" alignItems="flex-end">
          <ContentWrapper maxWidth="750px">
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
                  fontSize="18px"
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
                fontSize={{ base: fontSizeMobile, md: fontSize }}
                lineHeight={{ base: fontSizeMobile, md: fontSize }}
                mb="24px"
              >
                {title}
              </Title>
            )}

            {content && <Content color="tamkeen.50">{content}</Content>}
            <ButtonContainer display="flex" mt="32px">
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
        <SponsoredContainer display={{ md: "flex", base: "none" }}>
          <Sponsors
            maxWidth="400px"
            justifyContent="flex-end"
            align={{ base: "flex-start", md: "flex-start" }}
            direction="column"
          >
            <Text color="white" fontSize="10.5px" lineHeight="18px" mb="16px">
              {sponsor?.title}
            </Text>
            <Flex alignItems="flex-start">
              <Box>
                <SponsorImage src={sponsor?.logo?.url} />
              </Box>
            </Flex>
          </Sponsors>
        </SponsoredContainer>
      </Wrapper>
    </Flex>
  );
};
export default connect(InfoSectionSponsored);

const Wrapper = styled(Flex)`
  color: white;
`;

const ContentContainer = styled(Flex)`
  max-width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
const ContentWrapper = styled(Box)`
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const SponsoredContainer = styled(Flex)``;

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
  font-size: 16px;
  line-height: 24px;
  color: #dee4ed;
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 24px;
  }
`;

const Sponsors = styled(Flex)``;

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
  flex-direction: column-reverse;
  @media only screen and (min-width: 768px) {
    margin: auto;
    flex-direction: row;
    max-width: 100%;
  }
`;
