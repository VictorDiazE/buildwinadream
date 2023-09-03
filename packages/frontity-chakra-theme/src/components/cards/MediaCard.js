import { connect, styled, css } from "frontity";
import React from "react";
import { Box, Flex, Heading, chakra, Badge, Text } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import FrontityLink from "../link";

const CardImage = chakra(Image);

const MediaCard = ({ state, libraries, actions, ...props }) => {
  const title = props?.title;
  const subtitle = props?.subtitle;
  const bg = props?.bg;
  const image = state.source.attachment[bg]?.source_url;
  const link = props?.link;
  const duration = props?.duration;

  return (
    <>
      <CardContainer
        minHeight="363px"
        width="100%"
        height="100%"
        direction="column"
        maxWidth="330px"
        borderRadius="8px"
        position="relative"
        mx="auto"
        backgroundImage={
          "linear-gradient(180deg, rgba(71, 85, 105, 0) 0%, rgba(30, 41, 59, 0.92) 77.6%), url(" +
          image +
          ")"
        }
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Content
          px="24px"
          py="26px"
          height="100%"
          minHeight="100px"
          direction="column"
          justifyContent="flex-end"
        >
          <Heading
            as="h6"
            fontSize={{ base: "18px", md: "18px" }}
            lineHeight={{ base: "30px" }}
            color="#dee4ed"
            fontWeight="400"
            mb="5px"
          >
            {title}
          </Heading>
          {subtitle && (
            <Text
              fontSize={{ base: "14px", md: "14px" }}
              lineHeight={{ base: "22px" }}
              color="#dee4ed"
              fontWeight="400"
              mb="16px"
            >
              {subtitle}
            </Text>
          )}
          <LinkContainer w="100%" justifyContent="space-between">
            <CardLink link={link}> View More</CardLink>
            {duration && (
              <Text fontSize="12px" lineHeight="18px" color="#dee4ed">
                {duration}
              </Text>
            )}
          </LinkContainer>
        </Content>
      </CardContainer>
    </>
  );
};

export default connect(MediaCard);

const CardContainer = styled(Flex)`
  overflow: hidden;
`;
const Content = styled(Flex)``;
const LinkContainer = styled(Flex)``;

const Month = styled(Badge)`
  position: absolute;
  top: 20px;
  right: 12px;
  background-color: #8684b1;
  text-transform: uppercase;
`;

const CardLink = styled(FrontityLink)`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  text-decoration: underline;
  transition: ease-in-out 500ms;
  :hover {
    color: #4c43cd;
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
