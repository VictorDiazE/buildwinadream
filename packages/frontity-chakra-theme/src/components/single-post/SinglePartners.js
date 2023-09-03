import { connect, styled } from "frontity";
import React from "react";
import Banner from "../theme/Banner";
import InfoSection from "../theme/InfoSection";
import OmanSupport from "../theme/OmanSupport";
import DiscoverProjects from "../projects/DiscoverProjects";
import Testimonials from "../theme/Testimonials";
import Partners from "../theme/Partners";
import SimpleCTA from "../theme/SimpleCTA";
import { chakra, Flex, Container, Box } from "@chakra-ui/react";
import Link from "../link";
import FlexibleHero from "../theme/FlexibleHero";
import FlexibleContent from "../theme/FlexibleContent";

const SinglePartners = ({ state, libraries }) => {
  //Getting data from state

  const data = state.source.get(state.router.link);
  const id = data.id;
  const title = state.source.partners[id]?.title.rendered;
  const single = state.source.partners[id]?.acf;

  // Banner fields

  const bannerBg = single?.banner_bg;
  const bannerBgMobile = single?.banner_mobile_bg;
  const bannerSubtitle = single?.banner_subtitle;
  const bannerTitle = title;
  const bannerContent = single?.banner_content;
  const bannerButton = single?.banner_btn;
  const bannerFs = single?.font_size;
  const bannerFsMobile = single?.font_size_mobile;

  // InfoSection fields
  const infoTitle = single?.info_title;
  const infoContent = single?.info_content;
  const infoBg = single?.info_bg;
  const infoSubtitle = single?.info_subtitle;
  const infoBtn = single?.info_btn;

  // Discover fields

  const projectsTitle = single?.projects_title;
  const projectsContent = single?.projects_content;
  const projectsProjects = single?.projects;
  const discoverCTA = single?.discover_CTA;

  // Oman fields

  const omanTitle = single?.oman_title;
  const omanSubtitle = single?.oman_content;
  const omanItems = single?.oman_items;

  // Testimonials fields
  const testimonialItems = single?.opinions;
  const testimonialBg = single?.opinions_bg?.url;
  // Partners fields

  const partnersBg = single?.explore_bg;
  const partnersTitle = single?.explore_title;
  const partnersContent = single?.explore_content;
  const partnersPartners = single?.explore_partners;
  const partnersTheme = single?.global_theme_copy;

  //Simple CTA fields

  const ctaTitle = single?.cta_title;
  const ctaSubtitle = single?.cta_subtitle;
  const ctaButton = single?.cta_button;

  // Flexible Content
  const flexibleContent = single?.flexible;
  const flexibleHero = single?.flexible_hero;

  return (
    <Flex direction="column" width="100%" bg="tamkeen.900" className="">
      <FlexibleHero flexible={flexibleHero} />
      <FlexibleContent flexible={flexibleContent} />
      {/*  {bannerBg && (
        <Banner
          bg={bannerBg}
          bgMobile={bannerBgMobile}
          title={bannerTitle}
          subtitle={bannerSubtitle}
          content={bannerContent}
          btn={bannerButton}
          fontSize={bannerFs}
          fontSizeMobile={bannerFsMobile}
          vertical="center"
        />
      )}
      {infoBg && (
        <InfoSection
          bg={infoBg}
          title={infoTitle}
          subtitle={infoSubtitle}
          content={infoContent}
          btn={infoBtn}
          fs=""
          fsMobile=""
        />
      )}
      <Box background="linear-gradient(180deg, #150f35 0%, #150f35 100%)">
        {omanItems && (
          <OmanSupport
            title={omanTitle}
            subtitle={omanSubtitle}
            content={omanItems}
          />
        )}
      </Box>
      <CustomBg
        backgroundImage={{
          base: "url",
          md:
            "linear-gradient(180deg, #10182B 3.22%, rgba(30, 41, 59, 0) 109.8%),url(" +
            testimonialBg +
            ")",
        }}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundColor={{ md: "#150f35", base: "#150f35" }}
      >
        {projectsProjects && (
          <DiscoverProjects
            title={projectsTitle}
            content={projectsContent}
            items={projectsProjects}
          />
        )}
        {testimonialItems && <Testimonials items={testimonialItems} />}
      </CustomBg>
      {partnersPartners && (
        <Partners
          bg={partnersBg}
          title={partnersTitle}
          content={partnersContent}
          partners={partnersPartners}
          theme={partnersTheme}
        />
      )}
      <CustomBg
        backgroundImage={{
          base: "url",
          md: "linear-gradient(180deg, #1E2A3B 76.92%, rgba(30, 42, 59, 0) 115.18%)",
        }}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundColor={{ md: "#150f35", base: "#150f35" }}
      >
        {ctaTitle && (
          <SimpleCTA title={ctaTitle} content={ctaSubtitle} btn={ctaButton} />
        )}
      </CustomBg> */}
    </Flex>
  );
};
export default connect(SinglePartners);

const CustomBg = styled(Box)`
  background-blend-mode: soft-light;
`;
