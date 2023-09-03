import { connect, styled, decode } from "frontity";
import React from "react";
import {
  Container,
  Flex,
  Grid,
  Box,
  Button,
  GridItem,
  Text,
  Heading,
  chakra,
  Link,
} from "@chakra-ui/react";
import VideoPlay from "../theme/VideoPlay";
import FrontityLink from "@frontity/components/link";
import Image from "@frontity/components/image";
const SponsorImage = chakra(Image);

const InfoSection = ({ state, actions, libraries, ...props }) => {
  const Html2React = libraries.html2react.Component;
  const isMobile = state.theme?.isMobile;
  const bg = props?.bg?.url;
  const bgMobile = props?.bgMobile?.url;
  const bgGradient = props?.bgGradient;
  const title = props?.title;
  var align = props?.vertical;
  const fontSize = props?.fontSize;
  const fontSizeMobile = props?.fontSizeMobile;
  const btn = props?.btn;
  var tag = props?.tag;
  var subtitle = props?.subtitle;
  var content = props?.content;
  var video = props?.video;
  var order = props?.position;
  var sponsor = props?.sponsored;

  /*   var justified = "flex-start"; */
  var textAlign;
  //ORDER CONDITIONAL
  if (order == "2") {
    var justified = "flex-end";
    textAlign = "left";
  } else {
    var justified = "flex-start";
    textAlign = "left";
  }

  //GTM EVENT
  const ButtonEvent = (btn) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: btn,
        label: "Info Section",
      },
    });

  return (
    <Flex
      bgImage={{
        md: bgGradient + ", url(" + bg + ")",
        base: bgGradient + ", url(" + bgMobile + ")",
      }}
      bgPosition="center"
      bgSize="cover"
      width="100%"
      maxWidth="100%"
      minH="700px"
      mx="auto"
      alignItems={align}
      pb={{ base: "0", md: "20px" }}
    >
      <Wrapper
        maxWidth="1200px"
        mx="auto"
        px="30px"
        width="100%"
        textAlign={{ base: "left", md: "inherit" }}
        templateColumns={{ md: "repeat(5, 1fr)", base: "1fr" }}
      >
        <ContentContainer
          w="100%"
          alignItems="center"
          colSpan={{ md: "4", base: "1" }}
          order={order}
          justifyContent={justified}
        >
          <ContentWrapper textAlign={textAlign}>
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
                fontWeight="900"
                fontSize={{ base: fontSizeMobile, md: fontSize }}
                lineHeight={{ base: fontSizeMobile, md: fontSize }}
                mb="24px"
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
            {isMobile && video && (
              <VideoContainer mt="50px">
                <VideoPlay video={video} label="Info Section" />
              </VideoContainer>
            )}
          </ContentWrapper>
        </ContentContainer>
        <EmptyContainer
          colSpan={1}
          display="flex"
          alignItems="center"
          height="100%"
          flexDirection="column"
          justifyContent="center"
        >
          {!isMobile && video && (
            <VideoContainer>
              <VideoPlay video={video} label="Info Section" />
            </VideoContainer>
          )}
          {sponsor && (
            <SponsoredContainer display={{ md: "flex", base: "none" }}>
              <Sponsors
                mt="100px"
                maxWidth="400px"
                justifyContent="flex-end"
                align={{ base: "flex-start", md: "flex-start" }}
                direction="column"
              >
                {sponsor?.title && (
                  <Text
                    color="white"
                    fontSize="10.5px"
                    lineHeight="18px"
                    mb="16px"
                  >
                    {sponsor?.title}
                  </Text>
                )}
                <Flex alignItems="flex-start">
                  {sponsor?.sponsor_1 && (
                    <Box mr="5px">
                      <SponsorImage src={sponsor?.sponsor_1?.url} />
                    </Box>
                  )}
                  {sponsor?.sponsor_2 && (
                    <Box ml="5px">
                      <SponsorImage src={sponsor?.sponsor_2?.url} />
                    </Box>
                  )}
                </Flex>
              </Sponsors>
            </SponsoredContainer>
          )}
        </EmptyContainer>
      </Wrapper>
    </Flex>
  );
};
export default connect(InfoSection);

const Wrapper = styled(Grid)`
  color: white;
`;

const ContentContainer = styled(GridItem)`
  display: flex;
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
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    max-width: 750px;
    padding: 50px 0;
  }
`;

const EmptyContainer = styled(GridItem)``;

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
  margin-top: 30px;
  transition: ease-in-out 500ms;
  :hover {
    background: #fff;
    color: #4c43cd;
    border-color: #fff;
  }
`;

const ButtonContainer = styled(Box)`
  max-width: 230px;
  flex-direction: column-reverse;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 100%;
  }
`;

const VideoContainer = styled(Box)``;

const SponsoredContainer = styled(Flex)``;

const Sponsors = styled(Flex)``;
