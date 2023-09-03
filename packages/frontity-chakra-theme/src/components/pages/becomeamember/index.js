import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
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
  chakra,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { connect, styled } from "frontity";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { extendTheme } from "@chakra-ui/react";
import ButtonPurpleClick from "../../buttons/ButtonPurpleClick";
import ButtonPurple from "../../buttons/ButtonPurple";
import Link from "@frontity/components/link";

const chakraLink = chakra(Link);

const FieldInput = ({ value, type, label, set, isInvalid }) => {
  return (
    <>
      <FormLabel paddingLeft={"15px"} paddingTop={"16px"} optionalIndicator>
        {label}
      </FormLabel>
      <Input
        isInvalid={isInvalid}
        value={value}
        border={"2px solid #dee4ed"}
        borderRadius={"40px"}
        fontSize={"12px"}
        lineHeight={"18px"}
        type={type}
        onChange={(event) => set(event.target.value)}
      />
    </>
  );
};

const FieldInputNotRequired = ({ value, type, label, set, isInvalid }) => {
  return (
    <>
      <FormLabel paddingLeft={"15px"} paddingTop={"16px"} requiredIndicator>
        {label}
      </FormLabel>
      <Input
        isInvalid={isInvalid}
        value={value}
        border={"2px solid #dee4ed"}
        borderRadius={"40px"}
        fontSize={"12px"}
        lineHeight={"18px"}
        type={type}
        onChange={(event) => set(event.target.value)}
      />
    </>
  );
};

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const handleChangeEmail = (event) => {
  set(event.target.value);
  if (!isValidEmail(event.target.value)) {
    setError("Email is invalid");
  } else {
    setError(null);
  }
  setMessage(event.target.value);
};

const BecomeAMember = ({ state, actions, libraries }) => {
  // Validación
  /* const isExist = state.theme.isExist?.exist != 'undefined' ? false : state.theme.isExist.exist;
    const isRegister = state.theme.isRegister?.register != 'undefined' ? false : state.theme.isRegister.register; */
  /*     const [exist, setExist] = useState(!isExist);
    const [reg, setReg] = useState(!isExist); */
  const Html2React = libraries.html2react.Component;

  // validamos
  const [isvalid, setIsvalid] = useState(false);
  const [errors, setErrors] = useState({});
  const [exist, setExist] = useState(false);
  const [reg, setReg] = useState(false);
  const [checkBoxAge, setCheckBoxAge] = useState(false);
  const [checkBoxPrivacy, setCheckBoxPrivacy] = useState(false);
  const [checkBoxGroup, setCheckBoxGroup] = useState([false, false]);

  const allChecked = checkBoxGroup.every(Boolean);
  const isIndeterminate = checkBoxGroup.some(Boolean) && !allChecked;

  const checkedBoxes = (checkBoxGroup) => {
    if (checkBoxAge && checkBoxPrivacy == true) {
      return true;
    } else {
      return false;
    }
  };

  // Estados de campos en el Formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [fancode, setFancode] = useState("");
  //GTM EVENT
  const RegisterEvent = () =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "form",
        action: "register",
        label: "",
      },
    });

  useEffect(() => {
    setExist(state.theme?.isExist?.exist);
  }, [state.theme?.isExist?.exist]);

  useEffect(() => {
    setReg(state.theme?.isRegister?.register);
  }, [state.theme?.isRegister?.register]);

  useEffect(() => {
    setIsvalid(state.theme?.isInvalid?.status);
  }, [state.theme?.isInvalid?.status]);

  /* const [become, setBecome] = useState(false) */
  // Hacemos fetch a la página de la URL actual para traer sus campos
  const data = state.source.get(state.router.link);
  const id = data.id;
  const page = state.source[data.type][id];
  const mediaId = page?.featured_media;
  const featureMedia = state.source.attachment[mediaId]?.source_url;
  const title = page?.acf?.info_title;
  const content = page?.acf?.info_content;
  const bullets = page?.acf?.info_bullets;

  const titleVerify = page?.acf?.modal_title;
  const contentVerify = page?.acf?.modal_content;
  const contentVerify2 = page?.acf?.modal_content_2;
  const linkVerify = page?.acf?.modal_btn;

  let bulletPoints;
  {
    bullets &&
      (bulletPoints = bullets?.map(({ bullet }) => {
        return (
          <ListItem>
            <ListIcon as={FaCheck} color="buttonpurple" />
            {bullet}
          </ListItem>
        );
      }));
  }

  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  async function register() {
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
      setReg(true);
      RegisterEvent();
      actions.theme.registerUser([
        username,
        lastname,
        email,
        password,
        fancode,
      ]);
      setErrors(errors);
    }
  }

  /*     console.log('Submit de User y Password')
        console.log('handleSubmit E-mail: ' + email)
        console.log('handleSubmit Password: ' + password) */

  /*   function register(email) {
    if (!isEmail(email)) {
      state.theme.isLogin = false;
      state.theme.isInvalid = {
        status: true,
        code: 0,
        message: "Please enter a valid email address",
        error: "Sorry, invalid Email. Try again",
      };
    } else {
      RegisterEvent();
      actions.theme.registerUser([
        username,
        lastname,
        email,
        password,
        fancode,
      ]);
    }
  }
 */
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
      >
        {/*                 <Flex
                        width="full"
                        bgGradient={{
                            base: `linear(to-l, loginLeft 0%, loginRigth 100%)`
                        }}
                        backgroundImage={state.theme.isMobile ? null : featureMedia}
                        bgRepeat={'no-repeat'}
                        bgPos={'right'}
                        backgroundSize={'contain'}
                        minH={'80vh'}
                    >
                        <Flex maxW={'1200px'} margin={'0 auto'} padding={'30px'} color={'white'}>
                            <Box p={2} width={state.theme.isMobile ? '100%' : '50%'}>
                                <Box>
                                    <Heading paddingTop={'123px'} as='h1' fontSize={'24.88px'} lineHeight={'36px'} fontWeight={'600'} noOfLines={1}>Please verify your email</Heading>
                                    <br/>
                                    <Text size='14px' lineHeight={'24px'} fontWeight={'400'}>Thanks for signing up!
                                        You are only one step away from being a Win a Dream member.
                                        We just sent an email.

                                        Please, click on the link in that email to complete your signup.
                                        If you don't see it, you may need to check your spam folder.</Text>
                                        <br/>
                                    <Text size='14px' lineHeight={'24px'} fontWeight={'400'}>Thanks for signing up!
                                        You are only one step away from being a Win a Dream member.
                                        We just sent an email to maria@gmail.com

                                        Please, click on the link in that email to complete your signup.
                                        If you don't see it, you may need to check your spam folder.</Text><br/>
                                    <ButtonPurple url={'/'} title={'Resend email'}/>

                                </Box>
                            </Box>
                            {state.theme.isMobile ? null : <Box width={'50%'} />}
                        </Flex>
                    </Flex> */}
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
          pb="50px"
        >
          <Flex
            maxW={"1200px"}
            width="100%"
            margin={"0 auto"}
            padding={"30px"}
            color={"white"}
          >
            <Box p={2} width={state.theme.isMobile ? "100%" : "50%"}>
              {!reg ? (
                <Box>
                  <Box>
                    {title && (
                      <Heading
                        paddingTop={"123px"}
                        as="h1"
                        fontSize={"24.88px"}
                        lineHeight={"36px"}
                        fontWeight={"600"}
                        noOfLines={1}
                      >
                        {title}
                      </Heading>
                    )}
                    {content && (
                      <Content
                        size="14px"
                        lineHeight={"24px"}
                        fontWeight={"400"}
                        className="content"
                      >
                        <Html2React html={content} />
                      </Content>
                    )}
                    <List spacing={3} paddingTop={"15px"}>
                      {bulletPoints}
                    </List>
                  </Box>

                  <Box>
                    <FormControl isRequired>
                      <FieldInput
                        isInvalid={exist}
                        label={"First name "}
                        type={"text"}
                        value={username}
                        isRequired
                        set={setUsername}
                      />
                      <FieldInput
                        isInvalid={exist}
                        label="Last name "
                        type={"text"}
                        value={lastname}
                        isRequired
                        set={setLastname}
                      />
                      <FieldInput
                        isInvalid={exist}
                        label={"E-mail "}
                        type={"email"}
                        value={email}
                        isRequired
                        onChange={handleChangeEmail}
                        set={setEmail}
                      />
                      <FieldInput
                        isInvalid={exist}
                        label={"Password "}
                        type={"password"}
                        value={password}
                        isRequired
                        set={setPassword}
                      />
                      {/* <FieldInputNotRequired
                        isInvalid={exist}
                        label={"Friend Fan Code"}
                        type={"text"}
                        value={fancode}
                        set={setFancode}
                      /> */}
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
                      {exist && (
                        <Text
                          padding={"10px 0"}
                          fontSize={"18px"}
                          color={"red"}
                          lineHeight={"22px"}
                          fontWeight={"400"}
                          marginTop={"10px"}
                        >
                          {state.theme.isExist?.message}
                        </Text>
                      )}
                      <Stack
                        isRequired
                        spacing={5}
                        direction="column"
                        margin={"30px 0 15px"}
                      >
                        <FormControl isRequired>
                          <CheckboxT
                            alignItems="top"
                            colorScheme="#4c43cd"
                            isChecked={checkBoxGroup[0]}
                            onChange={(e) =>
                              setCheckBoxGroup([
                                e.target.checked,
                                checkBoxGroup[1],
                              ])
                            }
                            /*          isChecked={checkBoxAge}
                            onChange={(e) => setCheckBoxAge(e.target.checked)} */
                          >
                            I'm over 18 years old*
                          </CheckboxT>
                        </FormControl>
                      </Stack>
                      <Stack
                        spacing={5}
                        direction="column"
                        margin={"15px 0 30px"}
                      >
                        <FormControl isRequired>
                          <CheckboxT
                            alignItems="top"
                            colorScheme="#4c43cd"
                            isChecked={checkBoxGroup[1]}
                            onChange={(e) =>
                              setCheckBoxGroup([
                                checkBoxGroup[0],
                                e.target.checked,
                              ])
                            }
                            /*             isChecked={checkBoxPrivacy}
                            onChange={(e) =>
                              setCheckBoxPrivacy(e.target.checked)
                            } */
                          >
                            I’m agree to Win A Dream’s Terms and Conditions and
                            Privacy Policy*
                          </CheckboxT>
                        </FormControl>
                      </Stack>

                      <ButtonP
                        mt="25px"
                        width="100%"
                        py="28px"
                        borderRadius="40px"
                        backgroundColor="#4C43CD"
                        textTransform="uppercase"
                        letterSpacing=".05em"
                        disabled={!allChecked}
                        onClick={() => {
                          register(email);
                        }}
                      >
                        Become a Member
                      </ButtonP>
                    </FormControl>
                    {/* <ButtonPurpleClick onClick={ () => register} title={'Become a Member'} /> */}
                    <Box mt="20px">
                      <Link link="/legal/">
                        Read more about Win A Dream’s Privacy Policy
                      </Link>
                    </Box>
                    <Text
                      size="14px"
                      lineHeight={"24px"}
                      fontWeight={"400"}
                      paddingTop={"15px"}
                      mb="50px"
                    >
                      Already sign-up? <Link link="/login/">Log in</Link>
                    </Text>
                    <Text
                      size="10px"
                      color={"#8684b1"}
                      lineHeight={"24px"}
                      fontWeight={"400"}
                      paddingTop={"15px"}
                    >
                      <Link link="/"> Return </Link>
                    </Text>
                  </Box>
                </Box>
              ) : (
                <Box width="100%" my="30px">
                  {titleVerify && (
                    <Heading
                      paddingTop={"123px"}
                      as="h1"
                      fontSize={"33px"}
                      lineHeight={"42px"}
                      fontWeight={"600"}
                      noOfLines={1}
                    >
                      {titleVerify}
                    </Heading>
                  )}
                  {contentVerify && (
                    <Content
                      size="14px"
                      lineHeight={"24px"}
                      fontWeight={"400"}
                      className="content"
                      mt="30px"
                    >
                      <Html2React html={contentVerify} /> {email}
                    </Content>
                  )}
                  {contentVerify2 && (
                    <Content
                      size="14px"
                      lineHeight={"24px"}
                      fontWeight={"400"}
                      className="content"
                      mt="30px"
                    >
                      <Html2React html={contentVerify2} />
                    </Content>
                  )}
                  <ButtonFrontity
                    mt="25px"
                    width="100%"
                    py="28px"
                    borderRadius="40px"
                    backgroundColor="#4C43CD"
                    textTransform="uppercase"
                    letterSpacing=".05em"
                    disabled={false}
                    link={linkVerify?.url}
                  >
                    {linkVerify?.title}
                  </ButtonFrontity>
                </Box>
              )}
            </Box>
            {state.theme.isMobile ? null : <Box width={"50%"} />}
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
};

export default connect(BecomeAMember);

const ButtonFrontity = styled(chakraLink)`
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

const CheckboxT = styled(Checkbox)`
  .chakra-checkbox__control {
    margin-top: 3px;
  }
`;
const Content = styled(Box)`
  p {
    font-size: 16px;
    line-height: 24px;
  }
  li {
    font-size: 16px;
    line-height: 24px;
  }
`;
