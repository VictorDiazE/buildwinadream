import { connect, styled, decode, css } from "frontity";
import React, { useState, useEffect } from "react";
import {
  chakra,
  Box,
  Flex,
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

import Image from "@frontity/components/image";
import play from "../styles/svg/play2.svg";
import GenericEvent from "../gtm/GenericEvent";

const IconoVideo = chakra(Image);

const VideoPlay = ({ state, actions, libraries, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const videoUrl = props?.video;
  const label = props?.label;
  /*   const videoName = props?.name; */
  var videoName = "hola";

  //GTM EVENT
  const SiteLogoEvent = (videoUrl) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "video",
        action: videoUrl,
        label: label,
      },
    });

  return (
    <Contenedor m="auto">
      <Button
        variant="ghost"
        _hover={{ bg: "transparent", border: "transparent" }}
        _active={{ bg: "transparent", border: "transparent" }}
        _focus={{ bg: "transparent", border: "transparent" }}
      >
        <IconoVideo
          src={play}
          onClick={() => {
            onOpen();
            SiteLogoEvent(videoUrl);
          }}
        />
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
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent
          my="auto"
          bg="tamkeen.900"
          py="20px"
          px="40px"
          minWidth="75vw"
        >
          <ModalHeader></ModalHeader>
          <AspectRatio width="100%" ratio={16 / 9}>
            <iframe
              title="naruto"
              width="100%"
              src={videoUrl}
              allowFullScreen
              autoplay
            />
          </AspectRatio>
          <ModalCloseButton color={"white"} />

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Contenedor>
  );
};
export default connect(VideoPlay);

const Contenedor = styled(Flex)`
  .chakra-modal__close-btn {
    color: white !important;
  }
  button {
    color: white !important;
    @media only screen and (min-width: 768px) {
      margin-top: 100px;
    }
  }
`;
