import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { connect, styled } from "frontity";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { extendTheme } from "@chakra-ui/react";
import ButtonPurpleClick from "../../buttons/ButtonPurpleClick";
import ButtonPurple from "../../buttons/ButtonPurple";
import Link from "@frontity/components/link";

const DeleteAccount = ({ state, actions, libraries }) => {
  const [become, setBecome] = useState(false);
  const data = state.source.get(state.router.link);
  const id = data.id;
  const page = state.source[data.type][id];
  const mediaId = page?.featured_media;
  const featureMedia = state.source.attachment[mediaId]?.source_url;
  const afc = state.source[data.type][id]?.acf;
  const warning = afc?.delete_warning;
  const userID = state.theme.user_id;

  const Html2React = libraries.html2react.Component;

  const register = ({ actions }) => {
    setBecome(true);

    return;
  };

  const formSubmit = ({ state }) => {
    useEffect(() => {
      var isLogin = state.theme.isLogin;
    }, [isLogin]);

    return isLogin;
  };

  const [inputdelete, setInputDelete] = useState("");

  const handleInputChange = (e) => setInputDelete(e.target.value);

  const isNotDisable = inputdelete == "delete account";

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
  const redirect = ({ actions }) => {
    actions.router.set("/login");
  };
  const deleteAccount = () => {
    actions.theme.deleteUser([userID]);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
      >
        {become ? (
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
              margin={"0 auto"}
              padding={"30px"}
              color={"white"}
            >
              <Box width={state.theme.isMobile ? "100%" : "50%"} p="0">
                <Boxing
                  p="0"
                  color="white"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Heading
                    paddingTop={"123px"}
                    as="h1"
                    fontSize={"24.88px"}
                    lineHeight={"36px"}
                    fontWeight={"600"}
                    noOfLines={1}
                  >
                    {afc.second_title_page}
                  </Heading>
                  <br />
                  <Text
                    paddingBottom={"16px"}
                    size="14px"
                    lineHeight={"24px"}
                    fontWeight={"400"}
                  ></Text>
                  <Html2React html={afc.second_page_description} />
                  {/*    <ButtonPurple url={"/"} title={afc.second_button_text} /> */}
                  <Return link="/">Return to homepage</Return>
                </Boxing>
              </Box>
              {state.theme.isMobile ? null : <Box width={"50%"} />}
            </Flex>
          </Flex>
        ) : (
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
              width="100%"
              maxW={"1200px"}
              margin={"0 auto"}
              padding={"30px"}
              color={"white"}
            >
              <Box width={state.theme.isMobile ? "100%" : "50%"}>
                <Box
                  display="flex"
                  justifyContent="center"
                  height="100%"
                  flexDirection="column"
                >
                  <Heading
                    paddingTop={"123px"}
                    as="h1"
                    fontSize={"24.88px"}
                    lineHeight={"36px"}
                    fontWeight={"600"}
                    noOfLines={1}
                    mb="25px"
                  >
                    {page.title.rendered}
                  </Heading>
                  <Text
                    paddingBottom={"16px"}
                    size="16px"
                    lineHeight={"24px"}
                    fontWeight={"400"}
                  >
                    <Html2React html={afc.first_description_desciption} />
                    <Text
                      size="14px"
                      lineHeight={"24px"}
                      fontWeight={"600"}
                    ></Text>
                    {warning && <Html2React html={warning} />}
                  </Text>
                  <FormControl>
                    <Input
                      type="text"
                      value={inputdelete}
                      placeholder={'Type "delete account" to proceed'}
                      border={"2px solid #dee4ed"}
                      borderRadius={"40px"}
                      fontSize={"14px"}
                      lineHeight={"18px"}
                      onChange={handleInputChange}
                    />
                    <ButtonP
                      variant="base"
                      mt="20px"
                      disabled={!isNotDisable}
                      onClick={() => {
                        setBecome(!become);
                        deleteAccount();
                      }}
                    >
                      {afc.first_text_button}
                    </ButtonP>
                  </FormControl>
                </Box>
              </Box>
              {state.theme.isMobile ? null : <Box width={"50%"} />}
            </Flex>
          </Flex>
        )}
      </motion.div>
    </>
  );
};

export default connect(DeleteAccount);

const ButtonP = styled(Button)`
  width: 100%;
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
`;

const Boxing = styled(Box)`
  .error-message {
    padding-left: 0;
    padding-right: 0;
    border: none;
    font-size: 18px;
    color: #f00;
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
  textarea {
    margin-top: 15px;
    color: #150f35;
    font-size: 14px;
    width: 100%;
    padding: 15px 12px;
    height: 150px;
    border-radius: 5px;
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

const Return = styled(Link)`
  margin-top: 20px;
`;
