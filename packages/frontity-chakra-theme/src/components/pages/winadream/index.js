import { connect, styled, decode } from "frontity";
import { React, useEffect, useState } from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import Banner from "../../theme/Banner";
import WhatIsSponsored from "./WhatIsSponsored";
import PartnersLogos from "../../theme/PartnersLogos";
import OurGoals from "./OurGoals";
import AboutCards from "./AboutCards";
import WhatIsCentered from "../../theme/WhatIsCentered";
import ArchiveProjects from "../../projects/ArchiveProjects";
import FlexibleContent from "../../theme/FlexibleContent";
import FlexibleHero from "../../theme/FlexibleHero";
import Headquarters from "./Headquarters";
import InfoSection from "../../theme/InfoSection";

const WinADream = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const id = data.id;
  const page = state.source.page[id]?.acf;
  const Html2React = libraries.html2react.Component;

  // Get isMobile Conditional from state
  const isMobile = state.theme?.isMobile;

  // Banner fields
  const bannerBg = page?.banner_bg;
  const bannerBgMobile = page?.banner_bg_mobile;
  const bannerSubtitle = page?.banner_subtitle;
  const bannerTitle = page?.banner_title;
  const bannerContent = page?.banner_content;
  const bannerFs = page?.font_size;
  const bannerFsMobile = page?.font_size_mobile;

  // What is?  fields
  const whatBg = page?.what_bg;
  const whatBgMobile = page?.what_bg_mobile;
  const whatSubtitle = page?.what_subtitle;
  const whatTitle = page?.what_title;
  const whatContent = page?.what_content;
  const whatBtn = page?.what_link;
  const whatSponsors = page?.what_sponsors;

  // Partners Slider  fields
  const partners = page?.partners;
  const partnersTitle = page?.partners_title;
  const partnersSubtitle = page?.partners_subtitle;

  // Our Goals fields
  const goalsBg = page?.goals_bg;
  const goalsBgMobile = page?.goals_bg_mobile;
  const goalsSubtitle = page?.goals_subtitle;
  const goalsTitle = page?.goals_title;
  const goals = page?.goals_repeater;

  // About Us Cards  fields
  const aboutTitle = page?.about_title;
  const aboutCards = page?.about_cards;

  // Win A Dream Foundation Centered fields
  const foundationBg = page?.foundation_bg;
  const foundationBgMobile = page?.foundation_bg_mobile;
  const foundationTitle = page?.foundation_title;
  const foundationContent = page?.foundation_content;
  const foundationBtn = page?.foundation_btn;

  // Map Headquarters fields
  const headquartersTitle = page?.headquarters_title;
  const headquartersContent = page?.headquarters_content;
  const headquartersMap = page?.headquarters_map;
  const headquartersMapMobile = page?.headquarters_map_mobile;
  const headquartersLegend = page?.headquarters_image;

  // Informative Section fields
  const omanBg = page?.oman_bg;
  const omanBgMobile = page?.oman_bg_mobile;
  const omanTitle = page?.oman_title;
  const omanContent = page?.oman_content;
  const omanVideo = page?.oman_video;

  // CTA
  const ctaTitle = page?.title_cta;
  const ctaSubtitle = page?.subtitle_cta;
  const ctaButton = page?.button_cta;

  // Testimonial Slider
  const testimonialsItems = page?.opinions;
  const testimonialBg = page?.opinions_bg?.url;

  /* const GetProjects = state.source.projects;
  const Projects = Object.values(GetProjects);
  state.theme.projects = Projects.map(
    (project) => state.source[project.type][project.id]
  ); */

  //NEWS fetch from state
  const allPosts = Object.values(state.source.news);

  const flexibleContent = page?.flexible;

  // Flexible Content HERO
  const flexHero = page?.flexible_hero;

  return (
    <Flex bg="tamkeen.900" width="100%" direction="column">
      <FlexibleHero flexible={flexHero} />
      <FlexibleContent flexible={flexibleContent} />
      {/*     {bannerBg && (
        <Banner
          bg={bannerBg}
          bgMobile={bannerBgMobile}
          title={bannerTitle}
          subtitle={bannerSubtitle}
          content={bannerContent}
          fontSize={bannerFs}
          fontSizeMobile={bannerFsMobile}
          vertical="flex-end"
          position="left"
        />
      )}
      {whatBg && (
        <WhatIsSponsored
          bg={whatBg}
          bgMobile={whatBgMobile}
          title={whatTitle}
          subtitle={whatSubtitle}
          content={whatContent}
  btn={whatBtn}
          sponsors={whatSponsors}
        />
      )}
      {partners && (
        <PartnersLogos
          title={partnersTitle}
          subtitle={partnersSubtitle}
          partners={partners}
          bg="#150f35"
        />
      )}
      {goalsBg && (
        <OurGoals
          bg={goalsBg}
          bgMobile={goalsBgMobile}
          title={goalsTitle}
          subtitle={goalsSubtitle}
          goals={goals}
        />
      )}
      {aboutCards && <AboutCards title={aboutTitle} cards={aboutCards} />}
      {foundationBg && (
        <WhatIsCentered
          title={foundationTitle}
          content={foundationContent}
          btn={foundationBtn}
          bg={foundationBg}
          bgMobile={foundationBgMobile}
        />
      )}
 <ArchiveProjects /> 
      {headquartersMap && (
        <Headquarters
          title={headquartersTitle}
          content={headquartersContent}
          map={headquartersMap}
          legend={headquartersLegend}
          mapMobile={headquartersMapMobile}
          isMobile={isMobile}
        />
      )}
      {omanBg && (
        <InfoSection
          bg={omanBg}
          bgMobile={omanBgMobile}
          title={omanTitle}
          content={omanContent}
          video={omanVideo}
        />
      )} */}
    </Flex>
  );
};
export default connect(WinADream);

const ListTitle = styled.h5`
  color: #8684b1;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 45px;
`;

const CustomBg = styled(Box)`
  background-blend-mode: soft-light;
`;
