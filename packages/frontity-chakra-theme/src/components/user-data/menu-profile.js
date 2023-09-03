import { connect, styled } from "frontity";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  StackDivider,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import imgavatar from "../../assets/avatar.png";
import FrontityLink from "@frontity/components/link";
import React, { useRef } from "react";

const Link = chakra(FrontityLink);

const MenuProfile = ({ state, actions }) => {
  const inputRef = useRef(null);

  const focusForm = () => {
    state.theme.focusForm = true;
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };
  const handleChange = async (event) => {
    const file = event.target.files[0];
    const convertedFile = await convertToBase64(file);

    const params = {
      image: convertedFile,
      name: file.name,
      type: file.type,
      user: state.theme.user_email,
    };
    actions.theme.uploadImgToS3(params);
  };
  return (
    <Box
      w={{ base: "100%", md: "30%" }}
      paddingTop="10px"
      paddingLeft="30px"
      maxWidth="300px"
    >
      {state.theme?.user_meta?.avatar_bgimage ? (
        <Avatar
          size="xl"
          name='{state.theme.isLogin ? state.theme.user_display_name : "Avatar"}'
          src={state.theme.user_meta.avatar_bgimage}
          backgroundColor="white"
        >
          <AvatarIcon>
            <input
              ref={inputRef}
              type="file"
              style={{ display: "none" }}
              onChange={handleChange}
              accept="image/png, image/gif, image/jpeg"
            />
            <button
              style={{ cursor: "pointer", padding: "40px" }}
              onClick={() => inputRef.current.click()}
            >
              <FaRegEdit color="#4C43CD" />
            </button>
          </AvatarIcon>
        </Avatar>
      ) : (
        <Avatar
          backgroundColor="white"
          size="xl"
          name='{state.theme.isLogin ? state.theme.user_display_name : "Avatar"}'
          src={imgavatar}
        >
          <AvatarIcon backgroundColor="white" color="#4C43CD">
            <input
              ref={inputRef}
              type="file"
              style={{ display: "none" }}
              onChange={handleChange}
              accept="image/png, image/gif, image/jpeg"
              color="#4C43CD"
            />
            <button
              style={{ cursor: "pointer", padding: "40px" }}
              onClick={() => inputRef.current.click()}
              color="#4C43CD"
            >
              <FaRegEdit color="#4C43CD" />
            </button>
          </AvatarIcon>
        </Avatar>
      )}

      <Text fontSize={14} lineHeight="24px" fontWeight="400" marginTop="20px">
        {state.theme.isLogin ? state.theme.user_display_name : null}
      </Text>
      <Text fontSize={12} lineHeight="18px" fontWeight="400">
        {state.theme.isLogin ? state.theme.user_email : null}
      </Text>
      <VStack
        divider={<StackDivider borderColor="tamkeen.600" />}
        align="stretch"
        marginTop="10px"
        width="100px"
      >
        <HStack>
          <Link
            fontSize="14px"
            fontWeight="500"
            lineHeight="40px"
            link="/my-account"
            onClick={focusForm}
          >
            Edit profile
          </Link>
          <Icon as={FaRegEdit} />
        </HStack>
        <Link
          fontSize="14px"
          link="/delete-account/"
          fontWeight="400"
          lineHeight="40px"
        >
          Delete account
        </Link>
        <HStack>
          <Button
            fontSize="14px"
            fontWeight="400"
            lineHeight="40px"
            variant="unstyled"
            onClick={() => {
              localStorage.removeItem("Credentials");
              localStorage.removeItem("UserInfo");
              setTimeout(() => {
                state.theme.isLogin = false;
                actions.router.set("/");
              }, 500);
            }}
          >
            Sign Out
          </Button>
          <Icon as={IoMdExit} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default connect(MenuProfile);

const AvatarIcon = styled.div`
  position: absolute;
  font-size: 16px;
`;
