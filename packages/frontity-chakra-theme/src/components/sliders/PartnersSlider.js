import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import { chakra, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Pagination, Mousewheel, Navigation } from "swiper";
import PartnerCard from "../cards/PartnerCard";

const PartnersSlider = ({ state, libraries, actions, ...props }) => {
  const partners = props?.items;
  var swiperItems;
  {
    partners &&
      (swiperItems = partners?.map(({ ID, post_type, post_name }, index) => {
        /* Guarda todo los post en el state */
        const media = state.source.get("/partners/");
        const partnerLink = "/" + post_type + "/" + post_name + "/";
        useEffect(() => {
          actions.source.fetch(partnerLink);
        });
        /*      console.log(partnerLink); */

        /*         console.log(media); */
        const partner = state.source[post_type][ID];
        const partnerImage = partner?.featured_media;
        return (
          <SwiperSlide key={index}>
            <PartnerCard link={partnerLink} img={partnerImage} />
          </SwiperSlide>
        );
      }));
  }

  return (
    <Container className="media-container-slider" pb="30px">
      <Swiper
        slidesPerView={1.2} // or 'auto'
        spaceBetween={20}
        grabCursor={true}
        mousewheel={{ forceToAxis: true }}
        navigation={true}
        modules={[Pagination, Mousewheel, Navigation]}
        className="partners-slider"
        breakpoints={{
          640: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {swiperItems}
      </Swiper>
    </Container>
  );
};
export default connect(PartnersSlider);

const Container = styled(Box)`
  position: static;
  max-width: 100%;
  .partners-slider .swiper-slide {
    height: auto !important;
  }
  .partners-slider {
    overflow: visible;
    position: static;
    .swiper-button-next {
      bottom: 190px;
      top: calc(50% + 35px);
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
      top: calc(50% + 35px);
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
