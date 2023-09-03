import { connect, styled } from "frontity";
import { React, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Flex, Box } from "@chakra-ui/react";
import MeetAmbassadors from "../../theme/MeetAmbassadors";
import HeroAmbassadors from "./HeroAmbassadors";
import Media from "../../theme/Media";
import Testimonials from "../../theme/Testimonials";
import SimpleCTA from "../../theme/SimpleCTA";
import InstagramFeed from "../../theme/InstagramFeed";
import FlexibleContent from "../../theme/FlexibleContent";
import FlexibleHero from "../../theme/FlexibleHero";

const AmbassadorsArchive = ({ state, libraries, actions }) => {
  useEffect(() => {
    actions.source.fetch("/our-ambassadors/");
  }, []);
  // Obtenemos data desde la pàgina /our-ambassadors/ y NO de /ambassadors/ "Trick!!!!"
  const data = state.source.get("/our-ambassadors/");
  const id = data.id;
  const home = state.source.page[id]?.acf;

  var boxBg = home?.opinions_bg?.url;
  const testimonialsItems = home?.opinions;
  const isMobile = state.theme?.isMobile;
  {
    isMobile && (boxBg = "");
  }
  const ctaTitle = home?.title_cta;
  const ctaSubtitle = home?.subtitle_cta;
  const ctaButton = home?.button_cta;
  const MediaTitle = home?.media_title;
  const moreAmbassadorsBg = home?.embassadors_slider_moreambassadors;
  const moreAmbassadorsTitle = home?.embassadors_slider_moreambassadors_text;
  const allPosts = Object.values(state.source.news);

  // Flexible Content
  const flexibleContentFinale = home?.flexible;
  const flexibleHero = home?.flexible_hero;

  /* console.log(data) */

  if (data.isReady) {
    return (
      <Box bg={"tamkeen.900"}>
        <FlexibleHero flexible={flexibleHero} />
        <FlexibleContent flexible={flexibleContentFinale} />
        {/*   <HeroAmbassadors id={data.id} />
        <MeetAmbassadors
          moreAmbassadorsBg={moreAmbassadorsBg}
          moreAmbassadorsText={moreAmbassadorsTitle}
        />
        <CustomBg
          backgroundImage={{
            base: "url(" + boxBg + ")",
            md:
              "linear-gradient(180deg, #1E2A3B 76.92%, rgba(30, 42, 59, 0) 115.18%), url(" +
              boxBg +
              ")",
          }}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundColor={{ md: "#150f35", base: "#150f35" }}
        >
          {testimonialsItems && <Testimonials items={testimonialsItems} />}
            {allPosts && <Media title={MediaTitle} items={allPosts} />} 
          {!isMobile && <InstagramFeed align="left" />}

          <SimpleCTA title={ctaTitle} content={ctaSubtitle} btn={ctaButton} />
        </CustomBg> */}
      </Box>
    );
  } else {
    return <Loading />;
  }
};

export default connect(AmbassadorsArchive);

const CustomBg = styled(Box)`
  background-blend-mode: soft-light;
`;
