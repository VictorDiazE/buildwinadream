import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Pagination, Mousewheel, Navigation } from "swiper";
import ProjectCard from "../cards/ProjectCard";
import CTACard from "../cards/CTACard";

const ProjectSlider = ({ state, libraries, actions, ...props }) => {
  const items = props?.items;
  const conditional = props?.cta;
  var ctaCardConditional;
  var masuno = 0;
  var swiperItems;
  {
    items &&
      (swiperItems = items?.map(({ ID, post_title, post_type }, index) => {
        const project = state.source[post_type][ID];
        const projectLink = project.link;
        const projectImage = project?.featured_media;
        return (
          <SwiperSlide key={index}>
            <ProjectCard
              img={projectImage}
              title={post_title}
              link={projectLink}
            />
          </SwiperSlide>
        );
      }));
  }
  {
    conditional &&
      (ctaCardConditional = (
        <SwiperSlide>
          <CTACard />
        </SwiperSlide>
      ));
  }

  {
    conditional && (masuno = 1);
  }

  //Conditional in case Items is less that 4 items
  const itemsNumber = props.items.length;
  const slidesNumber = itemsNumber >= 4 ? 4 : itemsNumber;

  return (
    <Container className="projects-container-slider" pb="30px">
      <Swiper
        slidesPerView={1.2} // or 'auto'
        spaceBetween={20}
        grabCursor={true}
        mousewheel={{ forceToAxis: true }}
        navigation={true}
        modules={[Pagination, Mousewheel, Navigation]}
        className="projects-slider"
        breakpoints={{
          640: {
            slidesPerView: 1.3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: slidesNumber - 1 + masuno,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: slidesNumber + masuno,
            spaceBetween: 50
          },
          1400: {
            slidesPerView: slidesNumber + masuno,
            spaceBetween: 50
          }
        }}
      >
        {swiperItems}
        {ctaCardConditional}
      </Swiper>
    </Container>
  );
};
export default connect(ProjectSlider);

const Container = styled(Box)`
  position: static;
  max-width: 100%;
  .projects-slider .swiper-slide {
    height: auto !important;
  }
  .projects-slider {
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
