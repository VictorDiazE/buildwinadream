import { connect, decode } from "frontity";
import React from "react";
import { Container, Flex, chakra, Text } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import svg from "../styles/svg/Scroll.svg";

const Icon = chakra(Image);

const ScrollDown = ({ state, libraries, actions, props }) => {
  // Partners Slider Fields
  const options = state?.source?.data["acf-options-page/"]?.acf;

  return (
    <Flex
      width="100%"
      maxWidth="120px"
      alignItems="center"
      mx={{ base: "auto", md: "inherit" }}
      className="scroll-down"
    >
      <Icon maxWidth="40px" width="100%" src={svg} className="" mr="15px" />
      <Text width="100%" fontSize="11px" lineHeight="18px" color="tamkeen.400">
        Scroll Down
      </Text>
    </Flex>
  );
};
export default connect(ScrollDown);
