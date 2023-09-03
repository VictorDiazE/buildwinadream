import { connect, styled } from "frontity";
import React from "react";
import Banner from "../theme/Banner";
import WhatIsCentered from "../theme/WhatIsCentered";
import WhatIs from "../theme/WhatIs";
import TheDream from "../home/TheDream";
import AboutCards from "../pages/winadream/AboutCards";
import InfoSection from "../theme/InfoSection";
import RewardFlexible from "../theme/RewardFlexible";
import SimpleCTA from "../theme/SimpleCTA";
import { chakra, Flex, Container, Box } from "@chakra-ui/react";
import Faqs from "../faqs";
import FlexibleHero from "../theme/FlexibleHero";
import FlexibleContent from "../theme/FlexibleContent";

const SingleReward = ({ state, libraries }) => {
  //Getting data from state
  const data = state.source.get(state.router.link);
  const id = data.id;
  const title = state.source[data.type][id]?.title.rendered;
  const single = state.source[data.type][id]?.acf;

  /*   const dataFaq = state.source.get('/faq/');
  const idFaq = dataFaq.id;
  const singleFaq = state.source.page[idFaq]?.acf; */

  // Banner fields
  const bannerBg = single?.banner_bg;
  const bannerBgMobile = single?.banner_mobile_bg;
  const bannerSubtitle = single?.banner_subtitle;
  const bannerTitle = single?.banner_title;
  const bannerContent = single?.banner_content;
  const bannerButton = single?.banner_btn;
  const bannerFs = single?.font_size;
  const bannerFsMobile = single?.font_size_mobile;

  // Flexible Content Test
  const flexibleContent = single?.reward_flexible;

  //Simple CTA fields

  const ctaTitle = single?.cta_title;
  const ctaSubtitle = single?.cta_subtitle;
  const ctaButton = single?.cta_button;

  // Flexible Content
  const flexibleContentfinale = single?.flexible;
  const flexibleHero = single?.flexible_hero;

  var flexible;
  {
    flexibleContent &&
      (flexible = flexibleContent?.map((item) => {
        var layout = item?.acf_fc_layout;
        /* console.log(layout); */
        if (layout == "info_section") {
          var bg = item?.bg;
          var bgMobile = item?.bg_mobile;
          var title = item?.title;
          var content = item?.content;
          return (
            <InfoSection
              bg={bg}
              bgMobile={bgMobile}
              title={title}
              content={content}
            />
          );
        } else if (layout == "content_center") {
          var bg = item?.bg;
          var bgMobile = item?.bg_mobile;
          var title = item?.title;
          var content = item?.content;
          var btn = item?.btn;
          return (
            <WhatIsCentered
              bg={bg}
              bgMobile={bgMobile}
              title={title}
              content={content}
            />
          );
        } else if (layout == "cards_section") {
          var title = item?.title;
          var cards = item?.cards;

          return <AboutCards title={title} cards={cards} />;
        } else if (layout == "the_dream_slider") {
          // LIVE THE DREAM  fields
          var dreamBg = item?.bg;
          var dreamSubtitle = item?.subtitle;
          var dreamTitle = item?.title;
          var dreamContent = item?.content;
          var dreamButton = item?.link;
          var dreamList = item?.list;
          var dreamSlider = item?.slider;
          return (
            <TheDream
              bg={dreamBg}
              title={dreamTitle}
              subtitle={dreamSubtitle}
              content={dreamContent}
              btn={dreamButton}
              list={dreamList}
              items={dreamSlider}
            />
          );
        } else if (layout == "half_column") {
          // Flexible Content Fields
          var bg = item?.bg;
          var mobileBg = item?.bg_mobile;
          var title = item?.title;
          var subtitle = item?.subtitle;
          var content = item?.content;
          var link = item?.link;
          var aligned = item?.aligned;
          return (
            <RewardFlexible
              bg={bg}
              bgMobile={mobileBg}
              title={title}
              subtitle={subtitle}
              content={content}
              btn={link}
              align={aligned}
            />
          );
        }
        return content;
      }));
  }

  return (
    <Flex direction="column" width="100%" bg="tamkeen.900" className="">
      <FlexibleHero flexible={flexibleHero} />
      <FlexibleContent flexible={flexibleContentfinale} />
      {/* <Banner
        bg={bannerBg}
        bgMobile={bannerBgMobile}
        title={bannerTitle}
        subtitle={bannerSubtitle}
        content={bannerContent}
        btn={bannerButton}
        vertical="center"
        fontSize={bannerFs}
        fontSizeMobile={bannerFsMobile}
      />
      {flexible}
      <Faqs afc={single} /> 
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
export default connect(SingleReward);

const CustomBg = styled(Box)`
  background-blend-mode: soft-light;
`;
