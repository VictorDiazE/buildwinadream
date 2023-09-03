import { connect } from "frontity";
import { useState, useEffect, useLayoutEffect, useRouter, useRef } from "react";
/* import SocialNav from "./social-menu"; */
/* import { SearchButton, SearchModal, SearchForm } from "../search"; */
import SearchButton from "../search/search-button";
import Search from "../search";
import {
  Switch,
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Fade,
  Slide,
  ScaleFade,
} from "@chakra-ui/react";
import SiteLogo from "./SiteLogo";
import LinkParent from "./LinkParent";
import Burguer from "../buttons/Burguer";
import User from "../buttons/User";
import Lang from "../buttons/Lang";
import Login from "../buttons/Login";
import Navbar from "../navbar";
import Navi from "./Navi";

const Header = ({ state, actions }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  const imput = useRef(null);
  function scroll() {
    const [top, setTop] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setTop(window.scrollY > 57);
      });
    }, []);

    return {
      top,
    };
  }

  state.theme.scroll = scroll();

  /*   function LangSwitcher() {
	  const { locale, push, reload, pathname } = useRouter();
	  const nextLocale = locale === "en" ? "ar" : "en";
  
	  const onClick = async () => {
		await push(pathname, { locale: nextLocale });
	  };
  
	  return <button onClick={onClick}>Change to {nextLocale}</button>;
	} */

  function useWindowSize() {
    useLayoutEffect(() => {
      function updateSize() {
        const mq = window.matchMedia("(max-width: 960px)");
        if (mq === true) {
          state.theme.isMobile = mq.matches;
        } else {
          state.theme.isMobile = mq.matches;
          setActiveMenu(false);
        }
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
  }
  useWindowSize();
  return (
    <>
      <Box
        height={activeMenu ? "100vh" : "auto"}
        px={4}
        position="fixed"
        width={"100%"}
        padding={`${state.theme.scroll["top"] ? "25px 0" : "35px 0"}`}
        zIndex="99"
        transition="ease-in-out 0.1s"
        backgroundColor={
          activeMenu
            ? "#150f35"
            : `${state.theme.scroll["top"] ? "tamkeen.900" : "transparent"}`
        }
      >
        <Flex
          h={16}
          alignItems={"center"}
          maxWidth="1200px"
          mx="auto"
          px="30px"
          width="100%"
        >
          <HStack
            alignItems={"center"}
            spacing={8}
            justifyContent={"space-between"}
            width="100%"
          >
            <SiteLogo />
            <HStack
              className="HStack"
              alignItems={"center"}
              as={"nav"}
              /* spacing={4} */
              display={{ base: "none", lg: "flex" }}
              margin={"0 0 0 5px !important"}
              sx={
                state.theme.isMobile
                  ? { backgroundColor: "tamkeen.900" }
                  : { backgroundColor: "transparent" }
              }
            >
              <Navi activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </HStack>
            <HStack gap={"20px"} margin={"0 !important"}>
              {activeMenu ? null : (
                <SearchButton onClick={actions.theme.openSearchModal} />
              )}
              {/* End Modal */}
              {activeMenu ? null : <Lang />}
              {activeMenu ? null : state.theme.isLogin ? <User /> : null}
              {!state.theme.isMobile ? (
                !state.theme.isLogin ? (
                  <Login title={"LOGIN"} />
                ) : null
              ) : null}
              {state.theme.isMobile ? (
                <Burguer
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                />
              ) : null}
            </HStack>
          </HStack>
          <Search
            isOpen={state.theme.isSearchModalOpen}
            onClose={actions.theme.closeSearchModal}
            reference={imput}
          />
        </Flex>

        {state.theme.isMobile ? (
          activeMenu ? (
            <Box p={"32px 0 32px 0"} display={{ md: "none" }}>
              <ScaleFade initialScale={0.9} in={activeMenu}>
                <Stack
                  as={"nav"}
                  spacing={4}
                  padding={"24px 32px"}
                  sx={
                    state.theme.isMobile
                      ? { backgroundColor: "transparent" }
                      : { backgroundColor: "transparent" }
                  }
                >
                  <Navi activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                </Stack>
              </ScaleFade>
            </Box>
          ) : null
        ) : null}
      </Box>
    </>
  );
};

export default connect(Header);
