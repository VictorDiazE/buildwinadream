import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import {
  Flex,
  Accordion,
  Icon,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import SimpleCTA from "../theme/SimpleCTA";

const List = ({ afc, ...props }) => {
  const Section = afc.section;
  const ctaTitle = afc.title_cta;
  const ctaSubtitle = afc.subtitle_cta;
  const ctaButton = afc.button_cta;
  const cta = props?.cta;

  var ctaConditional;
  var paddingConditional;
  if (cta == "true") {
    ctaConditional = true;
    paddingConditional = "0";
  } else {
    ctaConditional = false;
    paddingConditional = "75px";
  }
  /*   console.log(ctaConditional); */

  return (
    <>
      <Flex
        width="100%"
        maxWidth="100%"
        minH="700px"
        mx="auto"
        pb={{ base: "0", md: paddingConditional }}
        bgGradient={{
          base: `linear(to-b, tamkeen.900 30%, tamkeen800A2 100%), url(${afc.background})`,
          md: `linear(to-b, tamkeen.900 30%, tamkeen800A2 100%), url(${afc.background})`,
        }}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
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
              <Box>
                <Text
                  paddingTop={{ base: "70px", md: "130px" }}
                  fontWeight={"900"}
                  as={"h2"}
                  lineHeight={"96px"}
                  fontSize={{ base: "50px", md: "96px" }}
                >
                  FAQ’S
                </Text>
              </Box>

              {Section.map((faq, index) => {
                const Faqs = faq.faq;

                return (
                  <>
                    <Box>
                      <Text
                        paddingTop={{ base: "30px", md: "40px" }}
                        fontWeight={"700"}
                        as={"h2"}
                        fontSize={{ base: "40px", md: "58.92px" }}
                        lineHeight={{ base: "50px", md: "58.92px" }}
                      >
                        {faq.title}
                      </Text>
                    </Box>
                    <Accordion allowToggle>
                      {Faqs.map((faq, index) => {
                        return (
                          <AccordionItem>
                            {({ isExpanded }) => (
                              <>
                                <h2>
                                  <AccordionButton
                                    key={index}
                                    paddingTop={"24px"}
                                    paddingBottom={"16px"}
                                    paddingLeft={"0px !important"}
                                    paddingRight={"0px !important"}
                                  >
                                    <Box
                                      flex="1"
                                      textAlign="left"
                                      fontWeight={"400"}
                                      fontSize={"16.33px"}
                                      lineHeight={"24px"}
                                    >
                                      {faq.question}
                                    </Box>
                                    {isExpanded ? (
                                      // Icono +
                                      <Icon viewBox="0 0 17 18">
                                        <path
                                          fill="#ffffff"
                                          stroke="none"
                                          strokeWidth="2"
                                          d="M 17,7.05155 V 11.0227 H 0 V 7.05155 Z"
                                        />
                                      </Icon>
                                    ) : (
                                      // Icono -
                                      <Icon viewBox="0 0 17 18">
                                        <path
                                          fill="#ffffff"
                                          stroke="none"
                                          strokeWidth="2"
                                          d="M10.3753 7.05155H17V11.0227H10.3753V18H6.62474V11.0227H0V7.05155H6.62474V0H10.3753V7.05155Z"
                                        />
                                      </Icon>
                                    )}
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel
                                  pb={5}
                                  paddingLeft={"0px"}
                                  paddingRight={"0"}
                                  fontWeight={"400"}
                                  fontSize={"14px"}
                                  lineHeight={"24px"}
                                >
                                  {faq.answer}
                                </AccordionPanel>
                              </>
                            )}
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </>
                );
              })}
              {ctaConditional && (
                <SimpleCTA
                  title={ctaTitle}
                  content={ctaSubtitle}
                  btn={ctaButton}
                />
              )}
            </ContentWrapper>
          </ContentContainer>
        </Wrapper>
      </Flex>
    </>
  );
};

const Faqs = ({ afc, cta }) => {
  return <>{afc == undefined ? null : <List afc={afc} cta={cta} />}</>;
};

export default connect(Faqs);

const Wrapper = styled(Flex)`
  color: white;
`;

const ContentContainer = styled(Flex)`
  max-width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 10px 0;
  }
`;
const ContentWrapper = styled(Box)`
  max-width: 100%;
  margin-bottom: 60px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 0;
  }
`;

const EmptyContainer = styled(Box)``;

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
