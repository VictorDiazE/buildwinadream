import { connect, styled, decode } from "frontity";
import React from "react";
import {
  Container,
  Flex,
  SimpleGrid,
  Box,
  Button,
  Text,
  List,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import DreamSlider from "../sliders/DreamSlider";
import FrontityLink from "@frontity/components/link";

const TheDream = ({ state, actions, libraries, ...props }) => {
  const Html2React = libraries.html2react.Component;

  const bg = props?.bg?.url;
  const bgMobile = props?.bgMobile?.url;
  const bgGradient = props?.bgGradient;
  const subtitle = props?.subtitle;
  const title = props?.title;
  const fontSize = props?.fontSize;
  const fontSizeMobile = props?.fontSizeMobile;
  const content = props?.content;
  const btn = props?.btn;
  const list = props?.list;
  const items = props?.items;

  //GTM EVENT
  const ButtonEvent = (btn) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: btn,
        label: "The Dream",
      },
    });

  // Get Mapping List ACF Repeater

  var listItems;
  {
    list &&
      (listItems = list?.map(({ item }, index) => {
        return <Item key={index}>{item}</Item>;
      }));
  }

  return (
    <Flex
      bgImage={{
        base: bgGradient + ", url(" + bgMobile + ")",
        md: bgGradient + ", url(" + bg + ")",
      }}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      width="100%"
      minH="850px"
      alignItems="flex-end"
      pb={{ base: "0", md: "50px" }}
    >
      <Wrapper
        columns={{ base: 0, md: 2 }}
        maxWidth="1200px"
        mx="auto"
        width="100%"
        px="30px"
      >
        <ContentContainer>
          <div className="content-wrapper">
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {title && (
              <Title
                fontWeight="900"
                fontSize={{ base: fontSizeMobile, md: fontSize }}
                lineHeight={{ base: fontSizeMobile, md: fontSize }}
                mb="24px"
                textTransform="uppercase"
              >
                {title}
              </Title>
            )}
            {content && (
              <Content color="tamkeen.0">
                <Html2React html={content} />
              </Content>
            )}
            <DreamList spacing="7px">{listItems}</DreamList>
            <ButtonContainer display="flex" mt="25px">
              {btn && (
                <MainButton
                  link={btn?.url}
                  onClick={() => ButtonEvent(btn?.title)}
                >
                  {btn?.title}
                </MainButton>
              )}
            </ButtonContainer>
          </div>
        </ContentContainer>
        <SliderContainer w="100%">
          <div className="slider-wrapper">
            <DreamSlider items={items} />
          </div>
        </SliderContainer>
      </Wrapper>
    </Flex>
  );
};
export default connect(TheDream);

const Wrapper = styled(SimpleGrid)`
  color: white;
`;

const ContentContainer = styled(Box)`
  width: 100%;
  padding-top: 50px;
  margin-bottom: 50px;
  .content-wrapper {
    @media only screen and (min-width: 768px) {
      max-width: 550px;
      padding: 50px 0;
    }
  }
`;

const SliderContainer = styled(Box)`
  width: 100%;
  margin-bottom: 50px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  .slider-wrapper {
    @media only screen and (min-width: 768px) {
      height: 100%;
      display: flex;
    }
  }
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

const ButtonContainer = styled(SimpleGrid)`
  max-width: 230px;
  flex-direction: column-reverse;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 100%;
  }
`;

const Title = styled(Heading)`
  color: white;

  font-weight: 900;

  text-align: left;
  margin-bottom: 15px;
  @media only screen and (min-width: 768px) {
    font-weight: 900;
  }
`;

const Subtitle = styled(Text)`
  font-size: 18px;
  line-height: 30px;
  color: white;
  margin-bottom: 15px;
  font-weight: 400;
  text-align: left;
  @media only screen and (min-width: 768px) {
    font-size: 25px;
    line-height: 32px;
  }
`;

const Content = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #dee4ed;
  text-align: left;
  margin-bottom: 15px;
`;

const Item = styled(ListItem)`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: white;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 30px;
    text-align: left;
  }
`;

const DreamList = styled(UnorderedList)`
  list-style-type: none;
  li:before {
    content: "-    ";
    padding-right: 7px;
  }
  li {
    text-indent: -15px;
  }
`;
