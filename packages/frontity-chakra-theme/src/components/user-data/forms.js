import React, { useEffect, useState, useRef } from "react";

import { connect, css, styled } from "frontity";
import countries from "./countries.json";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import FrontityLink from "@frontity/components/link";

const FormAccount = ({ state, actions, libraries, ...props }) => {
  const [country, setCountry] = useState();
  const [gender, setGender] = useState();
  const [birth, setBirth] = useState();
  const [address, setAddress] = useState();
  const [postalCode, setPostalCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [club, setClub] = useState();
  const [nationalTeam, setNationalTeam] = useState();
  const [currentPlayer, setCurrentPlayer] = useState();
  const [legendPlayer, setLegendPlayer] = useState();
  const [size, setSize] = useState();
  const [follow, setFollow] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Html2React = libraries.html2react.Component;
  //const userInfo = localStorage ? JSON.parse(localStorage.getItem("UserInfo")) : state.theme?.user_meta;
  const userInfo = state.theme?.user_meta;
  const fields = props?.fields;
  const myRef = useRef(null);

  useEffect(() => {
    if (!userInfo) {
      getUser().catch((err) => console.error(err));
    }
  }, []);
  useEffect(() => {
    if (state.theme?.focusForm) {
      myRef.current.scrollIntoView();
      state.theme.focusForm = false;
    }
  }, [state.theme.focusForm]);

  const fieldNotEmpty = (value) => {
    return value !== undefined;
  };
  async function getUser() {
    actions.theme.getUser(state.theme.user_token);
  }

  async function updateUser() {
    const data = {
      token: state.theme.user_token,
      meta: {
        country: fieldNotEmpty(country) ? country : state.theme.country,
        gender: fieldNotEmpty(gender) ? gender : state.theme.gender,
        birth_date: fieldNotEmpty(birth) ? birth : state.theme.birth_date,
        address: fieldNotEmpty(address) ? address : state.theme.address,
        postal_code: fieldNotEmpty(postalCode)
          ? postalCode
          : state.theme.postal_code,
        phone_number: fieldNotEmpty(phoneNumber)
          ? phoneNumber
          : state.theme.phone_number,
        club: fieldNotEmpty(club) ? club : state.theme.club,
        national_team: fieldNotEmpty(nationalTeam)
          ? nationalTeam
          : state.theme.national_team,
        current_player: fieldNotEmpty(currentPlayer)
          ? currentPlayer
          : state.theme.current_player,
        legend_player: fieldNotEmpty(legendPlayer)
          ? legendPlayer
          : state.theme.legend_player,
        shirt_size: fieldNotEmpty(size) ? size : state.theme.shirt_size,
        follow_matches: fieldNotEmpty(follow)
          ? follow
          : state.theme.follow_matches,
      },
    };
    actions.theme.updateUser(data);
    onOpen();
  }
  const ButtonEvent = () => {
    //GTM EVENT
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "account",
        action: "complete profile",
        label: "",
      },
    });
    onClose();
  };
  const getCountries = () => {
    const array = [];
    countries.map((count, index) => {
      array.push(
        <option key={index} defaultValue={country}>
          {count?.name}
        </option>
      );
    });
    return array;
  };
  return (
    <>
      <Box className="user-data" id="user-data">
        <Text
          className="welcome-text"
          fontSize={18}
          h={30}
          fontWeight="600"
          margin={{ base: " 0 30px" }}
        >
          HELLO, {state.theme.isLogin ? state.theme.user_display_name : null}
        </Text>
        <Box
          bg={"white"}
          padding={30}
          borderRadius={6}
          margin={{ base: " 0 30px 10px", md: "0 30px 10px 0" }}
        >
          <Text
            fontSize={16}
            lineHeight="24px"
            color="tamkeen.900"
            fontWeight="400"
          >
            {fields?.code_title}
          </Text>
          <Text
            fontSize={18}
            lineHeight="30px"
            color="principal.700"
            fontWeight="600"
          >
            0000YYYYYY
          </Text>
          {/*         <Text
          fontSize={16}
          lineHeight="24px"
          color="tamkeen.900"
          fontWeight="600"
          marginTop="5px"
        >
          Share it with your friends!
        </Text>
        <Text
          fontSize={14}
          lineHeight="24px"
          color="tamkeen.900"
          fontWeight="400"
        >
          The more friends who use it when they sign up for Win a Dream, the
          more options you will have to get more and better rewards.
        </Text> */}
          <ContentContainer>
            <Html2React html={fields?.code_content} />
          </ContentContainer>
          <Text
            fontSize={16}
            lineHeight="24px"
            color="tamkeen.900"
            fontWeight="600"
            marginTop="5px"
            ref={myRef}
          >
            {fields?.share_title}
          </Text>
          <AvatarGroup spacing="0.5rem" marginTop="10px">
            <Avatar
              bg="principal.700"
              size="sm"
              icon={<Icon color="white" as={FaFacebookF} fontSize="1rem" />}
            />
            <Avatar
              bg="principal.700"
              size="sm"
              icon={<Icon color="white" as={FaTwitter} fontSize="1rem" />}
            />
            <Avatar
              bg="principal.700"
              size="sm"
              icon={<Icon color="white" as={FaInstagram} fontSize="1rem" />}
            />
            <Avatar
              bg="principal.700"
              size="sm"
              icon={<Icon color="white" as={FaWhatsapp} fontSize="1rem" />}
            />
          </AvatarGroup>
        </Box>
        <Box
          bg={"white"}
          padding={30}
          borderRadius={6}
          marginTop="10px"
          color="tamkeen.900"
          margin={{ base: " 0 30px", md: "0 30px 0 0" }}
        >
          {fields?.account_title && (
            <Text
              fontSize={16}
              lineHeight="24px"
              color="tamkeen.900"
              fontWeight="600"
            >
              {fields?.account_title}
            </Text>
          )}
          {fields?.account_content && (
            <ContentContainer>
              <Html2React html={fields?.account_content} />
            </ContentContainer>
          )}
          {fields?.account_subtitle && (
            <Text
              fontSize={12}
              lineHeight="18px"
              color="tamkeen.900"
              fontWeight="400"
              marginTop="15px"
            >
              {fields?.account_subtitle}
            </Text>
          )}

          <Stack
            direction={{ base: "column", md: "row" }}
            marginTop="20px"
            spacing="25px"
          >
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                Country
              </FormLabel>
              <Select
                value={fieldNotEmpty(country) ? country : userInfo?.country}
                onChange={(event) => setCountry(event.target.value)}
                placeholder="Select country"
                borderRadius={30}
                borderColor="tamkeen.900"
                borderWidth="2px"
                fontSize={12}
              >
                {getCountries()}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                Gender
              </FormLabel>
              <Select
                placeholder="Select Gender"
                borderRadius={30}
                borderColor="tamkeen.900"
                borderWidth="2px"
                value={fieldNotEmpty(gender) ? gender : userInfo?.gender}
                fontSize={12}
                onChange={(event) => setGender(event.target.value)}
              >
                <option key={1} defaultValue="M">
                  Male
                </option>
                <option key={2} defaultValue="F">
                  Female
                </option>
              </Select>
            </FormControl>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            marginTop="20px"
            spacing="25px"
          >
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                Date of birth
              </FormLabel>
              <input
                style={inputDate}
                value={fieldNotEmpty(birth) ? birth : userInfo?.birth_date}
                type="date"
                onChange={(event) => setBirth(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                Full address
              </FormLabel>
              <input
                type="text"
                style={inputCustom}
                placeholder={"Insert your full address..."}
                onChange={(event) => setAddress(event.target.value)}
                value={fieldNotEmpty(address) ? address : userInfo?.address}
              />
            </FormControl>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            marginTop="20px"
            spacing="25px"
          >
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                Postal Code
              </FormLabel>
              <input
                type="text"
                style={inputCustom}
                onChange={(event) => setPostalCode(event.target.value)}
                placeholder={"Insert your postal code..."}
                value={
                  fieldNotEmpty(postalCode) ? postalCode : userInfo?.postal_code
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                Phone number
              </FormLabel>
              <input
                type="text"
                style={inputCustom}
                placeholder={"Insert your phone number..."}
                onChange={(event) => setPhoneNumber(event.target.value)}
                value={
                  fieldNotEmpty(phoneNumber)
                    ? phoneNumber
                    : userInfo?.phone_number
                }
              />
            </FormControl>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            marginTop="20px"
            spacing="25px"
          >
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                Favourite club
              </FormLabel>
              <input
                type="text"
                style={inputCustom}
                placeholder="Insert your favourite club..."
                onChange={(event) => setClub(event.target.value)}
                value={fieldNotEmpty(club) ? club : userInfo?.club}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                My national team
              </FormLabel>
              <input
                type="text"
                style={inputCustom}
                placeholder="Insert your national team..."
                onChange={(event) => setNationalTeam(event.target.value)}
                value={
                  fieldNotEmpty(nationalTeam)
                    ? nationalTeam
                    : userInfo?.national_team
                }
              />
            </FormControl>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            marginTop="20px"
            spacing="25px"
          >
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                Favourite current player
              </FormLabel>
              <input
                type="text"
                style={inputCustom}
                placeholder="Insert your current favourite player..."
                onChange={(event) => setCurrentPlayer(event.target.value)}
                value={
                  fieldNotEmpty(currentPlayer)
                    ? currentPlayer
                    : userInfo?.current_player
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                Favourite legend player
              </FormLabel>
              <input
                type="text"
                style={inputCustom}
                placeholder="Insert your favourite legend player..."
                onChange={(event) => setLegendPlayer(event.target.value)}
                value={
                  fieldNotEmpty(legendPlayer)
                    ? legendPlayer
                    : userInfo?.legend_player
                }
              />
            </FormControl>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            marginTop="20px"
            spacing="25px"
          >
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                Shirt size
              </FormLabel>
              <Select
                placeholder="Select size"
                borderRadius={30}
                borderColor="tamkeen.900"
                borderWidth="2px"
                fontSize={12}
                onChange={(event) => setSize(event.target.value)}
                value={fieldNotEmpty(size) ? size : userInfo?.shirt_size}
              >
                <option key={1} defaultValue="XS">
                  XS
                </option>
                <option key={2} defaultValue="S">
                  S
                </option>
                <option key={3} defaultValue="M">
                  M
                </option>
                <option key={4} defaultValue="L">
                  L
                </option>
                <option key={5} defaultValue="XL">
                  XL
                </option>
                <option key={6} defaultValue="XXL">
                  XXL
                </option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel color="tamkeen.900" fontSize={12}>
                How do you follow football matches?{" "}
              </FormLabel>
              <Select
                placeholder="Select an option"
                borderRadius={30}
                borderColor="tamkeen.900"
                borderWidth="2px"
                fontSize={12}
                onChange={(event) => setFollow(event.target.value)}
                value={
                  fieldNotEmpty(follow) ? follow : userInfo?.follow_matches
                }
              >
                <option key={1} defaultValue="On the football field">
                  On the football field
                </option>
                <option key={2} defaultValue="TV">
                  TV
                </option>
                <option key={3} defaultValue="Streaming">
                  Streaming
                </option>
                <option key={4} defaultValue="Radio">
                  Radio
                </option>
                <option key={5} defaultValue="Press">
                  Press
                </option>
              </Select>
            </FormControl>
          </Stack>
          <Box>
            <ButtonP
              colorScheme="blue"
              borderRadius={40}
              height="56px"
              width="100%"
              bgColor="principal.700"
              marginTop="30px"
              fontSize="14px"
              onClick={updateUser}
            >
              Update Information
            </ButtonP>
          </Box>
        </Box>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
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
          {fields?.modal_title && (
            <Heading
              as="h5"
              fontSize="25px"
              lineHeight="36px"
              fontWeight="600"
              color="#150f35"
              width="100%"
              mb="17px"
            >
              {fields?.modal_title}
            </Heading>
          )}
          <Html2React html={fields?.modal_content} />
          <ButtonContainer
            display="flex"
            mt={{ base: "17px", md: "17px" }}
            width="100%"
            justifyContent={{ base: "center", md: "center" }}
          >
            {fields?.modal_link && (
              <Box
                as="button"
                display="flex"
                justifyContent={"center"}
                background={"#4c43cd"}
                fontSize={"14px"}
                lineHeight="18px"
                color={"#fff"}
                textTransform={"uppercase"}
                padding={"20px 35px"}
                borderRadius="40px"
                border={"2px solid #4c43cd"}
                height="fit-content"
                transition="ease-in-out 500ms"
                fontWeight="600"
                _hover={{
                  bg: "#fff",
                  color: "#4c43cd",
                  borderColor: "#fff",
                }}
                onClick={() => ButtonEvent()}
              >
                {fields?.modal_link.title}
              </Box>
            )}
          </ButtonContainer>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default connect(FormAccount);

const inputCustom = {
  width: "100%",
  border: "2px solid black",
  borderWidth: "2px",
  lineHeight: "36px",
  fontSize: "12px",
  paddingLeft: "18px",
  boxSizing: "border-box",
  borderRadius: "36px",
};

const inputDate = {
  width: "100%",
  border: "2px solid black",
  borderWidth: "2px",
  lineHeight: "36px",
  fontSize: "12px",
  paddingLeft: "18px",
  boxSizing: "border-box",
  borderRadius: "36px",
  paddingRight: "18px",
};

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

const ContentContainer = styled.div`
  p {
    font-size: 14px;
    line-height: 24px;
    color: #150f35;
  }
`;

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
    border-color: #4c43cd;
  }
`;
