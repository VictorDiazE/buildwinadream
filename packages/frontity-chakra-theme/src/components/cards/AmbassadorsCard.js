import { connect, styled, css } from "frontity";
import { Box, Flex, Heading } from "@chakra-ui/react";

const AmbassadorsCard = ({ state, ...props }) => {
  const AmbassadorId = props.id;
  const data = state.source?.ambassadors[AmbassadorId];
  const name = data?.title.rendered;
  const featuredImage = data?.featured_media;
  const featuredImageUrl = data?.featured_image_src;
  var cardImage;
  {
    featuredImage && (cardImage = state.source.attachment[featuredImage]);
  }

  return (
    <>
      <CardContainer
        textAlign="center"
        minHeight={{ base: "420px", md: "580px" }}
        /*    bgImage={
          "linear-gradient(3.67deg, #150f35 2.36%, rgba(71, 85, 105, 0) 63.81%), url(" +
          cardImage?.source_url +
          ")"
        } */
        bgSize="cover"
        alignItems="flex-end"
        justifyContent="center"
        className="ambassador-card"
        width="100%"
        height="100%"
        _before={{
          bgImage:
            "linear-gradient(3.67deg, #150f35 2.36%, rgba(71, 85, 105, 0) 63.81%), url(" +
            featuredImageUrl +
            ")",
        }}
      >
        <Heading
          as="h4"
          fontSize={{ base: "33px", md: "33px" }}
          lineHeight={{ base: "42px" }}
          color="tamkeen.200"
          mb="45px"
          fontWeight="400"
          maxWidth="250px"
          px="15px"
          right={{ base: "25px", md: "45px" }}
          className="heading-card"
        >
          {name}
        </Heading>
      </CardContainer>
    </>
  );
};

export default connect(AmbassadorsCard);

const CardContainer = styled(Flex)`
  position: relative;
  transform: skew(-10deg);
  overflow: hidden;
  .heading-card {
    position: relative;
    transform: skew(10deg);
    right: auto;
  }
  transition: ease-in-out 500ms;
  ::before {
    transition: ease-in-out 500ms;
    content: "";
    position: absolute;
/*     top: 0;
    left: 0px; */
    width: 150%;
    min-height: 420px;
    @media only screen and (min-width: 768px) {
      min-height: 580px;
    }
    z-index: -1;
    transform: skew(10deg) scale(1);
    transform-origin: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    }
    :hover::before{
      @media only screen and (min-width: 768px) {
        min-height: 630px;
      }
    }


  }
`;
