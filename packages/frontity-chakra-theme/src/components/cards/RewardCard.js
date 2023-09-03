import { connect, styled, css } from "frontity";
import React from "react";
import { Box, Flex, Heading, chakra, Badge } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import FrontityLink from "../link";

const CardImage = chakra(Image);

const RewardCard = ({ state, libraries, actions, ...props }) => {
  const reward = props?.single;
  const title = props?.title;
  const img = props?.image;
  const date = props?.date;
  const image = state.source.attachment[img]?.source_url;
  var bgImage;

  {
    image && (bgImage = image);
  }
  const hoy = Date.now();
  const fecha = new Date(date);
  const dateUnix = fecha.getTime();
  const fn = (a, b) => (a < b ? true : false);
  var resultado = fn(hoy, dateUnix);

  var mes = date.getMonth(dateUnix);

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <CardContainer
        minHeight="285px"
        width="100%"
        height="100%"
        direction="column"
        maxWidth="280px"
        borderRadius="12px"
        position="relative"
      >
        <ImageContainer
          height="100%"
          /*    bgImage={
            "linear-gradient(3.67deg, #150f35 2.36%, rgba(71, 85, 105, 0) 63.81%), url(" +
            bgImage +
            ")"
          } */
          bgSize="cover"
        >
          <Month
            variant="solid"
            borderRadius="4px"
            fontSize="14px"
            lineHeight="18px"
            color="tamkeen.50"
            padding="10px"
            zIndex="3"
          >
            {months[mes]}
          </Month>

          {!resultado && (
            <CardImage
              maxWidth="100%"
              height="100%"
              filter="grayscale(100%)"
              src={bgImage}
              className=""
            />
          )}
          {resultado && (
            <CardImage
              height="100%"
              maxWidth="100%"
              src={bgImage}
              className=""
            />
          )}
        </ImageContainer>
        <Content
          px="40px"
          bg="tamkeen.200"
          height="100%"
          minHeight="100px"
          alignItems="center"
        >
          <Heading
            as="h6"
            fontSize={{ base: "18px", md: "18px" }}
            lineHeight={{ base: "30px" }}
            color="#150f35"
            fontWeight="600"
          >
            {title}
            {resultado}
            {/*       {title} */}
          </Heading>
        </Content>
      </CardContainer>
    </>
  );
};

export default connect(RewardCard);

const CardContainer = styled(Flex)`
  overflow: hidden;
`;
const Content = styled(Flex)``;
const ImageContainer = styled(Box)``;

const Month = styled(Badge)`
  position: absolute;
  top: 20px;
  right: 12px;
  background-color: #4c43cd;
  text-transform: uppercase;
`;

const MainButton = styled(FrontityLink)`
  display: flex;
  justify-content: center;
  background: #4c43cd;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 35px;
  border-radius: 40px;
  border: 2px solid #4c43cd;
  height: fit-content;
  transition: ease-in-out 500ms;
  :hover {
    background: #fff;
    color: #4c43cd;
    border-color: #fff;
  }
`;

const ButtonContainer = styled(Flex)`
  max-width: 230px;
  flex-direction: column-reverse;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 100%;
  }
`;
