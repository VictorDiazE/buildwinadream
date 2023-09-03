import { connect, styled } from "frontity";
import React, { useRef, useState, useEffect } from "react";
import { chakra, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Mousewheel, Navigation } from "swiper";
import Image from "@frontity/components/image";
import TestimonialCard from "../cards/TestimonialCard";

const SlideImage = chakra(Image);

const TestimonialSlider = ({ state, libraries, ...props }) => {
  //Getting props fields
  const testimonials = props?.items;

  //Swiper custom pagination
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  var swiperItems;
  {
    testimonials &&
      (swiperItems = testimonials?.map(
        ({ quote, author_image, author_name, author_profession }, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialCard
                quote={quote}
                image={author_image}
                name={author_name}
                profession={author_profession}
              />
            </SwiperSlide>
          );
        }
      ));
  }
  return (
    <Container className="section-featured-slider" position="relative">
      <Swiper
        slidesPerView={1} // or 'auto'
        spaceBetween={20}
        mousewheel={{ forceToAxis: true }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Autoplay, Mousewheel, Navigation]}
        className="testimonials-slider-swiper"
      >
        {swiperItems}
        <div className="slider-pagination">
          <Icon
            ref={navigationPrevRef}
            className={`icon icon-left-arrow`}
          ></Icon>
          <Icon
            ref={navigationNextRef}
            className={`icon icon-rigth-arrow`}
          ></Icon>
        </div>
      </Swiper>
    </Container>
  );
};
export default connect(TestimonialSlider);

const Container = styled(Box)`
  width: 100%;
  min-height: 190px;
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
  }
  .swiper-wrapper {
    transition-timing-function: linear !important;
  }
  .testimonials-slider-swiper {
    position: static;
    ::before {
      content: "“";
      font-size: 350px;
      color: #dee4ed;
      opacity: 0.2;
      position: absolute;
      left: 0;
      top: 100px;
      line-height: 100px;
      @media only screen and (min-width: 768px) {
        left: -70px;
        top: -100px;
        line-height: inherit;
      }
    }
    .slider-pagination{
      top: -185px;
      padding-right:30px;
      padding-left:30px;
    display: flex;
    justify-content: flex-start;
    color:white;
    position:relative;
    z-index: 9;
    @media only screen and (min-width: 768px) {
      top:-100px;
      justify-content: flex-end;
    }
}
.icon-rigth-arrow{
  margin-left:15px;
}
.swiper-button-disabled{
  transform: scale(0.65);
  opacity: 0.5;
}
    }
  }
`;

const Icon = styled.div`
  font-size: 60px;
  line-height: 20px;
  color: #white;
  transition: ease 500ms;
  cursor: pointer;
`;
