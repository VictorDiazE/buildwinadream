import { connect, styled, css } from "frontity";
import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import FrontityLink from "@frontity/components/link";

const FooterImage = chakra(Image);

const CTACard = ({ state, actions, ...props }) => {
  /*   const title = props?.title;
  const bgImage = props?.bg;
  const date = props?.date;
  const button = props?.btn; */
  /*   const date = props?.date; */
  const options = state?.source?.data["acf-options-page/"]?.acf;
  const title = options?.cta_title;
  const content = options?.cta_content;
  const button = options?.cta_link;

  //GTM EVENT
  const ButtonEvent = () =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "button click",
        action: btn?.title,
        label: "CTA Card",
      },
    });

  return (
    <>
      <CardContainer
        /*         minHeight={{ base: "420px", md: "485px" }} */
        /*    bgImage={
            "linear-gradient(3.67deg, #150f35 2.36%, rgba(71, 85, 105, 0) 63.81%), url(" +
            cardImage?.source_url +
            ")"
          } */
        bgColor="#4c43cd"
        width="100%"
        height="100%"
        direction="column"
        maxWidth="500px"
        borderRadius="12px"
      >
        <Content
          px="40px"
          py="40px"
          textAlign="center"
          height="100%"
          justify="center"
          align="center"
          direction="column"
        >
          <Heading
            as="h5"
            fontSize={{ base: "22px", md: "25px" }}
            lineHeight={{ base: "36px" }}
            color="#dee4ed"
            fontWeight="600"
            mb="15px"
          >
            {title}
          </Heading>
          <Text fontSize="14px" lineHeight="24px" color="#dee4ed">
            {content}
          </Text>
          <ButtonContainer display="flex" mt="25px">
            <MainButton link={button?.url} onClick={() => ButtonEvent()}>
              {button?.title}
            </MainButton>
          </ButtonContainer>
        </Content>
      </CardContainer>
    </>
  );
};

export default connect(CTACard);

const CardContainer = styled(Flex)`
  overflow: hidden;
`;
const Content = styled(Flex)``;

const MainButton = styled(FrontityLink)`
  display: flex;
  justify-content: center;
  background: #fff;
  font-size: 14px;
  line-height: 18px;
  color: #4c43cd;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 35px;
  border-radius: 40px;
  border: 2px solid #4c43cd;
  height: fit-content;
  transition: ease-in-out 500ms;
  :hover {
    background: #4c43cd;
    color: #fff;
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
