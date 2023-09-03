import { connect, styled, frontity, decode } from "frontity";
import React, { useEffect } from "react";
import { Container, Flex, Heading, Text, Button, Box } from "@chakra-ui/react";
import Banner from "./Banner";
import HomeBanner from "../home/Banner";
import BannerCentered from "./BannerCentered";
import BannerRight from "./BannerRight";

const FlexibleHero = ({ state, libraries, actions, ...props }) => {
  // Flexible Content
  const flexHero = props?.flexible;
  var flexibleHero;
  {
    flexHero &&
      (flexibleHero = flexHero?.map((item, index) => {
        var layout = item?.acf_fc_layout;
        if (layout == "home_hero") {
          var bg = item?.background;
          var title = item?.title;
          var subtitle = item?.subtitle;
          var content = item?.content;
          var btn = item?.btn;
          var infoSquare = item?.info_square;
          var video = item?.video_url;
          var extra = item?.extra;
          var card1 = item?.info_square[0];
          var card2 = item?.info_square[1];
          return (
            <HomeBanner
              key={index}
              bg={bg?.bg}
              bgMobile={bg?.bg_mobile}
              bgGradient={bg?.bg_gradient}
              subtitle={subtitle}
              content={content}
              title={title?.title}
              infoSquare={infoSquare}
              btn={btn}
              fontSize={title?.title_fs}
              fontSizeMobile={title?.title_fs_sm}
              video={video}
              extra={extra}
              card1={card1}
              card2={card2}
            />
          );
        } else if (layout == "hero_left") {
          var bg = item?.background;
          var title = item?.title;
          var subtitle = item?.subtitle;
          var content = item?.content;
          var btn = item?.btn;
          var video = item?.video_url;
          return (
            <Banner
              key={index}
              bg={bg?.bg}
              bgMobile={bg?.bg_mobile}
              bgGradient={bg?.bg_gradient}
              subtitle={subtitle}
              content={content}
              title={title?.title}
              btn={btn}
              fontSize={title?.title_fs}
              fontSizeMobile={title?.title_fs_sm}
              position="left"
              video={video}
            />
          );
        } else if (layout == "hero_right") {
          var bg = item?.background;
          var title = item?.title;
          var subtitle = item?.subtitle;
          var content = item?.content;
          var btn = item?.btn;
          var video = item?.video_url;
          return (
            <BannerRight
              key={index}
              bg={bg?.bg}
              bgMobile={bg?.bg_mobile}
              bgGradient={bg?.bg_gradient}
              subtitle={subtitle}
              content={content}
              title={title?.title}
              btn={btn}
              fontSize={title?.title_fs}
              fontSizeMobile={title?.title_fs_sm}
              position="right"
              video={video}
            />
          );
        } else if (layout == "hero_centered") {
          var bg = item?.background;
          var title = item?.title;
          var subtitle = item?.subtitle;
          var content = item?.content;
          var btn = item?.btn;
          return (
            <BannerCentered
              key={index}
              bg={bg?.bg}
              bgMobile={bg?.bg_mobile}
              bgGradient={bg?.bg_gradient}
              subtitle={subtitle}
              content={content}
              btn={btn}
              title={title?.title}
              fontSize={title?.title_fs}
              fontSizeMobile={title?.title_fs_sm}
            />
          );
        }
        return content;
      }));
  }

  return <PageContainer as="section">{flexibleHero}</PageContainer>;
};
export default connect(FlexibleHero);

const PageContainer = styled(Box)``;
