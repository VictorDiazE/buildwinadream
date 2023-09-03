import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Pagination, Mousewheel, Navigation } from "swiper";
import GalleryCard from "../cards/GalleryCard";

const GallerySlider = ({ state, libraries, actions, ...props }) => {
  const items = props?.items;
  var swiperItems;
  {
    items &&
      (swiperItems = items?.map(({ img }, index) => {
        return (
          <SwiperSlide key={index}>
            <GalleryCard img={img} />
          </SwiperSlide>
        );
      }));
  }

  return (
    <Container className="gallery-container-slider" pb="30px">
      <Swiper
        slidesPerView={1.2} // or 'auto'
        spaceBetween={20}
        grabCursor={true}
        mousewheel={{ forceToAxis: true }}
        navigation={true}
        modules={[Pagination, Mousewheel, Navigation]}
        className="gallery-slider"
        breakpoints={{
          640: {
            slidesPerView: 1.8,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1400: {
            slidesPerView: 3.5,
            spaceBetween: 20
          }
        }}
      >
        {swiperItems}
      </Swiper>
    </Container>
  );
};
export default connect(GallerySlider);

const Container = styled(Box)`
  position: static;
  max-width: 100%;
  .gallery-slider .swiper-slide {
    height: auto !important;
  }
  .gallery-slider {
    overflow: visible;
    position: static;
    .swiper-button-next {
      bottom: 190px;
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
      bottom: 190px;
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
`;
