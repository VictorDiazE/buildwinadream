import { connect, styled, decode } from "frontity";
import React from "react";
import {
  Flex,
  Text,
  Heading,
  chakra,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";

import GoalCard from "../../cards/GoalCard";

const OurGoals = ({ state, libraries, actions, ...props }) => {
  const Html2React = libraries.html2react.Component;

  const title = props?.title;
  const subtitle = props?.subtitle;
  const goals = props?.goals;
  const bg = props?.bg?.url;
  const bgMobile = props?.bgMobile?.url;
  const bgGradient = props?.bgGradient;

  // Mapping GOALS CARDS

  var goalscards;
  {
    goals &&
      (goalscards = goals?.map(({ index, title, icon, content }) => {
        return (
          <GridItem colSpan={2} key={index}>
            <GoalCard title={title} content={content} icon={icon} />
          </GridItem>
        );
      }));
  }

  var gradient = bgGradient + ", url(" + bg + ")";
  var gradientMobile = bgGradient + ", url(" + bgMobile + ")";

  return (
    <Container
      as="section"
      bgImage={{ base: gradientMobile, md: gradient }}
      bgPosition="center"
      bgSize="cover"
    >
      <Wrapper
        maxWidth="1200px"
        mx="auto"
        width="100%"
        px="30px"
        minHeight="600px"
        py="80px"
      >
        <HeadingWrapper
          textAlign={{ md: "center", base: "left" }}
          direction="column"
          width="100%"
          mb="40px"
          justifyContent="center"
        >
          {title && (
            <Heading
              as="h2"
              fontWeight="600"
              fontSize={{ md: "44px", base: "32px" }}
              lineHeight={{ base: "44px", md: "52px" }}
              color={{ md: "#fff", base: "#dee4ed" }}
              mb="10px"
            >
              {title}
            </Heading>
          )}
          {subtitle && (
            <Text
              fontSize={{ md: "25px", base: "24px" }}
              lineHeight={{ md: "32px", base: "34px" }}
              color={{ md: "#fff", base: "#dee4ed" }}
            >
              {subtitle}
            </Text>
          )}
        </HeadingWrapper>
        <Goals
          w="100%"
          templateColumns={{ base: "1fr", md: "repeat(4,1fr)" }}
          gap={6}
        >
          {goals && goalscards}
        </Goals>
      </Wrapper>
    </Container>
  );
};
export default connect(OurGoals);

const Container = styled(Box)``;

const HeadingWrapper = styled(Flex)``;

const Goals = styled(Grid)``;

const Wrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
`;
