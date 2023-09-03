import { connect, styled, frontity, decode } from "frontity";
import React, { useEffect } from "react";
import { Container, Flex, Heading, Text, Button, Box } from "@chakra-ui/react";
import OurGoals from "../pages/winadream/OurGoals";
import AboutCards from "../pages/winadream/AboutCards";
import WhatIs from "./WhatIs";
import WhatIsCentered from "./WhatIsCentered";
import PartnersLogos from "./PartnersLogos";
import InfoSection from "./InfoSection";
import Testimonials from "./Testimonials";
import CustomCTA from "./SimpleCTABlog";
import SimpleCTA from "./SimpleCTA";
import ArchiveProjects from "../projects/ArchiveProjects";
import MeetAmbassadors from "./MeetAmbassadors";
import InstagramFeed from "./InstagramFeed";
import Partners from "./Partners";
import Gallery from "../projects/Gallery";
import DiscoverProjects from "../projects/DiscoverProjects";
import Media from "./Media";
import TheDream from "../home/TheDream";
import ExclusiveRewards from "../home/ExclusiveRewards";
import CustomMedia from "./MediaAmbassadors";
import Headquarters from "../pages/winadream/Headquarters";
import Faqs from "../faqs";
import RewardsSlider from "../sliders/RewardsSlider";

const FlexibleContent = ({ state, libraries, actions, ...props }) => {
  // Get isMobile Conditional from state
  const isMobile = state.theme?.isMobile;

  // Flexible Content
  const flexibleContent = props?.flexible;
  var flexible;
  {
    flexibleContent &&
      (flexible = flexibleContent?.map((item, index) => {
        var layout = item?.acf_fc_layout;
        /* console.log(layout); */
        if (layout == "what_is") {
          var bg = item?.background;
          var position = item?.content_position;
          var title = item?.title;
          var subtitle = item?.subtitle;
          var content = item?.content;
          var link = item?.link;
          var video = item?.video;
          var sponsored = item?.sponsored;
          return (
            <WhatIs
              key={index}
              bg={bg?.bg}
              bgMobile={bg?.bg_mobile}
              bgGradient={bg?.bg_gradient}
              subtitle={subtitle}
              title={title}
              horizontal={position}
              video={video}
              content={content}
              btn={link}
              sponsors={sponsored}
            />
          );
        } else if (layout == "what_is_centered") {
          var bg = item?.background;
          var position = item?.content_position;
          var title = item?.title;
          var subtitle = item?.subtitle;
          var content = item?.content;
          var link = item?.link;

          return (
            <WhatIsCentered
              key={index}
              bg={bg?.bg}
              bgMobile={bg?.bg_mobile}
              bgGradient={bg?.bg_gradient}
              position={position}
              title={title}
              content={content}
              btn={link}
            />
          );
        } else if (layout == "info_section") {
          var bg = item?.background;
          var position = item?.content_position;
          var tag = item?.tag;
          var title = item?.title;
          var subtitle = item?.subtitle;
          var content = item?.content;
          var btn = item?.link;
          var video = item?.video;
          var sponsored = item?.sponsored;

          return (
            <InfoSection
              key={index}
              bg={bg?.bg}
              bgMobile={bg?.bg_mobile}
              bgGradient={bg?.bg_gradient}
              position={position}
              title={title?.title}
              fontSize={title?.title_fs}
              fontSizeMobile={title?.title_fs_sm}
              subtitle={subtitle}
              tag={tag}
              btn={btn}
              content={content}
              video={video}
              sponsored={sponsored}
            />
          );
        } else if (layout == "about_cards") {
          // LIVE THE DREAM  fields
          var bg = item?.background?.bg_color;

          var title = item?.title;
          var subtitle = item?.subtitle;
          var cards = item?.cards;

          return (
            <AboutCards
              key={index}
              bg={bg}
              title={title}
              subtitle={subtitle}
              cards={cards}
            />
          );
        } else if (layout == "the_dream") {
          // LIVE THE DREAM  fields
          var dreamBg = item?.background;
          var dreamSubtitle = item?.subtitle;
          var title = item?.title;
          var dreamContent = item?.content;
          var dreamButton = item?.link;
          var list = item?.list;
          var dreamSlider = item?.slider;
          return (
            <TheDream
              key={index}
              bg={dreamBg?.bg}
              bgMobile={dreamBg?.bg_mobile}
              bgGradient={dreamBg?.bg_gradient}
              title={title?.title}
              fontSize={title?.title_fs}
              fontSizeMobile={title?.title_fs_sm}
              subtitle={dreamSubtitle}
              content={dreamContent}
              btn={dreamButton}
              items={dreamSlider}
              list={list}
            />
          );
        } else if (layout == "exclusive_rewards") {
          // Flexible Content Fields
          var bg = item?.background?.bg;
          var mobileBg = item?.background?.bg_mobile;
          var bgGradient = item?.background?.bg_gradient;
          var marquee = item?.marquee;
          var title = item?.title;
          var content = item?.content;
          var description = item?.description;
          var dateDescription = item?.date_description;
          var link = item?.link_cta;

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
              anyReward.getFullYear() >= anyActual &&
              anyReward.getMonth() >= mesActual
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

          return (
            <ExclusiveRewards
              key={index}
              bg={bg}
              bgGradient={bgGradient}
              bgMobile={mobileBg}
              marquee={marquee}
              title={title}
              content={content}
              description={description}
              link={link}
              Rewards={Rewards}
              date={dateDescription}
            />
          );
        } else if (layout == "ambassadors_slider") {
          // AMBASSADORS SLIDERS Fields
          var conditional = item?.conditional;
          return conditional && <MeetAmbassadors />;
        } else if (layout == "quotes") {
          // Quotes  fields
          var opinions = item?.opinions;
          var bg = item?.background;
          var bgDesktop = item?.background?.bg?.url;
          var bgMobile = item?.background?.bg_mobile?.url;
          var bgGradient = item?.background?.bg_gradient;

          return (
            <Box
              key={index}
              width="100%"
              bgImage={{
                md: bgGradient + ", url(" + bgDesktop + ")",
                base: bgGradient + ", url(" + bgMobile + ")",
              }}
              bgPosition="center"
              bgSize="cover"
              bgColor="#18183E"
            >
              <Testimonials items={opinions} bg={bg} />
            </Box>
          );
        } else if (layout == "instagram") {
          // Instagram  fields
          var aligned = item?.aligned;
          var conditional = item?.conditional;
          var bg = item?.background;
          var bgColor = bg?.bg_color;
          var bgGradient = bg?.bg_gradient;
          return (
            conditional && (
              <Box
                key={index}
                bg={{
                  md: bgGradient + "," + bgColor,
                  base:
                    " linear-gradient(0deg, #150f35 8.68%, rgba(15, 23, 42, 0.19) 100%)" +
                    "," +
                    bgColor,
                }}
                bgPosition="center"
                bgSize="cover"
                py="25px"
              >
                <InstagramFeed aligned={aligned} />
              </Box>
            )
          );
        } else if (layout == "icon_section") {
          // Keypoints Icons Section fields
          var bg = item?.background;
          var title = item?.title;
          var subtitle = item?.subtitle;
          var icons = item?.icons;
          return (
            <OurGoals
              key={index}
              bg={bg?.bg}
              bgMobile={bg?.bg_mobile}
              bgGradient={bg?.bg_gradient}
              title={title}
              subtitle={subtitle}
              goals={icons}
            />
          );
        } else if (layout == "our_projects") {
          // Keypoints Icons Section fields
          var bg = item?.background;
          var title = item?.title;
          var subtitle = item?.subtitle;
          var content = item?.content;
          var conditional = item?.projects_archive;

          // Pre-fetch Projects  if it hasn't been fetched yet.
          useEffect(() => {
            actions.source.fetch("/projects/");
          }, []);

          return (
            conditional && (
              <ArchiveProjects
                key={index}
                bg={bg}
                title={title?.title}
                fontSize={title?.title_fs}
                fontSizeMobile={title?.title_fs_sm}
                subtitle={subtitle}
                content={content}
              />
            )
          );
        } else if (layout == "partners_slider") {
          // Keypoints Icons Section fields
          var bg = item?.background;
          var theme = item?.theme;
          var title = item?.title;
          var content = item?.content;
          var partners = item?.partners;
          return (
            <Partners
              key={index}
              bg={bg?.bg}
              bgMobile={bg?.bg_mobile}
              bgGradient={bg?.bg_gradient}
              title={title}
              content={content}
              partners={partners}
              theme={theme}
            />
          );
        } else if (layout == "gallery_section") {
          // Keypoints Icons Section fields
          var bg = item?.background;
          var title = item?.title;
          var content = item?.content;
          var items = item?.gallery_items;
          var subtitle = item?.subtitle;
          return (
            <Gallery
              key={index}
              bg={bg}
              title={title}
              subtitle={subtitle}
              content={content}
              items={items}
            />
          );
        } else if (layout == "explore_projects_section") {
          // Keypoints Icons Section fields
          var bg = item?.background;
          var title = item?.title;
          var content = item?.content;
          var items = item?.projects;
          return (
            <DiscoverProjects
              key={index}
              bg={bg}
              title={title}
              content={content}
              items={items}
            />
          );
        } else if (layout == "media_slider") {
          // Keypoints Icons Section fields
          var bg = item?.background;
          const allPosts = Object.values(state.source.news);
          var title = item?.title;
          var cards = item?.media_cards;
          var conditional = item?.news_conditional;

          if (conditional == true) {
            return <Media bg={bg} title={title} items={allPosts} />;
          } else {
            return <CustomMedia bg={bg} title={title} items={cards} />;
          }
        } else if (layout == "call_to_action") {
          // Simple CTA fields
          var bg = item?.background;
          var title = item?.title;
          var content = item?.content;
          var link = item?.link;
          var bgGradient = bg?.bg_gradient;
          var bgColor = bg?.bg_color;
          var customBg = item?.custom_bg;
          return (
            <Box key={index} width="100%" bg={bgGradient + "," + bgColor}>
              {!customBg && (
                <SimpleCTA title={title} content={content} btn={link} />
              )}
              {customBg && (
                <CustomCTA title={title} content={content} btn={link} />
              )}
            </Box>
          );
        } else if (layout == "partners_logo_slider") {
          // Partners Logo Slider
          var bg = item?.background;
          var title = item?.title;
          var subtitle = item?.subtitle;
          var logos = item?.logos;
          return (
            <PartnersLogos
              key={index}
              title={title}
              subtitle={subtitle}
              partners={logos}
              bg={bg}
            />
          );
        } else if (layout == "faqs") {
          //Getting FAQS fields
          const dataFaq = state.source.get("/faq/");
          const idFaq = dataFaq.id;
          const singleFaq = state.source.page[idFaq]?.acf;

          return <Faqs afc={singleFaq} />;
        } else if (layout == "slider_monthly_rewards") {
          // MONTHLY REWARDS TITLE
          var title = item?.title;
          //Getting MONTHLY REWARDS
          const GetRewards = state.source["monthly-rewards"];
          const Rewards = Object.values(GetRewards);

          return (
            <Box position="relative" overflow="hidden" background="#150F35">
              <Box position="relative">
                {Rewards && (
                  <Slider
                    maxWidth="1200px"
                    w="100%"
                    mx="auto"
                    px="30px"
                    py="120px"
                  >
                    <Heading
                      as="h6"
                      fontSize="14px"
                      fontWeight="400"
                      lineHeight="24px"
                      mb="16px"
                      color="#8684b1"
                    >
                      {title}
                    </Heading>
                    <RewardsSlider items={Rewards} />
                  </Slider>
                )}
              </Box>
            </Box>
          );
        } else if (layout == "map_image_section") {
          // Map Image Section
          var bg = item?.background;
          var title = item?.title;
          var content = item?.content;
          var legend = item?.legend;
          var map = item?.image;
          var mapMobile = item?.image_mobile;
          return (
            <Headquarters
              key={index}
              bg={bg}
              title={title}
              content={content}
              map={map}
              legend={legend}
              mapMobile={mapMobile}
              isMobile={isMobile}
            />
          );
        }
        return content;
      }));
  }

  return <PageContainer as="section">{flexible}</PageContainer>;
};
export default connect(FlexibleContent);

const PageContainer = styled(Box)``;

const Slider = styled(Flex)`
  flex-direction: column;
`;
