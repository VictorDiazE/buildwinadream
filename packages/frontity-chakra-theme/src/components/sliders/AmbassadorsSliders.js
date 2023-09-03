import { connect, styled } from "frontity";
import React, { useRef, useState, useEffect } from "react";
import { chakra, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Mousewheel, Autoplay, Pagination, Navigation } from "swiper";
import AmbassadorsCard from "../cards/AmbassadorsCard";
import Link from "../link";
import MoreAmbassadorsCard from "../cards/MoreAmbassadorsCard";

const AmbassadorsSlider = ({ state, actions, libraries, ...props }) => {
  //Getting props fields
  const items = props?.items;
  const moreAmbassadorsCardBg = props?.moreAmbassadorsCardBg;
  const moreAmbassadorsText = props?.moreAmbassadorsText;

  // Get Banner ACF Fields
  var swiperItems;
  {
    items &&
      (swiperItems = items?.map(({ id, link }, index) => {
        // Pre-fetch the Ambassador Item  if it hasn't been fetched yet.
        useEffect(() => {
          actions.source.fetch(link);
        }, [actions.source]);

        return (
          <SwiperSlide key={index}>
            <Link link={link} className="card-link">
              <AmbassadorsCard id={id} />
            </Link>
          </SwiperSlide>
        );
      }));
  }

  return (
    <Container className="section-cards-slider">
      <Swiper
        slidesPerView={1.5}
        centeredSlides={{ centerInsufficientSlides: true }}
        spaceBetween={10}
        grabCursor={true}
        initialSlide={1}
        /*      loop={true} */
        /*       autoplay={{
          delay: 3000
        }} */
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        modules={[Autoplay, Mousewheel, Pagination, Navigation]}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1800: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        className="ambassador-slider-swiper"
      >
        {swiperItems}
        {moreAmbassadorsCardBg && (
          <SwiperSlide>
            <Link link="#" className="card-link">
              <MoreAmbassadorsCard
                bg={moreAmbassadorsCardBg}
                text={moreAmbassadorsText}
              />
            </Link>
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  );
};
export default connect(AmbassadorsSlider);

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  position: relative;
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
  .swiper-slide .ambassador-card::before:hover {
    min-height: 420px;
    top: 0;
    transition: ease-in-out 500ms;
    @media only screen and (min-width: 768px) {
      min-height: 630px;
    }
  }
  .swiper-slide .ambassador-card:hover {
    min-height: 420px;
    transition: ease-in-out 500ms;
    @media only screen and (min-width: 768px) {
      min-height: 630px;
    }
  }

  .swiper-slide {
    min-height: 420px;
    @media only screen and (min-width: 768px) {
      min-height: 630px;
    }
    display: flex;
    align-items: center;
    position: relative;
  }
  .card-link {
    width: 100%;
  }
  .ambassador-slider-swiper {
    /*   overflow: visible; */
    /*     position: static; */
    .swiper-button-next {
      bottom: 50%;
      transform: translateY(50%);
      top: auto;
      right: 0;
      background: white;
      padding: 30px 20px 30px 25px;
      border-radius: 8px 0px 0px 8px;
      transition: ease-in-out 500ms;
      transition-duration: 500ms;
      opacity: 1;
    }
    .swiper-button-next:after {
      font-size: 16px;
      color: #000;
    }
    .swiper-button-prev {
      bottom: 50%;
      transform: translateY(50%);
      top: auto;
      left: 0;
      background: white;
      padding: 30px 20px 30px 25px;
      border-radius: 0 8px 8px 0;
      transition: ease-in-out 500ms;
      transition-duration: 500ms;
      opacity: 1;
    }
    .swiper-button-prev:after {
      font-size: 16px;
      color: #000;
    }
    .swiper-button-disabled {
      opacity: 0;
      transition: ease-in-out 500ms;
      transition-duration: 500ms;
    }
  }
  .;
`;
