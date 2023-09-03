import { connect, styled, decode } from "frontity";
import React from "react";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import PartnersLogosSlider from "../sliders/PartnersLogosSlider";

const PartnersLogos = ({ state, libraries, actions, ...props }) => {
  // Partners Slider Fields
  const options = state?.source?.data["acf-options-page/"]?.acf;
  const partners = options?.partners;
  const title = props?.title;
  const subtitle = props?.subtitle;
  const bg = props?.bg;
  var bgColor = bg?.bg_color;
  var bgGradient = bg?.bg_gradient;

  return (
    <Flex width="100%" direction="column" bg={bgGradient + "," + bgColor}>
      <HeadingWrapper
        textAlign={{ md: "center", base: "center" }}
        direction="column"
        width="100%"
        pt="30px"
        px="30px"
        alignItems="center"
      >
        {title && (
          <Heading
            as="h2"
            fontWeight="600"
            fontSize={{ md: "33px", base: "32px" }}
            lineHeight={{ base: "44px", md: "52px" }}
            color={{ md: "#fff", base: "#fff" }}
            mb="10px"
          >
            {title}
          </Heading>
        )}
        {subtitle && (
          <Text
            fontSize={{ md: "25px", base: "18px" }}
            lineHeight={{ md: "32px", base: "24px" }}
            color={{ md: "#fff", base: "#dee4ed" }}
            maxWidth="800px"
          >
            {subtitle}
          </Text>
        )}
      </HeadingWrapper>
      <PartnersLogosSlider partners={partners} />
    </Flex>
  );
};
export default connect(PartnersLogos);

const HeadingWrapper = styled(Flex)``;
