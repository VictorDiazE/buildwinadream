import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import { chakra } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay } from "swiper";
import Image from "@frontity/components/image";

const SlideImage = chakra(Image);

const PartnersLogosSlider = ({ state, libraries, ...props }) => {
  //Getting props fields
  const items = props?.partners;

  // Get Banner ACF Fields
  var swiperItems;
  {
    items &&
      (swiperItems = items?.map((item, index) => {
        let image = item.image;
        return (
          <SwiperSlide key={index}>
            <SlideImage
              id={image.id}
              alt={image.alt}
              src={image.url}
              maxHeight="100px"
            />
          </SwiperSlide>
        );
      }));
  }

  return (
    <Container className="section-featured-slider">
      <Swiper
        slidesPerView={2} // or 'auto'
        spaceBetween={20}
        modules={[Autoplay]}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
        }}
        speed={3000}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="partners-logos-slider-swiper"
      >
        {swiperItems}
      </Swiper>
    </Container>
  );
};
export default connect(PartnersLogosSlider);

const Container = styled.div`
  width: 100%;
  min-height: 190px;
  display: flex;
  align-items: center;
  margin: auto;
  .partners-logos-slider-swiper {
    height: 100%;
  }
  .swiper-slide {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-wrapper {
    transition-timing-function: linear !important;
  }
`;
