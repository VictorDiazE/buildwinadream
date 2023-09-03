import { connect, styled } from "frontity";
import React from "react";
import Banner from "../theme/Banner";
import InfoSection from "../theme/InfoSection";
import WhatIs from "../theme/WhatIs";
import ProjectSlider from "../sliders/ProjectSlider";
import DiscoverProjects from "../projects/DiscoverProjects";
import Testimonials from "../theme/Testimonials";
import Gallery from "../projects/Gallery";
import SimpleCTA from "../theme/SimpleCTA";
import { chakra, Flex, Container, Box } from "@chakra-ui/react";
import Link from "../link";
import BannerProjectChild from "../projects/BannerProjectChild";
import FlexibleHero from "../theme/FlexibleHero";
import FlexibleContent from "../theme/FlexibleContent";

const SingleProjects = ({ state, libraries }) => {
  //Getting data from state

  const data = state.source.get(state.router.link);
  const id = data.id;
  const title = state.source[data.type][id]?.title.rendered;
  const single = state.source[data.type][id]?.acf;

  // Banner fields
  const bannerBg = single?.banner_bg;
  const bannerBgMobile = single?.banner_mobile_bg;
  const bannerSubtitle = single?.banner_subtitle;
  const bannerTitle = title;
  const bannerContent = single?.banner_content;
  const bannerButton = single?.banner_btn;
  const bannerTitleFontSize = single?.font_size;
  const bannerTitleFontSizeMobile = single?.font_size_mobile;

  // InfoSection fields
  const infoTitle = single?.info_title;
  const infoContent = single?.info_content;
  const infoBg = single?.info_bg;
  const infoSubtitle = single?.info_subtitle;
  const infoBtn = single?.info_btn;

  // Gallery Fields
  const galleryTitle = single?.gallery_title;
  const galleryContent = single?.gallery_content;
  const galleryItems = single?.gallery;

  // Testimonials fields
  const testimonialItems = single?.opinions;
  var testimonialBg = single?.gallery_bg?.url;

  // Discover Projects fields
  var projectsBg = single?.explore_bg;
  const projectsBgMobile = single?.explore_bg_mobile;
  const projectsTitle = single?.explore_title;
  const projectsContent = single?.explore_content;
  const projectsProjects = single?.explore_projects;

  //Simple CTA fields

  const ctaTitle = single?.cta_title;
  const ctaSubtitle = single?.cta_subtitle;
  const ctaButton = single?.cta_button;
  /* console.log(ctaButton); */

  // Flexible Content
  const flexibleContent = single?.flexible;
  const flexibleHero = single?.flexible_hero;

  return (
    <Flex direction="column" width="100%" bg="tamkeen.900" className="">
      <FlexibleHero flexible={flexibleHero} />
      <FlexibleContent flexible={flexibleContent} />
      {/*  <Banner
        bg={bannerBg}
        bgMobile={bannerBgMobile}
        title={bannerTitle}
        subtitle={bannerSubtitle}
        content={bannerContent}
        btn={bannerButton}
        fontSize={bannerTitleFontSize}
        fontSizeMobile={bannerTitleFontSizeMobile}
      />
      <WhatIs
        bg={infoBg}
        title={infoTitle}
        subtitle={infoSubtitle}
        content={infoContent}
        btn={infoBtn}
        horizontal="flex-end"
      />
      <CustomBg
        backgroundImage={{
          base: "url",
          md:
            "linear-gradient(180deg, #150f35 0%, rgba(30, 41, 59, 0) 100%),url(" +
            testimonialBg +
            ");",
        }}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundColor={{ md: "#150f35", base: "#150f35" }}
      >
        {galleryItems && (
          <Gallery
            title={galleryTitle}
            content={galleryContent}
            items={galleryItems}
          />
        )}

        {testimonialItems && <Testimonials items={testimonialItems} />}
      </CustomBg>
      {projectsProjects && (
        <DiscoverProjects
          bg={projectsBg}
          title={projectsTitle}
          content={projectsContent}
          items={projectsProjects}
        />
      )}
      {ctaButton && (
        <CustomBg
          backgroundImage={{
            base: "url",
            md: "linear-gradient(180deg, #1E2A3B 76.92%, rgba(30, 42, 59, 0) 115.18%)",
          }}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundColor={{ md: "#150f35", base: "#150f35" }}
        >
          <SimpleCTA title={ctaTitle} content={ctaSubtitle} btn={ctaButton} />
        </CustomBg>
      )} */}
    </Flex>
  );
};
export default connect(SingleProjects);

const CustomBg = styled(Box)`
  background-blend-mode: soft-light;
`;
