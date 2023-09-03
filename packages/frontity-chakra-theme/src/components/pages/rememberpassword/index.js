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
  HStack,
  Input,
  List,
  ListIcon,
  ListItem,
  PinInput,
  PinInputField,
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

const FieldInput = ({ value, placeholder, type, label, set, isInvalid }) => {
  return (
    <>
      <FormLabel paddingLeft={"15px"} paddingTop={"16px"}>
        {label}
      </FormLabel>
      <Input
        isInvalid={isInvalid}
        autoComplete={label}
        value={value}
        py="22px"
        border={"2px solid #dee4ed"}
        borderRadius={"40px"}
        fontSize={"14px"}
        lineHeight={"18px"}
        type="email"
        placeholder={placeholder}
        onChange={(event) => set(event.target.value)}
      />
    </>
  );
};

/* const FieldInput = ({ placeholder, type, label }) => {
    return (
        <>
            <FormLabel paddingLeft={'15px'} paddingTop={'16px'}>{label}</FormLabel>
            <Input
                border={'2px solid #dee4ed'}
                borderRadius={'40px'}
                fontSize={'12px'}
                lineHeight={'18px'}
                type={type}
                placeholder={placeholder}
            />
        </>
    )
} */

const Rememberpassword = ({ state, actions, libraries }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [bademail, setBademail] = useState(false);
  const [sendyouemail, setSendyouemail] = useState(false);
  const [codePin, setCodePin] = useState("");
  const [pin0, setPin0] = useState("");
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [successfully, setSuccessfully] = useState(false);
  const data = state.source.get(state.router.link);
  const id = data.id;
  const page = state.source[data.type][id];
  const mediaId = page?.featured_media;
  const featureMedia = state.source.attachment[mediaId]?.source_url;
  const afc = state.source[data.type][id]?.acf;
  const Html2React = libraries.html2react.Component;

  useEffect(() => {
    setBademail(state.theme.badEmail);
  }, [state.theme?.resetPassword]);

  useEffect(() => {
    setSendyouemail(state.theme.sendYouEmail);
  }, [state.theme?.resetPassword]);

  const resetPassword = () => {
    actions.theme.resetPassword(email);
  };

  const sendPassword = () => {
    actions.theme.resetNewPassword([email, codePin, password]);
  };

  useEffect(() => {
    setCodePin(pin0 + pin1 + pin2 + pin3);
  }, [pin0, pin1, pin2, pin3]);

  useEffect(() => {
    setSuccessfully(state.theme.successfullyPassword);
  }, [state.theme?.sendResetPassword]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
      >
        {sendyouemail ? (
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
              <Box p={2} width={state.theme.isMobile ? "100%" : "50%"}>
                <Box>
                  <Heading
                    paddingTop={"123px"}
                    as="h1"
                    fontSize={"24.88px"}
                    lineHeight={"36px"}
                    fontWeight={"600"}
                    noOfLines={1}
                  >
                    {afc?.second_title_page}
                  </Heading>
                  <br />
                  <Text
                    paddingBottom={"16px"}
                    size="14px"
                    lineHeight={"24px"}
                    fontWeight={"400"}
                  >
                    <Html2React html={afc?.second_page_description} />
                  </Text>
                  <Text
                    paddingBottom={"16px"}
                    size="14px"
                    lineHeight={"24px"}
                    fontWeight={"400"}
                  >
                    {email}
                  </Text>

                  <FormControl padding={"20px 0"}>
                    <HStack paddingLeft={"15px"} paddingBottom={"16px"}>
                      <PinInput type="alphanumeric" mask size="md">
                        <PinInputField
                          onChange={(event) => setPin0(event.target.value)}
                        />
                        <PinInputField
                          onChange={(event) => setPin1(event.target.value)}
                        />
                        <PinInputField
                          onChange={(event) => setPin2(event.target.value)}
                        />
                        <PinInputField
                          onChange={(event) => setPin3(event.target.value)}
                        />
                      </PinInput>
                    </HStack>
                    <FieldInput
                      label={"New Password"}
                      value={password}
                      set={setPassword}
                      type="password"
                      placeholder="Write you new password"
                    />
                  </FormControl>
                  <ButtonP
                    mt="25px"
                    variant="base"
                    onClick={() => sendPassword()}
                  >
                    {afc?.second_button_text}
                  </ButtonP>
                  {state.theme?.sendResetPassword?.data?.status === 200 ||
                  successfully ? (
                    <Text
                      padding={"15px 0"}
                      fontSize={"18px"}
                      color={"#00ff99"}
                      lineHeight={"24px"}
                      fontWeight={"400"}
                    >
                      {state.theme?.sendResetPassword?.message}
                    </Text>
                  ) : state.theme?.sendResetPassword?.data?.status === 500 ? (
                    <Text
                      padding={"15px 0"}
                      fontSize={"18px"}
                      color={"red"}
                      lineHeight={"24px"}
                      fontWeight={"400"}
                    >
                      {state.theme?.sendResetPassword?.message}
                    </Text>
                  ) : (
                    <Text
                      padding={"15px 0"}
                      fontSize={"18px"}
                      color={"red"}
                      lineHeight={"24px"}
                      fontWeight={"400"}
                    >
                      {state.theme?.sendResetPassword?.message}
                    </Text>
                  )}
                </Box>
                <Box mt="20px">
                  <Link link="/login/">Login</Link>
                </Box>
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
              maxW={"1200px"}
              margin={"0 auto"}
              padding={"30px"}
              color={"white"}
            >
              <Box p={2} width={state.theme.isMobile ? "100%" : "50%"}>
                <Box>
                  <FormControl isRequired>
                    <Heading
                      paddingTop={"123px"}
                      as="h1"
                      fontSize={"24.88px"}
                      lineHeight={"36px"}
                      fontWeight={"600"}
                      noOfLines={1}
                    >
                      {page.title.rendered}
                    </Heading>
                    <Text size="14px" lineHeight={"24px"} fontWeight={"400"}>
                      <Html2React html={afc?.first_description_desciption} />
                    </Text>

                    <FieldInput
                      isInvalid={bademail}
                      label={"E-mail"}
                      value={email}
                      set={setEmail}
                      type="email"
                      placeholder="Write your email here"
                    />
                    {bademail ? (
                      <Text
                        padding={"10px 0"}
                        fontSize={"18px"}
                        color={"red"}
                        lineHeight={"22px"}
                        fontWeight={"400"}
                        marginTop={"10px"}
                      >
                        {state.theme.resetPassword.message.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </Text>
                    ) : null}
                    <ButtonP
                      mt="25px"
                      variant="base"
                      onClick={() => resetPassword()}
                    >
                      {afc?.first_text_button}
                    </ButtonP>
                    {successfully && (
                      <Text
                        padding={"10px 0"}
                        fontSize={"24.88px"}
                        color={"#00ff99"}
                        lineHeight={"24px"}
                        fontWeight={"400"}
                      >
                        {state.theme?.sendResetPassword?.message}
                      </Text>
                    )}
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

export default connect(Rememberpassword);

const ButtonP = styled(Button)`
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
