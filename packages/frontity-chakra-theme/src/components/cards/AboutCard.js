import { connect, styled, css } from "frontity";
import React from "react";
import { Box, Flex, Heading, chakra, Badge, Text } from "@chakra-ui/react";
import Image from "@frontity/components/image";

const CardImage = chakra(Image);

const AboutCard = ({ state, libraries, actions, ...props }) => {
  const title = props?.title;
  const content = props?.content;
  const bg = props?.bg;

  return (
    <>
      <CardContainer
        minHeight="470px"
        width="100%"
        height="100%"
        borderRadius="8px"
        position="relative"
        bgImage={
          "linear-gradient(180.19deg, #4c43cd 27.02%, rgba(255, 255, 255, 0) 60%), url(" +
          bg +
          ")"
        }
        bgPosition="center"
        bgSize="cover"
        px={{ base: "24px", md: "25px" }}
        py="36px"
        direction={{ base: "column", md: "row" }}
      >
        <Content
          width="100%"
          direction="column"
          textAlign="center"
          alignItems="center"
        >
          <Heading
            as="h5"
            fontSize={{ base: "25px", md: "25px" }}
            lineHeight={{ base: "36px", md: "36px" }}
            color="white"
            fontWeight="600"
            mb="12px"
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

export default connect(AboutCard);

const CardContainer = styled(Flex)`
  backdrop-filter: blur(15px);
`;
const Content = styled(Flex)``;
