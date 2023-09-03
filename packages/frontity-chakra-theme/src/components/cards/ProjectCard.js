import { connect, styled, css } from "frontity";
import React from "react";
import { Box, Flex, Heading, chakra, Badge } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import FrontityLink from "../link";

/* const CardImage = chakra(Image); */

const ProjectCard = ({ state, libraries, actions, ...props }) => {
  const title = props?.title;
  const img = props?.img;
  const image = state.source.attachment[img];
  const link = props?.link;

  var bgImage;

  {
    image && (bgImage = image);
  }

  return (
    <>
      <FrontityLink link={link}>
        <CardContainer
          minHeight="270px"
          width="100%"
          height="100%"
          direction="column"
          /*         maxWidth="280px" */
          borderRadius="12px"
          position="relative"
        >
          <ImageContainer
            height="100%"
            bgImage={"url(" + image?.source_url + ")"}
            bgSize="cover"
          >
            {/*           <CardImage
            height="100%"
            maxWidth="100%"
            src={image?.source_url}
            className=""
          /> */}
          </ImageContainer>
          <Content
            px="40px"
            bg="tamkeen.200"
            minHeight="40%"
            /*    minHeight="100px" */
            alignItems="flex-start"
            py="23px"
          >
            <Heading
              as="h6"
              fontSize={{ base: "18px", md: "18px" }}
              lineHeight={{ base: "30px" }}
              color="#150f35"
              fontWeight="600"
            >
              {title}
            </Heading>
          </Content>
        </CardContainer>
      </FrontityLink>
    </>
  );
};

export default connect(ProjectCard);

const CardContainer = styled(Flex)`
  overflow: hidden;
`;
const Content = styled(Flex)``;
const ImageContainer = styled(Box)``;
