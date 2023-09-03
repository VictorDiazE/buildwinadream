import { connect, styled } from "frontity";
import { React, useEffect, useState } from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import BannerProjectChild from "../../projects/BannerProjectChild";
import BannerCentered from "../../theme/BannerCentered";
import InfoSectionSponsored from "../../theme/InfoSectionSponsored";
import SimpleCTA from "../../theme/SimpleCTA";
import Partners from "../../theme/Partners";
import Gallery from "../../projects/Gallery";
import DiscoverProjects from "../../projects/DiscoverProjects";
import WADFoundation from "../../home/WADFoundation";
import RewardFlexible from "../../theme/RewardFlexible";
import FlexibleContent from "../../theme/FlexibleContent";
import FlexibleHero from "../../theme/FlexibleHero";

const PartnersArchive = ({ state, libraries, actions }) => {
  // Pre-fetch the Ambassadors  if it hasn't been fetched yet.
  useEffect(() => {
    actions.source.fetch("archive-partners/");
  }, []);
  const data = state.source.get("archive-partners/");
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
  const bannerContent = archive?.banner_content;
  const bannerTitleFontSize = archive?.banner_font_size;
  const bannerTitleFontSizeMobile = archive?.banner_font_size_mobile;

  // Main Partner
  const mainBg = archive?.main_bg;
  const mainBgMobile = archive?.main_bg_mobile;
  const mainTitle = archive?.main_title;
  const mainTag = archive?.main_tag;
  const mainContent = archive?.main_content;
  const mainBtn = archive?.main_btn;
  const mainSponsored = archive?.sponsored_group;

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

  // Regional Partners
  const regionalBg = archive?.regional_bg;
  const regionalBgMobile = archive?.regional_bg_mobile;
  const regionalTitle = archive?.regional_title;
  const regionalContent = archive?.regional_content;
  const regionalPartners = archive?.regional_partners;
  const regionalTheme = archive?.regional_theme;

  // Local Partners
  const localBg = archive?.local_bg;
  const localBgMobile = archive?.local_bg_mobile;
  const localTitle = archive?.local_title;
  const localContent = archive?.local_content;
  const localPartners = archive?.local_partners;
  const localTheme = archive?.local_theme;

  // Foundation Partners
  const foundationBg = archive?.foundation_bg;
  const foundationBgMobile = archive?.foundation_bg_mobile;
  const foundationTitle = archive?.foundation_title;
  const foundationContent = archive?.foundation_content;
  const foundationPartners = archive?.foundation_partners;
  const foundationTheme = archive?.foundation_theme;

  // Galllery Test
  const galleryTitle = archive?.gallery_title;
  const galleryContent = archive?.gallery_content;
  const galleryItems = archive?.gallery;

  // Project Test
  const projectTitle = archive?.projects_title;
  const projectContent = archive?.projects_content;
  const projectItems = archive?.projects;
  const projectCTA = archive?.projects_card_conditional;

  // Flexible Content Test
  const flexibleContent = archive?.flexible_content;

  // Flexible Content
  const flexibleContentFinale = archive?.flexible;
  const flexibleHero = archive?.flexible_hero;

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

  // Info Section Repeater
  const partnersInfo = archive?.main_repeater;
  /* console.log(partnersInfo); */

  var mainPartnersRepeater;
  {
    partnersInfo &&
      (mainPartnersRepeater = partnersInfo?.map((item) => {
        var bg = item?.main_bg;
        var bgMobile = item?.main_bg_mobile;
        var title = item?.main_title;
        var content = item?.main_content;
        var btn = item?.main_btn;
        var tag = item?.main_tag;
        var sponsored = item?.sponsored_group;
        var fs = item?.main_font_size;
        var fsMobile = item?.main_font_size_mobile;

        return (
          <InfoSectionSponsored
            bg={bg}
            bgMobile={bgMobile}
            title={title}
            content={content}
            btn={btn}
            tag={tag}
            sponsor={sponsored}
            fontSize={fs}
            fontSizeMobile={fsMobile}
          />
        );
      }));
  }

  return (
    <PageContainer>
      {flexibleHero && <FlexibleHero flexible={flexibleHero} />}
      {flexibleContentFinale && (
        <FlexibleContent flexible={flexibleContentFinale} />
      )}
      {/*     <BannerCentered
        bg={bannerBg}
        bgMobile={bannerBgMobile}
        fontSize={bannerTitleFontSize}
        fontSizeMobile={bannerTitleFontSizeMobile}
        title={bannerTitle}
        subtitle={bannerSubtitle}
        content={bannerContent}
      /> */}
      {/*       <DiscoverProjects
        title={projectTitle}
        content={projectContent}
        items={projectItems}
        cta={projectCTA}
      />
      {flexible} */}
      {/*       {mainBg && (
        <InfoSectionSponsored
          bg={mainBg}
          bgMobile={mainBgMobile}
          title={mainTitle}
          content={mainContent}
          tag={mainTag}
          btn={mainBtn}
          sponsor={mainSponsored}
        />
      )} */}
      {/* {mainPartnersRepeater} */}
      {/*       <Gallery
        title={galleryTitle}
        content={galleryContent}
        items={galleryItems}
      /> */}
      {/*    {globalPartners && (
        <Partners
          bg={globalBg}
          bgMobile={globalBgMobile}
          title={globalTitle}
          content={globalContent}
          partners={globalPartners}
          theme={globalTheme}
        />
      )}
      {regionalPartners && (
        <Partners
          bg={regionalBg}
          bgMobile={regionalBgMobile}
          title={regionalTitle}
          content={regionalContent}
          partners={regionalPartners}
          theme={regionalTheme}
        />
      )}
      {localPartners && (
        <Partners
          bg={localBg}
          bgMobile={localBgMobile}
          title={localTitle}
          content={localContent}
          partners={localPartners}
          theme={localTheme}
        />
      )}
      {foundationPartners && (
        <Partners
          bg={foundationBg}
          bgMobile={foundationBgMobile}
          title={foundationTitle}
          content={foundationContent}
          partners={foundationPartners}
          theme={foundationTheme}
        />
      )}
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
        <SimpleCTA title={ctaTitle} content={ctaSubtitle} btn={ctaButton} />
      </CustomBg> */}
    </PageContainer>
  );
};

export default connect(PartnersArchive);

const PageContainer = styled.div`
  width: 100%;
  display: block;
`;

const CustomBg = styled(Flex)`
  background-blend-mode: soft-light;
`;
