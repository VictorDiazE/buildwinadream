import { connect, styled, decode } from "frontity";
import React from "react";
import { Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import FrontityLink from "../link";
import TestimonialSlider from "../sliders/TestimonialSlider";

const Testimonials = ({ state, libraries, ...props }) => {
  // Testimonials Slider Fields
  const items = props?.items;
  const bg = props?.bg;

  return (
    <Contenedor
      width="100%"
      maxWidth="1200px"
      mx="auto"
      py={{ base: "50px", md: "75px" }}
      px={{ base: "0", md: "30px" }}
      borderRadius="8px"
      direction={{ base: "column", md: "row" }}
    >
      <TestimonialSlider items={items} />
    </Contenedor>
  );
};
export default connect(Testimonials);

const Contenedor = styled(Flex)``;
