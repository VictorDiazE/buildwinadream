import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import { chakra, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Pagination, Mousewheel, Navigation } from "swiper";
import Image from "@frontity/components/image";
import RewardCard from "../cards/RewardCard";

const RewardsSlider = ({ state, libraries, actions, ...props }) => {
  const items = props?.items;

  // Mapping Array and getting item info in RewardCard

  // Rewards Array
  var rewards = [];
  var swiperItems;
  {
    items &&
      (swiperItems = items?.map(({ id, link, type, item }) => {
        // Pre-fetch the Ambassadors  if it hasn't been fetched yet.
        useEffect(() => {
          actions.source.fetch(link);
        }, []);
        const reward = state.source[type][id];
        const rewardTitle = reward?.title?.rendered;
        const rewardDate = new Date(reward?.acf?.date);
        const img = reward?.featured_media;
        rewards.push(reward);
      }));
  }

  // Formating Single Reward Date into date
  const rewardsFechas = rewards.map(obj => {
    return { ...obj, date: new Date(obj.acf?.date) };
  });

  // Ordering Rewards by  date
  const sortedAsc = rewardsFechas.sort(
    (objA, objB) => Number(objA.date) - Number(objB.date)
  );

  // Mapping sorted Rewards Array and returning Swiper Slides with RewardCard
  {
    sortedAsc &&
      (swiperItems = sortedAsc?.map(({ id, title, featured_media, acf }, index) => {
        const rewardTitle = title.rendered;
        const rewardDate = new Date(acf?.date);
        const img = featured_media;
        return (
          <SwiperSlide key={index}>
            <RewardCard title={rewardTitle} image={img} date={rewardDate} />
          </SwiperSlide>
        );
      }));
  }

  return (
    <Container className="rewards-container-slider" pb="30px">
      <Swiper
        slidesPerView={1.4} // or 'auto'
        spaceBetween={20}
        grabCursor={true}
        mousewheel={{ forceToAxis: true }}
        navigation={true}
        modules={[Pagination, Mousewheel, Navigation]}
        className="rewards-slider"
        breakpoints={{
          640: {
            slidesPerView: 1.4,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }}
      >
        {swiperItems}
      </Swiper>
    </Container>
  );
};
export default connect(RewardsSlider);

const Container = styled(Box)`
  position: static;
  max-width: 100%;
  .rewards-slider .swiper-slide {
    height: auto !important;
  }
  .rewards-slider {
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
