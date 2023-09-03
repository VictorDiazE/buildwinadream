import { connect, styled, decode } from "frontity";
import React from "react";
import GoalCard from "../cards/GoalCard";
import {
  Flex,
  Text,
  Heading,
  chakra,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";

const OmanSupport = ({ state, libraries, actions, ...props }) => {
  const Html2React = libraries.html2react.Component;

  const title = props?.title;
  const subtitle = props?.subtitle;
  const content = props?.content;
  const bg = props?.bg?.url;
  const bgMobile = props?.bgMobile?.url;

  // Mapping content CARDS

  var contentcards;
  {
    content &&
      (contentcards = content?.map(({ index, title, icon, content }) => {
        var img = icon?.url;
        return (
          <GridItem colSpan={2} key={index}>
            <GoalCard title={title} content={content} icon={icon} />
          </GridItem>
        );
      }));
  }

  return (
    <Container as="section" bgPosition="center" bgSize="cover">
      <Wrapper
        maxWidth="1200px"
        mx="auto"
        width="100%"
        px="30px"
        minHeight="600px"
        py="80px"
      >
        <HeadingWrapper
          textAlign={{ md: "left", base: "left" }}
          direction="column"
          width="100%"
          mb="40px"
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
        <Content
          w="100%"
          templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
          gap={6}
        >
          {content && contentcards}
        </Content>
      </Wrapper>
    </Container>
  );
};
export default connect(OmanSupport);

const Container = styled(Box)``;

const HeadingWrapper = styled(Flex)``;

const Content = styled(Grid)``;

const Wrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
`;
