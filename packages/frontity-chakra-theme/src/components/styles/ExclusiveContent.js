import { connect, styled, decode } from "frontity";
import React from "react";
import { Flex, chakra, Text } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import svg from "../styles/svg//locked.svg";

const Icon = chakra(Image);

const ExclusiveContent = ({ state }) => {
  return (
    <Container
      bgColor="#FFFFFF"
      borderRadius="3px"
      padding="8px 2px 8px 12px"
      alignItems="center"
      maxWidth="190px"
    >
      <Icon maxWidth="15px" width="100%" src={svg} className="" mr="8px" />
      <Text
        width="100%"
        fontSize="12.5px"
        mt="2px"
        fontWeight="600"
        lineHeight="18px"
        textTransform="uppercase"
        color="#4C43CD"
      >
        Exclusive Content
      </Text>
    </Container>
  );
};
export default connect(ExclusiveContent);

const Container = styled(Flex)``;
