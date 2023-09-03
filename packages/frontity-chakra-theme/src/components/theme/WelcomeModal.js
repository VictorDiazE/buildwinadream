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
import FormAccount from "../user-data/forms";
import { motion, AnimatePresence } from "framer-motion";

import Image from "@frontity/components/image";
import play from "../styles/svg/play2.svg";
const IconoVideo = chakra(Image);

const WelcomeModal = ({ state, actions, libraries, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = state.source.data["acf-options-page/"]?.acf;
  const Html2React = libraries.html2react.Component;
  const readmore = theme?.exclusive_link;
  const title = theme?.exclusive_modal?.title;
  const content = theme?.exclusive_modal?.content;
  const link = theme?.exclusive_modal?.button;
  let fields = state.source.page[3324]?.acf;

  useEffect(
    () => {
      actions.source.fetch("/my-account/");
      state.theme.isLogin ? onOpen() : null;
      if (state.theme.isLogin) {
      }
    },
    [state.theme.isLogin],
    5000
  );

  const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <Contenedor my="40px">
      {/*       <Button
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
      </Button> */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        py="40px"
        my="40px"
        color="white"
        styles={css`
          svg {
            color: white !important;
          }
        `}
      >
        <motion.div
          variant={slideIn()}
          initial={isOpen}
          exit={!isOpen}
          transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
        >
          <ModalOverlay
            bg="rgba(15, 23, 42, 0.62)"
            backdropFilter="blur(10px)"
          />
          <ModalContent
            my="35px"
            bg="#fff"
            py="20px"
            width="100%"
            maxWidth="950px"
            mx="30px"
            display="flex"
            maxHeight="92vh"
            overflow="scroll"
          >
            <ModalHeader>
              <ModalCloseButton color={"black"} />
            </ModalHeader>
            {fields && (
              <FormAccount
                fields={fields}
                width={"100%"}
                styles={css`
                  .welcome-text {
                    margin: inherit;
                  } 
                `}
              />
            )}
            <ModalFooter></ModalFooter>
          </ModalContent>
        </motion.div>
      </Modal>
    </Contenedor>
  );
};
export default connect(WelcomeModal);

const Contenedor = styled(Flex)`
  button {
    color: white !important;
  }
  .welcome-text {
    padding-left: 30px;
  }
`;
