import { connect, styled, decode } from "frontity";
import { React, useEffect, useState } from "react";
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
import RewardBigCard from "../cards/RewardBigCard";
import RewardCard from "../cards/RewardCard";
import RewardsSlider from "../sliders/RewardsSlider";

const SectionImage = chakra(Image);

const ExclusiveRewards = ({ actions, state, libraries, ...props }) => {
  const Html2React = libraries.html2react.Component;

  const bg = props?.bg?.url;
  const bgMobile = props?.bgMobile?.url;
  const bgGradient = props?.bgGradient;
  const title = props?.title;
  const content = props?.content;
  const description = props?.description;
  const marquee = props?.marquee;
  const items = props?.Rewards;
  const date = props?.date;
  const link = props?.link;

  return (
    <Container
      bgImage={{
        base: bgGradient + ",url(" + bgMobile + ")",
        md: bgGradient + ",url(" + bg + ")",
      }}
      bgPosition="center"
      bgColor=""
      bgSize="cover"
      width="100%"
      minH="800px"
      py="75px"
      alignItems="flex-end"
      direction="column"
      overflow="hidden"
      position="relative"
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
        templateColumns={{ base: "repeat(1 , 1fr)", md: "repeat(2, 1fr)" }}
        gap={{ base: "4px", md: "50px" }}
        maxWidth="1200px"
        mx="auto"
        mt="-150px"
        w="100%"
        position="relative"
        zIndex="3"
        overflow="hidden"
      >
        <ContentContainer
          justifyContent="center"
          direction="column"
          w="100%"
          px="30px"
        >
          <div className="content-wrapper">
            {title && (
              <Title
                as="h5"
                color="tamkeen.700"
                fontSize={{ base: "32px", md: "60px" }}
                lineHeight={{ base: "30px", md: "78px" }}
                fontWeight="700"
                mb={{ base: "20px", md: "10px" }}
              >
                {title}
              </Title>
            )}
            {content && (
              <Content color="tamkeen.700" mb="50px">
                <Html2React html={content} />
              </Content>
            )}
          </div>
        </ContentContainer>

        {/* Cargamos la tarjeta del más reciente Reward */}
        <ImageContainer
          w="100%"
          display="flex"
          justifyContent={{ base: "center", md: "flex-end" }}
          px="30px"
        >
          <RewardBigCard width="100%" height="100%" date={date} link={link} />
        </ImageContainer>
      </Wrapper>
      <Slider maxWidth="1200px" mx="auto" px="30px">
        {description && (
          <Description color="tamkeen.500">{description}</Description>
        )}
        <RewardsSlider items={items} />
      </Slider>
    </Container>
  );
};
export default connect(ExclusiveRewards);

const Container = styled(Flex)`
  marquee {
  }
  .marquee {
    height: 200px;
    width: 100%;
    overflow: hidden;
    position: relative;
    margin-bottom: 35px;
    @media only screen and (min-width: 768px) {
      margin-bottom: 0px;
    }
  }

  .marquee div {
    display: block;
    width: 260%;
    height: 200px;
    position: absolute;
    overflow: hidden;
    animation: marquee 8s linear infinite;
    @media only screen and (min-width: 768px) {
      width: 200%;
    }
  }

  .marquee span {
    float: left;
    width: 50%;
    font-weight: 900;
    font-size: 40px;
    line-height: 100%;
    text-transform: uppercase;
    color: #ffffff78;
    @media only screen and (min-width: 430px) {
      font-size: 38px;
    }
    @media only screen and (min-width: 580px) {
      font-size: 50px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 96px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 96px;
    }
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

const Slider = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentContainer = styled(Flex)`
  width: 100%;
  /*   .content-wrapper {
    @media only screen and (min-width: 768px) {
      max-width: 550px;
    }
  } */
`;

const ImageContainer = styled(Box)`
  width: 100%;
  margin-bottom: 50px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 50px;
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
  font-size: 16px;
  line-height: 24px;
  text-align: left;
`;

const Description = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 15px;
`;

const AnimatedHeading = styled.marquee`
  font-weight: 900;
  font-size: 96px;
  line-height: 100%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.1);
`;
