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
  InputGroup,
  InputRightElement,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { connect } from "frontity";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { extendTheme } from "@chakra-ui/react";
import ButtonPurple from "../../buttons/ButtonPurple";
import Link from "@frontity/components/link";

const FieldInput = ({
  value,
  placeholder,
  type,
  label,
  set,
  isInvalid,
  id,
}) => {
  return (
    <>
      <FormLabel paddingLeft={"15px"} paddingTop={"16px"}>
        {label}
      </FormLabel>
      <Input
        id={id}
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

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const FieldPassword = ({ value, placeholder, type, label, set, isInvalid }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <FormLabel paddingLeft={"15px"} paddingTop={"16px"}>
        {label}
      </FormLabel>
      <InputGroup size="md">
        <Input
          isInvalid={isInvalid}
          pr="4.5rem"
          autoComplete={label}
          value={value}
          border={"2px solid #dee4ed"}
          borderRadius={"40px"}
          fontSize={"14px"}
          py="22px"
          lineHeight={"18px"}
          placeholder={placeholder}
          onChange={(event) => set(event.target.value)}
          type={show ? "text" : "password"}
        />
        <InputRightElement
          width="4.5rem"
          display="flex"
          align="center"
          height="100%"
        >
          <Button
            h="1.5rem"
            size="sm"
            colorScheme="whiteAlpha"
            color="white"
            border="none"
            variant="outline"
            mr="10px"
            onClick={handleClick}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

const Login = ({ state, actions }) => {
  // validamos
  const [isvalid, setIsvalid] = useState(false);
  const [errors, setErrors] = useState({});
  // Campos de formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successfully, setSuccessfully] = useState(false);

  const data = state.source.get(state.router.link);
  const id = data.id;
  const page = state.source[data.type][id];
  const mediaId = page?.featured_media;
  const featureMedia = state.source.attachment[mediaId]?.source_url;

  useEffect(() => {
    setIsvalid(state.theme?.isInvalid?.status);
  }, [state.theme?.isInvalid?.status]);

  async function handleSubmit() {
    const errors = {};

    if (!isEmail(email)) {
      state.theme.isLogin = false;
      state.theme.isInvalid = {
        status: true,
        code: 0,
        message: "Please enter a valid email address",
        error: "Sorry, invalid Email. Try again",
      };
    } else {
      actions.theme.fetchToken([email, password]);
    }

    setErrors(errors);

    /*     console.log('Submit de User y Password')
			console.log('handleSubmit E-mail: ' + email)
			console.log('handleSubmit Password: ' + password) */
  }
  //GTM EVENT
  const RegisterEvent = () =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "sign up",
        action: "",
        label: "",
      },
    });

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
        <Flex
          width="full"
          bgGradient={{
            base: `linear(to-l, loginLeft 0%, loginRigth 100%)`,
          }}
          backgroundImage={state.theme.isMobile ? null : featureMedia}
          bgRepeat={"no-repeat"}
          bgPos={"right"}
          backgroundSize={"contain"}
          minH={"100vh"}
        >
          <Flex
            maxW={"1200px"}
            width={"100%"}
            margin={"0 auto"}
            padding={"30px"}
            color={"white"}
          >
            <Box
              p={2}
              height="100%"
              display="flex"
              justifyContent="center"
              width={state.theme.isMobile ? "100%" : "50%"}
              pb="100px"
            >
              <Box
                height="100%"
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Heading
                  paddingTop="123px"
                  as="h1"
                  fontSize="33px"
                  lineHeight="42px"
                  fontWeight="500"
                  mb="16px"
                  noOfLines={1}
                >
                  {page.title.rendered}
                </Heading>
                <Text
                  size="16px"
                  lineHeight="24px"
                  fontWeight={"400"}
                  color="#dee4ed"
                  mb="20px"
                >
                  Please, login to get full access to our exclusive content and
                  much more!
                </Text>
                {/*                 <Text
                  size="14px"
                  lineHeight={"24px"}
                  fontWeight={"400"}
                  padding={"15px 0 20px 0"}
                >
                  Create your account. All fields marked with * are mandatory.
                </Text> */}
                {/*                 {isvalid && (
                  <Text
                    padding={"10px 0"}
                    fontSize={"24.88px"}
                    color={"red"}
                    lineHeight={"24px"}
                    fontWeight={"400"}
                  >
                    {state.theme.isInvalid.status
                      ? state.theme.isInvalid.message.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )
                      : null}
                  </Text>
                )} */}

                <form>
                  <FormControl
                    isRequired
                    padding={"0 0 30px 0"}
                    /*                 onSubmit={formik.handleSubmit} */
                  >
                    <FieldInput
                      id={"email"}
                      isInvalid={isvalid}
                      label={"E-mail"}
                      value={email}
                      set={setEmail}
                      type="email"
                      placeholder="Write here your email "
                      /* placeholder={'Text field max. 100 characters; Must be a valid email format.'} */
                    />
                    <FieldPassword
                      id={"password"}
                      isInvalid={isvalid}
                      label={"Password"}
                      value={password}
                      set={setPassword}
                      placeholder="Enter your password"
                    />
                    <Button
                      onClick={() => handleSubmit()}
                      colorScheme=""
                      mt="25px"
                      width="100%"
                      py="28px"
                      borderRadius="40px"
                      backgroundColor="#4C43CD"
                      textTransform="uppercase"
                      letterSpacing=".05em"
                      transition={"ease-in-out 500ms"}
                      _hover={{ bg: "white", color: "#4c43cd" }}
                    >
                      Login
                    </Button>

                    {isvalid && (
                      <Text
                        padding={"10px 0 0"}
                        marginTop="10px"
                        fontSize={"18px"}
                        color={"red"}
                        lineHeight={"22px"}
                        fontWeight={"400"}
                      >
                        {state.theme.isInvalid.status
                          ? state.theme.isInvalid.message.replace(
                              /(<([^>]+)>)/gi,
                              ""
                            )
                          : null}
                      </Text>
                    )}
                    <Box mt="20px">
                      <Link link="/remember-password/">
                        Remember your password
                      </Link>
                      <br />
                      <Link
                        link="/become-a-member/"
                        onClick={() => {
                          RegisterEvent();
                        }}
                      >
                        If you don't have an account yet, register here
                      </Link>
                    </Box>
                  </FormControl>
                </form>

                {/* <ButtonPurple url={"/"} title={"Login"} /> */}
              </Box>
            </Box>
            {state.theme.isMobile ? null : <Box width={"50%"} />}
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
};

export default connect(Login);
