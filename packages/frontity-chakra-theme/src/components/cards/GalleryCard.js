import { connect, styled, css } from "frontity";
import React from "react";
import { Box, chakra } from "@chakra-ui/react";
import Image from "@frontity/components/image";

const CardImage = chakra(Image);

const GalleryCard = ({ state, libraries, actions, ...props }) => {
  const img = props.img;
  /*   console.log(img); */
  return (
    <>
      <CardContainer width="100%" height="100%" borderRadius="8px">
        <CardImage
          src={img?.url}
          width="100%"
          alt={img?.alt}
          borderRadius="8px"
          id={img?.ID}
        />
      </CardContainer>
    </>
  );
};

export default connect(GalleryCard);

const CardContainer = styled(Box)`
  margin-bottom: 10px;
`;
