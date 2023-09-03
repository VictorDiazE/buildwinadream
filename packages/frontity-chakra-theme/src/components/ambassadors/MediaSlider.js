import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import { chakra, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Pagination, Mousewheel, Navigation } from "swiper";
import MediaCard from "../cards/MediaCard";
import MediaCardBlocked from "../cards/MediaCardBlocked";

const MediaSlider = ({ state, libraries, actions, ...props }) => {
  const posts = props?.items;
  const news = props?.news;

  // Pre-fetch the Media  if it hasn't been fetched yet.
  useEffect(() => {
    actions.source.fetch("/news/");
  }, []);

  // Define isLogin variable and re render each time it changes
  var isLogin = state.theme.isLogin;
  const LoginVerification = ({ isLogin }) => {
    useEffect(() => {
      var isLogin = state.theme.isLogin;
    }, [isLogin]);

    return isLogin;
  };

  /* Guarda todo los post en el state */
  const media = state.source.get("news/");

  var swiperItems;
  {
    posts &&
      (swiperItems = posts?.map(({ ID, post_type, post_name }) => {
        const getNews = state.source.news;
        const link = "/" + post_type + "/" + post_name + "/";
        useEffect(() => {
          actions.source.fetch(link);
        });

        const singleMedia = state.source.news[ID];
        /* FETCH MEDIA GET FROM URL */
        var postTitle = singleMedia?.title?.rendered;
        var img = singleMedia?.featured_media;
        var subtitle = singleMedia?.acf?.subtitle;
        var duration = singleMedia?.acf?.duration;

        var blocked = singleMedia?.acf?.post_private;
        if (blocked && !isLogin == true) {
          return (
            <SwiperSlide key={ID}>
              <MediaCardBlocked
                title={postTitle}
                bg={img}
                subtitle={subtitle}
                link={link}
                duration={duration}
              />
            </SwiperSlide>
          );
        } else {
          return (
            <SwiperSlide key={ID}>
              <MediaCard
                title={postTitle}
                bg={img}
                subtitle={subtitle}
                link={link}
                duration={duration}
              />
            </SwiperSlide>
          );
        }
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
        className="media-slider"
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
      >
        {swiperItems}
      </Swiper>
    </Container>
  );
};
export default connect(MediaSlider);

const Container = styled(Box)`
  position: static;
  max-width: 100%;
  .media-slider .swiper-slide {
    height: auto !important;
  }
  .media-slider {
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
