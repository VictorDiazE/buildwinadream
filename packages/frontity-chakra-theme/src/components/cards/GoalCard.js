import { connect, styled, css } from "frontity";
import React from "react";
import { Box, Flex, Heading, chakra, Badge, Text } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import FrontityLink from "../link";

const CardImage = chakra(Image);

const GoalCard = ({ state, libraries, actions, ...props }) => {
  const title = props?.title;
  const content = props?.content;
  const img = props?.icon?.url;

  /*  const title = "Reward football fans";
  const content =
    "Reward their dedication and passion for football with digital contents, exclusive experiences and prizes that will make their dream come true";
 const img = props?.img; 
  const image =
    "https://dev-winadream.pantheonsite.io/wp-content/uploads/2022/07/winner.png"; */

  return (
    <>
      <CardContainer
        minHeight="160px"
        width="100%"
        height="100%"
        borderRadius="8px"
        position="relative"
        background="rgba(255, 255, 255, 0.2);"
        px={{ base: "24px", md: "40px" }}
        py="28px"
        direction={{ base: "column", md: "row" }}
      >
        {img && (
          <Icon mr="23px" mb={{ base: "20px", md: "0" }} minWidth="50px">
            <CardImage src={img} />
          </Icon>
        )}
        <Content width="100%" direction="column">
          <Heading
            as="h5"
            fontSize={{ base: "18px", md: "25px" }}
            lineHeight={{ base: "30px", md: "36px" }}
            color="white"
            fontWeight="600"
            mb="5px"
          >
            {title}
          </Heading>
          {content && (
            <Text
              fontSize={{ base: "14px", md: "14px" }}
              lineHeight={{ base: "24px" }}
              color="white"
              fontWeight="400"
            >
              {content}
            </Text>
          )}
        </Content>
      </CardContainer>
    </>
  );
};

export default connect(GoalCard);

const CardContainer = styled(Flex)`
  backdrop-filter: blur(15px);
`;
const Content = styled(Flex)``;
const Icon = styled(Box)``;
