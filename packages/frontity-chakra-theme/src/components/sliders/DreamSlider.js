import { connect, styled } from "frontity";
import React, { useRef, useState } from "react";
import { chakra, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import {
  FreeMode,
  Mousewheel,
  Autoplay,
  EffectCards,
  Pagination,
} from "swiper";
import Image from "@frontity/components/image";
import FrontityLink from "@frontity/components/link";

const CardLink = chakra(FrontityLink);

const DreamSlider = ({ state, libraries, ...props }) => {
  const Html2React = libraries.html2react.Component;
  //Getting props fields
  const items = props?.items;

  // Get Banner ACF Fields
  var swiperItems;
  {
    items &&
      (swiperItems = items?.map(
        ({ card_title, card_content, card_bg, card_link }, index) => {
          return (
            <SwiperSlide key={index}>
              <SlideCard
                className="card"
                bgImage={"url(" + card_bg?.url + ")"}
                bgPosition="center"
                bgSize="cover"
                link={card_link?.url}
              >
                <h4 className="card-title">{card_title}</h4>
                <p className="card-content">
                  <Html2React html={card_content} />
                </p>
              </SlideCard>
            </SwiperSlide>
          );
        }
      ));
  }

  return (
    <Container className="section-cards-slider">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 3000,
        }}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[EffectCards, Autoplay, Mousewheel, Pagination]}
        className="card-slider-swiper"
      >
        {swiperItems}
      </Swiper>
    </Container>
  );
};
export default connect(DreamSlider);

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  .partners-slider-swiper {
    height: 100%;
  }
  .swiper-slide {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
  .card-slider-swiper {
    width: 100%;
    overflow: hidden;
    margin-top: 50px;
  }

  .card-slider-swiper .swiper-slide-shadow {
    background: none;
  }
  .card-slider-swiper .swiper-wrapper {
    padding-bottom: 80px;
    max-width: 80vw;
    margin: auto;
    @media only screen and (min-width: 768px) {
      max-width: 400px;
    }
  }
  .swiper-pagination-bullet {
    background: white;
    min-width: 20px;
    min-height: 20px;
    opacity: 1;
    border: solid 7px #150f35;
  }
  span.swiper-pagination-bullet-active-main {
    outline: solid 1px white;
    background: white;
  }
  .card-slider-swiper .swiper-slide .card {
    min-height: 430px;
    max-width: 450px;
    @media only screen and (min-width: 768px) {
      min-height: 550px;
    }
  }
  .swiper-pagination-bullet {
  }
  .swiper-pagination {
    min-height: 25px;
    display: flex;
    align-items: center;
  }
  .;
`;

const SlideCard = styled(CardLink)`
  flex-direction: column;
  text-align: center;
  padding: 48px 23px;
  min-height: 550px;
  border-radius: 8px;
  width: 100%;
  .card-title {
    color: white;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 33px;
    line-height: 42px;
  }
  .card-content {
    color: white;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 12px;
  }
`;
