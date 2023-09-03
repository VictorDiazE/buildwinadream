import { connect, styled } from "frontity";
import React from "react";
import Banner from "../theme/Banner";
import FeaturedArticles from "../theme/FeaturedArticles";
import Info from "./Info";
import Testimonials from "../theme/Testimonials";
import Media from "../theme/MediaAmbassadors";
import MeetAmbassadors from "../theme/MeetAmbassadors";
import SimpleCTA from "../theme/SimpleCTA";
import { chakra, Flex, Container, Box } from "@chakra-ui/react";
import Link from "../link";
import FlexibleHero from "../theme/FlexibleHero";
import FlexibleContent from "../theme/FlexibleContent";

const SingleAmbassadors = ({ state, libraries }) => {
  //Getting data from state

  const data = state.source.get(state.router.link);
  const id = data.id;
  const title = state.source.ambassadors[id]?.title.rendered;
  const single = state.source.ambassadors[id]?.acf;

  // Banner fields
  const bannerBg = single?.banner_bg;
  const bannerBgMobile = single?.banner_mobile_bg;
  const bannerSubtitle = single?.banner_profession;
  const bannerTitle = title;
  const bannerContent = single?.banner_excerpt;
  const bannerButton = single?.banner_link;
  const bannerTitleFontSize = single?.font_size;
  const bannerTitleFontSizeMobile = single?.font_size_mobile;
  const bannerVideo = single?.banner_video;

  // Info fields
  const infoTitle = single?.info_title;
  const infoContent = single?.info_content;
  const infoBg = single?.info_bg;

  // Testimonials fields
  const testimonialItems = single?.testimonial;
  var testimonialBg = single?.testimonial_bg;

  // Media fields

  const MediaTitle = single?.media_title;
  const allPosts = single?.media_items;

  //Simple CTA fields

  const ctaTitle = single?.cta_title;
  const ctaSubtitle = single?.cta_subtitle;
  const ctaButton = single?.cta_btn;

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
          fontSize={bannerTitleFontSize}
          fontSizeMobile={bannerTitleFontSizeMobile}
          video={bannerVideo}
        />
      )}
      {infoBg && <Info bg={infoBg} title={infoTitle} content={infoContent} />}
      {testimonialItems && (
        <CustomBg
          backgroundImage={{
            base: "url",
            md:
              "linear-gradient(180deg, #1E2A3B 76.92%, rgba(30, 42, 59, 0) 115.18%), url(" +
              testimonialBg +
              ")",
          }}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundColor={{ md: "#150f35", base: "#150f35" }}
        >
          <Testimonials items={testimonialItems} />
        </CustomBg>
      )}
      {MediaTitle && (
        <CustomBg backgroundColor="#150f35">
          <Media title={MediaTitle} items={allPosts} />
        </CustomBg>
      )}
      <MeetAmbassadors />
      <CustomBg
        backgroundImage={{
          base: "url",
          md: "linear-gradient(180deg, #1E2A3B 76.92%, rgba(30, 42, 59, 0) 115.18%)",
        }}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundColor={{ md: "#150f35", base: "#150f35" }}
      >
        {ctaButton && (
          <SimpleCTA title={ctaTitle} content={ctaSubtitle} btn={ctaButton} />
        )}
      </CustomBg> */}
    </Flex>
  );
};
export default connect(SingleAmbassadors);

const CustomBg = styled(Box)`
  background-blend-mode: soft-light;
`;
