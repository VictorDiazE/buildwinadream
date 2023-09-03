import { connect, styled, decode, css } from "frontity";
import React, { useState, useEffect } from "react";
import {
  chakra,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  AspectRatio,
} from "@chakra-ui/react";
import FrontityLink from "@frontity/components/link";

import Image from "@frontity/components/image";
import play from "../styles/svg/play2.svg";
const IconoVideo = chakra(Image);

const ExclusiveContentModal = ({ state, actions, libraries, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = state.source.data["acf-options-page/"]?.acf;
  const Html2React = libraries.html2react.Component;
  const readmore = theme?.exclusive_link;
  const title = theme?.exclusive_modal?.title;
  const content = theme?.exclusive_modal?.content;
  const link = theme?.exclusive_modal?.button;

  //GTM EVENT
  const ButtonEvent = (link) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: link,
        label: "Exclusive Content MODAL",
      },
    });

  return (
    <Contenedor>
      <Button
        variant="ghost"
        _hover={{ bg: "transparent", border: "transparent" }}
        _active={{ bg: "transparent", border: "transparent" }}
        _focus={{ bg: "transparent", border: "transparent" }}
        fontSize="14px"
        lineHeight="18px"
        fontWeight="400"
        textDecoration="underline"
        px="0"
        height="18px"
        onClick={onOpen}
      >
        View More
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        my="auto"
        color="white"
        styles={css`
          svg {
            color: white !important;
          }
        `}
      >
        <ModalOverlay bg="rgba(15, 23, 42, 0.62)" backdropFilter="blur(10px)" />
        <ModalContent
          my="auto"
          bg="#fff"
          py="20px"
          px="40px"
          width="100%"
          maxWidth="950px"
          mx="30px"
          textAlign="center"
          display="flex"
        >
          <ModalHeader>
            <ModalCloseButton color={"black"} />
          </ModalHeader>
          {title && (
            <Heading
              as="h5"
              fontSize="25px"
              lineHeight="36px"
              fontWeight="600"
              color="#150f35"
              width="100%"
              mb="17px"
            >
              {title}
            </Heading>
          )}
          <Box>
            <Html2React html={content} />
          </Box>
          <ButtonContainer
            display="flex"
            mt={{ base: "17px", md: "17px" }}
            width="100%"
            justifyContent={{ base: "center", md: "center" }}
          >
            {link && (
              <MainButton
                link={link?.url}
                onClick={() => ButtonEvent(link?.title)}
              >
                {link?.title}
              </MainButton>
            )}
          </ButtonContainer>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Contenedor>
  );
};
export default connect(ExclusiveContentModal);

const Contenedor = styled(Flex)`
  .chakra-modal__close-btn {
  }
  button {
    color: white !important;
  }
`;

const ButtonContainer = styled(Flex)`
  align-items: center;
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
