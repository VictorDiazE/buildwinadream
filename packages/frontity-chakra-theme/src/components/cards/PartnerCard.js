import { connect, styled, css } from "frontity";
import React from "react";
import { chakra } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import FrontityLink from "../link";

const CardImage = chakra(Image);
const CardLink = chakra(FrontityLink);

const PartnerCard = ({ state, libraries, actions, ...props }) => {
  const featuredImage = props?.img;
  const PartnerLink = props?.link;
  var cardImage;
  {
    featuredImage && (cardImage = state.source.attachment[featuredImage]);
  }

  return (
    <>
      <CardLink
        width="100%"
        height="100%"
        borderRadius="8px"
        link={PartnerLink}
      >
        <CardImage
          src={cardImage?.source_url}
          width="100%"
          alt={cardImage?.alt_text}
          borderRadius="8px"
          id={cardImage?.id}
        />
      </CardLink>
    </>
  );
};

export default connect(PartnerCard);
