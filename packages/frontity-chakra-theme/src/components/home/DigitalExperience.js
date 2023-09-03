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
import Image from "@frontity/components/image";
const SectionImage = chakra(Image);

const DigitalExperience = ({ state, libraries, ...props }) => {
  const Html2React = libraries.html2react.Component;

  const bg = props?.bg?.url;
  const title = props?.title;
  const content = props?.content;
  const btn = props?.btn;
  const img = props?.img;
  const marquee = props?.marquee;

  return (
    <Container
      bgImage={"url(" + bg + ")"}
      bgPosition="center"
      bgColor="linear-gradient(180deg, #150f35 25.75%, #150f35 93.38%);"
      bgSize="cover"
      width="100%"
      minH="500px"
      alignItems="flex-end"
      direction="column"
      pb={{ base: "0", md: "20px" }}
    >
      {marquee && (
        <div className="marquee">
          <div>
            <span> {marquee}</span>
            <span> {marquee}</span>
          </div>
        </div>
      )}

      <Wrapper
        columns={{ base: 0, md: 2 }}
        maxWidth="1440px"
        mx="auto"
        width="100%"
      >
        <ImageContainer w="100%">
          <div className="slider-wrapper">
            <SectionImage maxWidth="100%" src={img} />
          </div>
        </ImageContainer>
        <ContentContainer>
          <div className="content-wrapper">
            {title && (
              <Title
                as="h2"
                color="tamkeen.200"
                fontSize={{ base: "32px", md: "44px" }}
                lineHeight={{ base: "44", md: "54px" }}
                fontWeight="600"
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
                <Button link={btn?.link} variant="base">
                  {btn?.title}
                </Button>
              )}
            </ButtonContainer>
          </div>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};
export default connect(DigitalExperience);

const Container = styled(Flex)`
  marquee {
  }
  .marquee {
    height: 200px;
    width: 100%;

    overflow: hidden;
    position: relative;
  }

  .marquee div {
    display: block;
    width: 200%;
    height: 200px;
    position: absolute;
    overflow: hidden;
    animation: marquee 8s linear infinite;
  }

  .marquee span {
    float: left;
    width: 50%;
    font-weight: 900;
    font-size: 96px;
    line-height: 100%;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.1);
  }

  @keyframes marquee {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }
`;

const Wrapper = styled(SimpleGrid)`
  color: white;
`;

const ContentContainer = styled(Box)`
  width: 100%;
  margin-bottom: 50px;
  padding-left: 24px;
  padding-right: 24px;
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

const Title = styled(Heading)`
  margin-bottom: 10px;
`;

const Content = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #dee4ed;
  text-align: left;
  margin-bottom: 15px;
`;

const AnimatedHeading = styled.marquee`
  font-weight: 900;
  font-size: 96px;
  line-height: 100%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.1);
`;
