import { React, useEffect, useState } from "react";
import { connect, styled } from "frontity";
import { Flex, chakra, Text, Box } from "@chakra-ui/react";
import Image from "@frontity/components/image";

const Imagen = chakra(Image);

const Page404Content = ({ state, libraries }) => {
  const Html2React = libraries.html2react.Component;

  const options = state?.source?.data["acf-options-page/"]?.acf;
  const content = options?.content404;
  const imagen404 = options?.image404;
  const links = options?.links404;
  return (
    <Wrapper>
      <ContentContainer w="100%" alignItems="center">
        <Imagen src={imagen404}></Imagen>
        <ContentWrapper>
          <Text fontWeight={"400"} fontSize={"16.33px"} lineHeight={"24px"}>
            {<Html2React html={content} />}
          </Text>
        </ContentWrapper>
      </ContentContainer>
    </Wrapper>
  );
};

export default connect(Page404Content);

const Wrapper = styled(Flex)`
  color: white;
  padding-top: 30px;
`;

const ContentContainer = styled(Flex)`
  max-width: 100%;
  padding-top: 50px;
  margin-bottom: 40px;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 50px 0;
  }
`;
const ContentWrapper = styled(Flex)`
  margin-bottom: 120px;
  margin: auto;
  max-width: 427px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 50px 0;
    transform: translate(0, -50px);
  }
`;

const Subtitle = styled(Text)`
  font-size: 18px;
  line-height: 30px;
  color: #dee4ed;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 30px;
  }
`;

const Content = styled(Text)`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #dee4ed;
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 30px;
  }
`;
