import React from "react";
import { connect, styled, decode } from "frontity";
import Image from "@frontity/components/image";
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Flex,
  chakra,
} from "@chakra-ui/react";
const Imagen = chakra(Image);

const InstagramFeed = ({ state, libraries, ...props }) => {
  // Get Theme Settings Fields
  const theme = state.source.data["acf-options-page/"]?.acf;

  // Get Theme Settings Instagram Fields
  const instagramTitle = theme?.instagram_title;
  const instagramClaim = theme?.instagram_hashtag;
  const instagramRepeater = theme?.instagram_repeater;
  const align = props?.align;

  var textAlign = "left";

  {
    align && (textAlign = props?.align);
  }
  // Get Instagram Images
  const instagramImages = theme?.instagram_repeater.map(
    (instagramImage, id) => {
      const instagramImg = theme?.instagram_repeater[id].image?.sizes?.medium;
      return (
        <GridItem key={id} colSpan={1}>
          <Box className="instagram-image">
            <div className="instagram-logo"></div>
            <Imagen
              src={instagramImg}
              className="img-fluid img-responsive"
              borderRadius="10px"
            ></Imagen>
          </Box>
        </GridItem>
      );
    }
  );

  return (
    <InstagramContainer>
      <Wrapper
        mx="auto"
        maxWidth="1200px"
        px="30px"
        display="flex"
        direction="column"
        textAlign={textAlign}
      >
        <Text fontSize="16px" lineHeight="24px" color="white" mb="10px">
          {instagramTitle}
        </Text>
        <Text fontSize="33px" lineHeight="42px" color="#8684b1" mb="40px">
          {instagramClaim}
        </Text>
        <Grid
          templateColumns={{ md: "repeat(4, 1fr)", base: "repeat(2, 1fr)" }}
          gap={6}
        >
          {instagramImages}
        </Grid>
      </Wrapper>
    </InstagramContainer>
  );
};

export default connect(InstagramFeed);

const InstagramContainer = styled.section`
  padding: 75px 0;
`;

const Wrapper = styled(Flex)``;
