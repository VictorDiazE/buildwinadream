import { Box, Flex, FormLabel, Heading, Input } from "@chakra-ui/react";
import { connect, styled } from "frontity";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { extendTheme } from "@chakra-ui/react";

const Contact = ({ state, actions, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const data = state.source.get(state.router.link);
  const id = data.id;
  const page = state.source[data.type][id];
  const mediaId = page?.featured_media;
  const featureMedia = state.source.attachment[mediaId]?.source_url;
  const acf = state.source[data.type][id]?.acf;
  const contactTitle = acf?.contact_title;
  const contactContent = acf?.contact_content;

  const FieldInput = ({ placeholder, type, label }) => {
    return (
      <>
        <FormLabel paddingLeft={"15px"} paddingTop={"16px"}>
          {label}
        </FormLabel>
        <Input
          border={"2px solid #dee4ed"}
          borderRadius={"40px"}
          fontSize={"12px"}
          lineHeight={"18px"}
          type={type}
          placeholder={placeholder}
        />
      </>
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
      >
        <Flex
          width="full"
          bgGradient={{
            base: `linear(to-l, loginLeft 0%, loginRigth 100%)`,
          }}
          backgroundImage={state.theme.isMobile ? null : featureMedia}
          bgRepeat={"no-repeat"}
          bgPos={"right"}
          backgroundSize={"contain"}
          minH={"80vh"}
        >
          <Flex
            maxW={"1200px"}
            width={"100%"}
            margin={"0 auto"}
            padding={"30px"}
            color={"white"}
          >
            <Boxing p={2} width={state.theme.isMobile ? "100%" : "50%"}>
              <Box>
                <Heading
                  paddingTop={"123px"}
                  as="h1"
                  fontSize={"24.88px"}
                  lineHeight={"36px"}
                  fontWeight={"600"}
                  noOfLines={1}
                >
                  {contactTitle}
                </Heading>
                <Html2React html={contactContent} />
              </Box>
            </Boxing>
            {state.theme.isMobile ? null : <Box width={"50%"} />}
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
};

export default connect(Contact);

const Boxing = styled(Box)`
  @media only screen and (min-width: 768px) {
    margin: auto;
  }
  .error-message {
    padding-left: 0;
    padding-right: 0;
    border: none;
    font-size: 18px;
    color: #f00;
  }
  .form-div {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    margin-top: 17px;
  }
  label {
    font-size: 16px;
    font-weight: 500;
    color: white;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .success-message {
    padding-left: 0;
    padding-right: 0;
    border: none;
    font-size: 18px;
    color: #00ff99;
  }
  .separador {
    margin-top: 25px;
  }
  .important {
    color: #e53e3e;
  }
  textarea {
    font-size: 16px;
    width: 100%;
    padding: 15px 12px;
    height: 150px;
    border: 2px solid #dee4ed;
    border-radius: 40px;
    background-color: transparent;
  }
  .wpcf7-text {
    border: 2px solid #dee4ed;
    padding: 8px 15px;
    border-radius: 40px;
    background-color: transparent;
    width: 100%;
    font-size: 16px;
  }
  .wpcf7-list-item-label {
    margin-left: 10px;
    font-size: 16px;
  }
  .wpcf7-list-item {
    margin-right: 20px;
    font-size: 16px;
  }
  .wpcf7-select {
    border-radius: 40px;
    background-color: transparent;
    font-size: 16px;
    width: 100%;
    padding: 8px 15px;
    border: 2px solid #dee4ed;
  }
  .wpcf7-submit {
    width: 100%;
    margin-top: 15px;
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
    cursor: pointer;
    :hover {
      background: #fff;
      color: #4c43cd;
      border-color: #fff;
    }
  }
`;
