import { connect, styled, css } from "frontity";
import React from "react";
import { Box, Flex, Heading, chakra, Badge, Text } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import FrontityLink from "../link";

const CardImage = chakra(Image);

const FeaturedArticleCard = ({ state, libraries, actions, ...props }) => {
  const title = props?.title;
  const img = props?.image;
  const link = props?.link;
  const subtitle = props?.subtitle;
  const duration = props?.duration;
  const image = state.source.attachment[img]?.source_url;
  /*   console.log(subtitle);
  console.log(duration); */
  var bgImage;

  {
    image && (bgImage = image);
  }

  return (
    <>
      <CardContainer
        mx={{ base: "auto", md: "34px" }}
        my={{ base: "20px", md: "30px" }}
        minHeight="360px"
        width="100%"
        height="100%"
        direction="column"
        maxWidth={{ base: "330px", md: "344px" }}
        borderRadius="12px"
        position="relative"
      >
        <ImageContainer
          height="50%"
          maxHeight="180px"
          /*    bgImage={
            "linear-gradient(3.67deg, #150f35 2.36%, rgba(71, 85, 105, 0) 63.81%), url(" +
            bgImage +
            ")"
          } */

          bgSize="cover"
        >
          <CardImage height="100%" maxWidth="100%" src={bgImage} className="" />
        </ImageContainer>
        <Content
          px="40px"
          bg="tamkeen.200"
          height="50%"
          minHeight="180px"
          alignItems="center"
        >
          <Heading
            as="h6"
            fontSize={{ base: "18px", md: "18px" }}
            lineHeight={{ base: "30px" }}
            color="#150f35"
            fontWeight="600"
          >
            {title}
            {subtitle && (
              <Text
                fontSize={{ base: "14px", md: "14px" }}
                lineHeight={{ base: "22px" }}
                color="#0F172A"
                fontWeight="400"
                mb="16px"
                paddingTop="5px"
              >
                {subtitle}
              </Text>
            )}
            <LinkContainer w="100%" justifyContent="space-between">
              <CardLink link={link}> View More</CardLink>
              {duration && (
                <Text fontSize="12px" lineHeight="18px" color="#8684b1">
                  {duration}
                </Text>
              )}
            </LinkContainer>
          </Heading>
        </Content>
      </CardContainer>
    </>
  );
};

export default connect(FeaturedArticleCard);

const CardContainer = styled(Flex)`
  overflow: hidden;
  @media only screen and (min-width: 768px) {
  }
`;
const Content = styled(Flex)``;
const ImageContainer = styled(Box)``;

const Month = styled(Badge)`
  position: absolute;
  top: 20px;
  right: 12px;
  background-color: #8684b1;
  text-transform: uppercase;
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

const ButtonContainer = styled(Flex)`
  max-width: 230px;
  flex-direction: column-reverse;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 100%;
  }
`;
const LinkContainer = styled(Flex)``;

const CardLink = styled(FrontityLink)`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #4c43cd;
  text-decoration: underline;
  transition: ease-in-out 500ms;
  :hover {
    color: #4c43cd;
  }
`;
