import { connect, styled, decode } from "frontity";
import { React, useEffect, useState } from "react";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import AmbassadorsSlider from "../sliders/AmbassadorsSliders";

const MeetAmbassadors = ({ actions, state, libraries, ...props }) => {
  const Html2React = libraries.html2react.Component;

  const options = state?.source?.data["acf-options-page/"]?.acf;
  const partnersImage = options?.embassadors_slider_bg?.url;
  const partnersImageMobile = options?.embassadors_slider_bg_mobile?.url;
  const title = options?.embassadors_slider_title;
  const subtitle = options?.embassadors_slider_subtitle;
  const moreAmbassadorsCardBg =
    options?.embassadors_slider_moreambassadors?.url;
  const moreAmbassadorsText = options?.embassadors_slider_moreambassadors_text;

  // Pre-fetch the Ambassadors  if it hasn't been fetched yet.
  useEffect(() => {
    actions.source.fetch("/ambassadors/");
  }, []);
  const ambassadors = state.source.get("/ambassadors/");
  const items = ambassadors?.items;

  return (
    <Flex
      id="readmore"
      width="100%"
      direction="column"
      bgGradient={{
        base: `linear(to-t, tamkeen.900 0%, tamkeen800A 50%, buttonpurple 100%), url(${partnersImageMobile})`,
        md: `linear(to-t, tamkeen.900 0%, tamkeen800A 50%, buttonpurple 100%), url(${partnersImage})`,
      }}
      bgSize="cover"
      minHeight="600px"
      textAlign="center"
      pt="50px"
      pb="100px"
    >
      <HeadingWrapper
        textAlign={{ md: "center", base: "center" }}
        direction="column"
        width="100%"
        pt="30px"
        px="30px"
        alignItems="center"
        mb="20px"
      >
        {title && (
          <Heading
            as="h2"
            fontWeight="600"
            fontSize={{ md: "33px", base: "32px" }}
            lineHeight={{ base: "44px", md: "52px" }}
            color={{ md: "#fff", base: "#fff" }}
            mb="10px"
          >
            {title}
          </Heading>
        )}
        {subtitle && (
          <Text
            fontSize={{ md: "25px", base: "18px" }}
            lineHeight={{ md: "32px", base: "24px" }}
            color={{ md: "#fff", base: "#dee4ed" }}
            maxWidth="800px"
          >
            {subtitle}
          </Text>
        )}
      </HeadingWrapper>

      <AmbassadorsSlider
        moreAmbassadorsCardBg={moreAmbassadorsCardBg}
        moreAmbassadorsText={moreAmbassadorsText}
        items={items}
      />
    </Flex>
  );
};
export default connect(MeetAmbassadors);

const HeadingWrapper = styled(Flex)``;
