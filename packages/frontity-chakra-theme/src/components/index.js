import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import { useState, useEffect, useLayoutEffect, React, useRouter } from "react";
import Archive from "./archive";
import Footer from "./footer";
import Header from "./header";
import Loading from "./loading";
import Page404 from "./pages/404/Page404";
import Post from "./post/post";
import SearchResults from "./search";
import Title from "./title";
import FontFace from "./styles/font-face";
import Home from "./home";
import SwiperCSS from "swiper/swiper-bundle.css";
import SwiperCSS2 from "swiper/swiper.min.css";
import PartnersLogos from "./theme/PartnersLogos";
import Page from "./Page";
import Icon from "../fonts/icon";
import IconCss from "./styles/icon.css";
import SingleAmbassadors from "./single-post/SingleAmbassadors";
import Archivo from "./archive/archive";
import SinglePartners from "./single-post/SinglePartners";
import SingleProjects from "./single-post/SingleProjects";
import SingleMedia from "./single-post/SingleMedia";
import SingleReward from "./single-post/SingleReward";
import UserData from "./user-data";
import WelcomeWAD from "./pages/welcome";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeModal from "./theme/WelcomeModal";

// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state, actions }) => {
  /* console.log(state) */
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const { locale } = "ar";
  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    let wpnonceStr = "_wpnonce";
    let activationKeyStr = "activation_key";
    let userVerificationActionStr = "user_verification_action";

    const searchParams = window.location.href;
    if (
      searchParams.includes(activationKeyStr) &&
      searchParams.includes(wpnonceStr)
    ) {
      let code = searchParams.substring(
        searchParams.indexOf(activationKeyStr) + activationKeyStr.length + 1,
        searchParams.lastIndexOf(userVerificationActionStr) - 1
      );
      let wpnonce = searchParams.substring(
        searchParams.indexOf(wpnonceStr) + wpnonceStr.length + 1,
        searchParams.indexOf("&")
      );
      if (code) {
        fetch(
          state.source.url +
            "?activation_key=" +
            code +
            "&user_verification_action=email_verification&_wpnonce=" +
            wpnonce
        )
          .then(() => actions.router.set(`/login`))
          .catch((err) => console.error("Error ", err));
      }
    }
  }, []);

  const overrides = extendTheme({
    direction: dir,
    body: {
      bg: "tamkeen.900",
    },
    fonts: {
      body: "Rubik, sans-serif",
      heading: "Rubik, sans-serif",
    },
    colors: { ...state.theme.colors },
    styles: {
      global: {
        "html, body": {
          background: "tamkeen.900",
          "input:focus": {
            borderColor: "#4C43CD !important",
            boxShadow: "none !important",
          },
          "button:focus": {
            borderColor: "#4C43CD !important",
            boxShadow: "none !important",
          },
          "a:focus": {
            boxShadow: "none !important",
          },
        },
      },
    },
    components: {
      Link: {
        variants: {
          base: {
            bg: "primary.700",
            fontSize: "14px",
            lineHeight: "18px",
            color: "#FFFFFF",
            fontWeight: "600",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            px: "40px",
            py: "20px",
            borderRadius: "40px",
            h: "100%",
          },
        },
      },
      Input: {
        variants: {
          outline: {
            backgroundColor: "#FFFFFF",
            _focus: {
              borderColor: "#4C43CD",
            },
          },
        },
      },
      CloseButton: {
        color: "#FFFFFF",
      },
    },
  });

  return (
    <ChakraProvider theme={{ ...overrides }}>
      <FontFace />
      <Global styles={SwiperCSS} />
      {/*       <Global styles={css(SwiperCSS2)} /> */}
      {/* Add CSS for Icons Fontastic */}
      <Icon />
      <Global styles={IconCss} />
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <meta charset="utf-8" />
        <meta name="theme-color" content="#150f35" />
        {/*    <html dir="rtl" lang="ar" /> */}
        <html />
      </Head>

      {/* Add the header of the site. */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
      </motion.div>

      {/* Add the main section. It renders a different component depending
		on the type of URL we are in. */}
      <Box
        as="main"
        /* mt={{ base: "40px", md: "70px" }} */
        minH="calc(100vh - 320px)"
      >
        <Switch>
          <Loading when={data.isFetching} />
          <WelcomeWAD when={state.router.link === "/welcome-to-win-a-dream/"} />
          <UserData when={state.router.link === "/my-account/"} />
          <SearchResults when={data.isSearch} />
          <Home when={data.isHome} />
          <Archivo when={data.isMediaArchive} />
          <Archive when={data.isArchive} />
          <Page when={data.isPage} />
          <SingleReward when={data.isRewards} />
          <SingleMedia when={data.isNews} />
          <SinglePartners when={data.isPartners} />
          <SingleAmbassadors when={data.isAmbassadors} />
          <SingleProjects when={data.isProjects} />
          <Post when={data.isPostType} />
          <Page404 when={data.is404 || data.isAdmin} />
        </Switch>
      </Box>
      <PartnersLogos bg="tamkeen.900" />
      <WelcomeModal />
      <Footer />
    </ChakraProvider>
  );
};

export default connect(Theme);
