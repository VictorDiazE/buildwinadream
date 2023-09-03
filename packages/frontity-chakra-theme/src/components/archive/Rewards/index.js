import { connect, styled } from "frontity";
import { React, useEffect, useState } from "react";
import { Container, Flex, Box, Heading } from "@chakra-ui/react";
import Banner from "../../theme/Banner";
import Info from "../../single-post/Info";
import InfoLeft from "../../single-post/InfoLeft";
import SimpleCTA from "../../theme/SimpleCTA";
import RewardsSlider from "../../sliders/RewardsSlider";
import Gallery from "../../projects/Gallery";
import RewardFlexible from "../../theme/RewardFlexible";
import BannerRewards from "./BannerRewards";
import Faqs from "../../faqs";
import FlexibleHero from "../../theme/FlexibleHero";
import FlexibleContent from "../../theme/FlexibleContent";

const RewardsArchive = ({ state, libraries, actions }) => {
  // Pre-fetch the Ambassadors  if it hasn't been fetched yet.
  useEffect(() => {
    actions.source.fetch("archive-rewards/");
  }, []);
  const data = state.source.get("archive-rewards/");
  /*   const data = state.source.data["/archive-partners/"]; */

  const Html2React = libraries.html2react.Component;

  var archive = data?.acf;
  // Get isMobile Conditional from state
  const isMobile = state.theme?.isMobile;

  // Banner fields
  const bannerBg = archive?.banner_bg;
  const bannerBgMobile = archive?.banner_bg_mobile;
  const bannerSubtitle = archive?.banner_subtitle;
  const bannerTitle = archive?.banner_title;
  const bannerTitleFontSize = archive?.font_size;
  const bannerTitleFontSizeMobile = archive?.font_size_mobile;
  const bannerContent = archive?.banner_content;

  // Main Partner
  const mainBg = archive?.main_bg;
  const mainBgMobile = archive?.main_bg_mobile;
  const mainTitle = archive?.main_title;
  const mainContent = archive?.main_content;
  const mainBtn = archive?.main_btn;
  // Secondary Partner
  const secondaryBg = archive?.secondary_bg;
  const secondaryBgMobile = archive?.secondary_bg_mobile;
  const secondaryTitle = archive?.secondary_title;
  const secondaryContent = archive?.secondary_content;
  const secondaryBtn = archive?.secondary_btn;
  // Alternative Partner
  const alternativeBg = archive?.alternative_bg;
  const alternativeBgMobile = archive?.alternative_bg_mobile;
  const alternativeTitle = archive?.alternative_title;
  const alternativeContent = archive?.alternative_content;
  const alternativeBtn = archive?.alternative_btn;

  // CTA
  const ctaTitle = archive?.cta_title;
  const ctaSubtitle = archive?.cta_subtitle;
  const ctaButton = archive?.cta_button;

  // Global Partners
  const globalBg = archive?.global_bg;
  const globalBgMobile = archive?.global_bg_mobile;
  const globalTitle = archive?.global_title;
  const globalContent = archive?.global_content;
  const globalPartners = archive?.global_partners;
  const globalTheme = archive?.global_theme;

  // Galllery Test
  const galleryTitle = archive?.gallery_title;
  const galleryContent = archive?.gallery_content;
  const galleryItems = archive?.gallery;
  const galleryRewards = archive?.gallery_rewards;
  const GetRewards = state.source["monthly-rewards"];
  const Rewards = Object.values(GetRewards);

  // Flexible Content Test
  const flexibleContent = archive?.flexible_content;

  // Repeater Main Partners
  const mainPartners = archive?.main_repeater;

  //Getting FAQS fields
  const dataFaq = state.source.get("/faq/");
  const idFaq = dataFaq.id;
  const singleFaq = state.source.page[idFaq]?.acf;

  var flexible;
  {
    flexibleContent &&
      (flexible = flexibleContent?.map((item) => {
        var layout = item?.acf_fc_layout;
        const gifts =
          layout == "text_right" ? (
            <RewardFlexible
              bg={item?.right_bg}
              title={item?.right_title}
              content={item?.right_content}
              btn={item?.right_link}
              bgMobile={item?.right_bg_mobile}
              align="text_right"
            />
          ) : (
            <RewardFlexible
              bg={item?.left_bg}
              title={item?.left_title}
              content={item?.left_content}
              btn={item?.left_link}
              bgMobile={item?.left_bg_mobile}
              align="text_left"
            />
          );
        return gifts;
      }));
  }

  // Flexible Content
  const flexibleContentFinale = archive?.flexible;
  const flexibleHero = archive?.flexible_hero;

  return (
    <Flex direction="column" width="100%" bg="tamkeen.900" className="">
      {flexibleHero && <FlexibleHero flexible={flexibleHero} />}
      {flexibleContentFinale && (
        <FlexibleContent flexible={flexibleContentFinale} />
      )}
      {/*   <BannerRewards
        bg={bannerBg}
        bgMobile={bannerBgMobile}
        title={bannerTitle}
        subtitle={bannerSubtitle}
        fontSize={bannerTitleFontSize}
        fontSizeMobile={bannerTitleFontSizeMobile}
        content={bannerContent}
        vertical="center"
      />
      {flexible} */}
      {/*       <Info 
        bg={mainBg}
        bgMobile={mainBgMobile}
        title={mainTitle}
        content={mainContent}
        btn={mainBtn}
      />
      <InfoLeft
        bg={secondaryBg}
        bgMobile={secondaryBgMobile}
        title={secondaryTitle}
        content={secondaryContent}
        btn={secondaryBtn}
      />
      <Info 
        bg={alternativeBg}
        bgMobile={alternativeBgMobile}
        title={alternativeTitle}
        content={alternativeContent}
        btn={alternativeBtn}
      /> */}
      {/*   <Box position="relative" overflow="hidden">
        <Box position="relative">
          {Rewards && (
            <Slider maxWidth="1200px" w="100%" mx="auto" px="30px" py="120px">
              <Heading
                as="h6"
                fontSize="14px"
                fontWeight="400"
                lineHeight="24px"
                mb="16px"
                color="#8684b1"
              >
                {galleryTitle}
              </Heading>
              <RewardsSlider items={Rewards} />
            </Slider>
          )}
        </Box>
        {singleFaq && <Faqs afc={singleFaq} />}
      </Box>
      {ctaButton && (
        <CustomBg
          backgroundImage={{
            base: "url()",
            md: "linear-gradient(0deg, #150f35 50%, rgba(30, 41, 59, 0) 85.17%)",
          }}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundColor={{ md: "#150f35", base: "#150f35" }}
          minHeight="370px"
          pt="30px"
          align="center"
        >
          (
          <SimpleCTA title={ctaTitle} content={ctaSubtitle} btn={ctaButton} />)
        </CustomBg>
      )} */}
    </Flex>
  );
};

export default connect(RewardsArchive);

const CustomBg = styled(Flex)`
  background-blend-mode: soft-light;
`;

const Slider = styled(Flex)`
  flex-direction: column;
`;
