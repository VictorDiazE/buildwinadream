import { connect, styled, decode } from "frontity";
import React, { useEffect, useState } from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import Banner from "./Banner";
import WhatIs from "../theme/WhatIs";
import PartnersLogos from "../theme//PartnersLogos";
import Testimonials from "../theme/Testimonials";
import SimpleCTA from "../theme/SimpleCTA";
import MeetAmbassadors from "../theme/MeetAmbassadors";
import InstagramFeed from "../theme/InstagramFeed";
import Media from "../theme/Media";
import TheDream from "./TheDream";
import ExclusiveRewards from "./ExclusiveRewards";
import FlexibleHero from "../theme/FlexibleHero";
import FlexibleContent from "../theme/FlexibleContent";

const Home = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const id = data.id;
  const home = state.source.page[id]?.acf;
  const Html2React = libraries.html2react.Component;

  // Get isMobile Conditional from state
  const isMobile = state.theme?.isMobile;

  // Banner fields
  const bannerBg = home?.bg_banner;
  const bannerBgMobile = home?.bg_banner_mobile;
  const bannerSubtitle = home?.subtitle_banner;
  const bannerTitle = home?.title_banner;
  const bannerContent = home?.content_banner;
  const bannerButton = home?.link_banner;
  const bannerExtra = home?.extra_banner;
  const bannerCard1 = home?.info_square_banner;
  const bannerCard2 = home?.info_square_banner_2;
  const bannerVideo = home?.video_banner;

  // LOGOS SLIDER
  const logosTitle = home?.logos_title;
  const logosSubtitle = home?.logos_subtitle;

  // LIVE THE DREAM  fields
  const dreamBg = home?.bg_dream;
  const dreamSubtitle = home?.subtitle_dream;
  const dreamTitle = home?.title_dream;
  const dreamContent = home?.content_dream;
  const dreamButton = home?.link_dream;
  const dreamList = home?.dream_list;
  const dreamSlider = home?.slider_dream;

  // What Is Win A DREAM  fields
  const whatbg = home?.bg_what;
  const whatbgMobile = home?.bg_what_mobile;
  const whatSubtitle = home?.subtitle_what;
  const whatTitle = home?.title_what;
  const whatContent = home?.content_what;
  const whatButton = home?.link_what;
  const whatMore = home?.read_what;

  // What Is DIGITAL EXPERIENCES  fields
  /*   const digitaBg = home?.bg_digital;
  const digitalTitle = home?.title_digital;
  const digitalContent = home?.content_digital;
  const digitalButton = home?.link_digital;
  const digitalImage = home?.image_digital;
  const digitalHeading = home?.heading_digital; */

  // What Is Win A Dream Foundation  fields
  const foundationBg = home?.bg_foundation;
  const foundationBgMobile = home?.bg_foundation_mobile;
  const foundationTitle = home?.title_foundation;
  const foundationContent = home?.content_foundation;
  const foundationButton = home?.link_foundation;

  // Exclusive Rewardsfields
  const rewardsBg = home?.rewards_bg;
  const rewardsTitle = home?.rewards_title;
  const rewardsContent = home?.rewards_content;
  const rewardsDescription = home?.rewards_description;
  const rewardsMarquee = home?.rewards_marquee;

  // Rewards
  const GetRewards = state.source["monthly-rewards"];
  const Rewards = Object.values(GetRewards);
  // Ordenamos los rewards por fecha de ACF "acf.date" y los guardamos en state.theme.rewards
  const SortRewards = Rewards.sort(
    (a, b) => new Date(b?.acf.date) - new Date(a?.acf.date)
  );
  state.theme.rewards = SortRewards.map(
    (reward) => state.source[reward.type][reward.id]
  );
  const fecha = new Date();
  const mesActual = fecha.getMonth();
  const anyActual = fecha.getFullYear();

  const CheckThisMonth = (month) => {
    const anyReward = new Date(month?.acf.date);
    return (
      anyReward.getFullYear() >= anyActual && anyReward.getMonth() >= mesActual
    );
  };
  // Filtramos
  const filterRewards = Rewards.filter(CheckThisMonth);
  // Ordenamos
  const ReSortRewards = filterRewards.sort(
    (a, b) => new Date(a?.acf.date) - new Date(b?.acf.date)
  );
  // Guardamos en theme
  state.theme.rewardsOfThisMonth = ReSortRewards.map(
    (Month) => state.source[Month.type][Month.id]
  );

  // CTA
  const ctaTitle = home?.title_cta;
  const ctaSubtitle = home?.subtitle_cta;
  const ctaButton = home?.button_cta;

  // Testimonial Slider
  const testimonialsItems = home?.opinions;

  //BOX Background
  var boxBg = home?.opinions_bg?.url;

  {
    isMobile && (boxBg = "");
  }

  //Media fetch from state
  const MediaTitle = home?.media_title;
  const allPosts = Object.values(state.source.news);

  // Flexible Content
  const flexibleContent = home?.flexible;
  const flexibleHero = home?.flexible_hero;

  return (
    <Flex bg="tamkeen.900" width="100%" direction="column">
      {flexibleHero && <FlexibleHero flexible={flexibleHero} />}
      {flexibleContent && <FlexibleContent flexible={flexibleContent} />}
      {/*  <Banner
        bg={bannerBg}
        bgMobile={bannerBgMobile}
        title={bannerTitle}
        subtitle={bannerSubtitle}
        content={bannerContent}
        btn={bannerButton}
        card1={bannerCard1}
        card2={bannerCard2}
        extra={bannerExtra}
        isMobile={isMobile}
        video={bannerVideo}
      />

      <PartnersLogos
        bg={{ base: "tamkeen.900", md: "tamkeen.900" }}
        title={logosTitle}
        subtitle={logosSubtitle}
      />
      {dreamBg && (
        <TheDream
          bg={dreamBg}
          title={dreamTitle}
          subtitle={dreamSubtitle}
          content={dreamContent}
          btn={dreamButton}
          list={dreamList}
          items={dreamSlider}
          isMobile={isMobile}
        />
      )}
      {whatbg && (
        <WhatIs
          bg={whatbg}
          title={whatTitle}
          subtitle={whatSubtitle}
          content={whatContent}
          btn={whatButton}
          bgMobile={whatbgMobile}
          isMobile={isMobile}
          readmore={whatMore}
        />
      )}
      <Box
        bgImage={{
          md: "linear-gradient(360deg, #1E2A3B 76.92%, rgba(30, 42, 59, 0) 115.18%)",
          base: "",
        }}
        backgroundColor={{ md: "#150f35", base: "#150f35" }}
      >
        <MeetAmbassadors />
        <CustomBg backgroundColor="#150f35">
          {testimonialsItems && <Testimonials items={testimonialsItems} />}
        </CustomBg>
      </Box>
      {rewardsBg && (
        <ExclusiveRewards
          bg={rewardsBg}
          title={rewardsTitle}
          content={rewardsContent}
          description={rewardsDescription}
          marquee={rewardsMarquee}
          Rewards={Rewards}
        />
      )}
      {foundationBg && (
        <WADFoundation
          bg={foundationBg}
          title={foundationTitle}
          content={foundationContent}
          btn={foundationButton}
          bgMobile={foundationBgMobile}
          isMobile={isMobile}
        />
      )}

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
        {allPosts && <Media title={MediaTitle} items={allPosts} />}
        {!isMobile && <InstagramFeed align="left" />}

        <SimpleCTA title={ctaTitle} content={ctaSubtitle} btn={ctaButton} />
      </CustomBg> */}
    </Flex>
  );
};
export default connect(Home);

const ListTitle = styled.h5`
  color: #dee4ed;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 45px;
`;

const CustomBg = styled(Box)`
  background-blend-mode: soft-light;
`;
