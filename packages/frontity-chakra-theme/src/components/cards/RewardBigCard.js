import { connect, styled, css } from "frontity";
import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";

import Image from "@frontity/components/image";
import FrontityLink from "@frontity/components/link";
import Countdown from "react-countdown";

const FooterImage = chakra(Image);

const RewardBigCard = ({ state, actions, ...props }) => {
  const data = state.source.get(state.router.link);
  const id = data.id;
  const page = state.source.page[id]?.acf;
  const link = props?.link;
  const dateDescription = props?.date;

  /* console.log(state.theme.rewardsOfThisMonth) */
  const RewardOfMonth = state.theme.rewardsOfThisMonth[0];
  const title = RewardOfMonth?.acf.highlighted_title;
  const media = state.source.attachment[RewardOfMonth?.featured_media];
  const bgImage = media?.source_url;
  const button = page.link_text_cta;
  const linkCTA = page.link_cta;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  const anyActual = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  const RewardDate = RewardOfMonth?.acf.date;
  const finish = new Date(RewardDate) - new Date(today);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      /* return <Completionist />; */
      return (
        <>
          <Day direction="column">
            <span>{days}</span>
            <span> days</span>
          </Day>
          <Hour direction="column">
            <span>{hours}</span>
            <span>hours</span>
          </Hour>
          <Sec direction="column">
            <span>{minutes}</span>
            <span> min</span>
          </Sec>
        </>
      );
    } else {
      // Render a countdown
      /* return <span>{days}:{hours}:{minutes}</span>; */
      return (
        <>
          <Day direction="column">
            <span>{days}</span>
            <p> days</p>
          </Day>
          <Hour direction="column">
            <span>{hours}</span>
            <p> hours</p>
          </Hour>
          <Sec direction="column">
            <span>{minutes}</span>
            <p> min</p>
          </Sec>
        </>
      );
    }
  };

  //GTM EVENT
  const ButtonEvent = () =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: link?.title,
        label: "Reward Big Card",
      },
    });

  return (
    <>
      <CardContainer
        minHeight={{ base: "420px", md: "485px" }}
        bgSize="cover"
        width="100%"
        height="100%"
        direction="column"
        maxWidth="500px"
        borderRadius="12px"
      >
        <ImageContainer>
          <FooterImage maxWidth="100%" src={bgImage} className="" />
          <Timer
            background="linear-gradient(203.37deg, #B6B0F9 -29.25%, rgba(182, 176, 249, 0) 60%), #4c43cd;"
            padding="16px 24px"
            maxWidth="200px"
          >
            <Flex
              width="100%"
              justifyContent="space-between"
              pb="15px"
              textAlign="center"
            >
              <Countdown
                date={Date.now() + finish}
                renderer={renderer}
              ></Countdown>
            </Flex>
            <Box>
              <Extra color="#B6B0F9">{dateDescription}</Extra>
            </Box>
          </Timer>
        </ImageContainer>
        <Content px="40px" py="40px" bg="tamkeen.100">
          <Heading
            as="h5"
            fontSize={{ base: "22px", md: "25px" }}
            lineHeight={{ base: "36px" }}
            color="tamkeen.800"
            fontWeight="600"
          >
            {title}
          </Heading>
          <ButtonContainer display="flex" mt="25px">
            <MainButton link={link?.url} onClick={() => ButtonEvent()}>
              {link?.title}
            </MainButton>
          </ButtonContainer>
        </Content>
      </CardContainer>
    </>
  );
};

export default connect(RewardBigCard);

const CardContainer = styled(Flex)`
  overflow: hidden;
`;
const Content = styled(Box)``;

const ImageContainer = styled(Box)`
  position: relative;
`;

const MainButton = styled(FrontityLink)`
  display: flex;
  justify-content: center;
  background: #4c43cd;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 35px;
  border-radius: 40px;
  border: 2px solid #4c43cd;
  height: fit-content;
  transition: ease-in-out 500ms;
  :hover {
    background: #fff;
    color: #4c43cd;
    border-color: #fff;
  }
`;

const ButtonContainer = styled(Flex)`
  max-width: 230px;
  flex-direction: column-reverse;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 100%;
  }
`;

const Extra = styled(Text)`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

const Timer = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0px 12px;
  span {
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
    color: white;
  }
`;

const Hour = styled(Flex)`
span{
  font-weight: 600;
  font-size: 22px;
  line-height:32px;
  @media only screen and (min-width: 768px) {
    font-size: 25px;
    line-height:36px;
  }
}
p{
    font-size:12px;
    line-height 18px;
    color:white;
    text-transform: uppercase;
}`;
const Day = styled(Flex)`
span{
  font-weight: 600;
  font-size: 22px;
  line-height:32px;
  @media only screen and (min-width: 768px) {
    font-size: 25px;
    line-height:36px;
  }
}
p{
    font-size:12px;
    line-height 18px;
    color:white;
    text-transform: uppercase;
}`;
const Sec = styled(Flex)`
span{
  font-weight: 600;
  font-size: 22px;
  line-height:32px;
  @media only screen and (min-width: 768px) {
    font-size: 25px;
    line-height:36px;
  }
}
p{
    font-size:12px;
    line-height 18px;
    color:white;
    text-transform: uppercase;
}`;
