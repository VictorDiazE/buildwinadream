import { React, useEffect, useState } from "react";
import { connect, styled } from "frontity";
import {
  Flex,
  TabList,
  TabPanel,
  Tabs,
  Tab,
  Text,
  TabPanels,
  Box,
} from "@chakra-ui/react";

const Legal = ({ state, libraries }) => {
  const Html2React = libraries.html2react.Component;

  const data = state.source.get(state.router.link);
  const id = data.id;
  const page = state.source.page[id];
  const afc = state.source.page[id]?.acf;
  const tabpage = afc.legal_tab;

  return (
    <>
      <Flex
        width="100%"
        maxWidth="100%"
        minH="700px"
        mx="auto"
        pb={{ base: "0", md: "20px" }}
      >
        <Wrapper
          maxWidth="1200px"
          mx="auto"
          px="30px"
          width="100%"
          textAlign={{ base: "left", md: "inherit" }}
        >
          <ContentContainer w="100%" alignItems="center">
            <ContentWrapper>
              <Text
                paddingTop={"114px"}
                fontWeight={"700"}
                fontSize={"58.92px"}
                lineHeight={"78px"}
              >
                {page.title.rendered}
              </Text>
              <Tabs>
                <TabList
                  paddingTop={"32px"}
                  paddingBottom={"48px"}
                  borderBottom={"none"}
                >
                  {tabpage.map((tabtitle, index) => {
                    return (
                      <Tab
                        marginRight={"20px"}
                        borderRadius={"4px"}
                        _selected={{ color: "#FDFDFD", bg: "#4C43CD" }}
                        fontWeight={"600"}
                        bg={"#8684b1"}
                        color={"#475569"}
                        fontSize={"16.33px"}
                        key={index}
                      >
                        {tabtitle.title}
                      </Tab>
                    );
                  })}
                </TabList>
                <TabPanels>
                  {tabpage.map((tabcontent, index) => {
                    return (
                      <TabPanel key={index}>
                        <p>
                          <Html2React html={tabcontent.description} />
                        </p>
                      </TabPanel>
                    );
                  })}
                </TabPanels>
              </Tabs>
            </ContentWrapper>
          </ContentContainer>
        </Wrapper>
      </Flex>
    </>
  );
};

export default connect(Legal);

const Wrapper = styled(Flex)`
  color: white;
`;

const ContentContainer = styled(Flex)`
  max-width: 100%;
  padding-top: 50px;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 50px 0;
  }
`;
const ContentWrapper = styled(Box)`
  max-width: 100%;
  margin-bottom: 120px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 50px 0;
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
