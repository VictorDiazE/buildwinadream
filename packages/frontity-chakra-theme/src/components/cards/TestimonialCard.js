import { connect, styled, css } from "frontity";
import { Box, Flex, Heading, chakra, Badge, Text } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import FrontityLink from "../link";

const CardImage = chakra(Image);

const TestimonialCard = ({ state, ...props }) => {
  // Getting props from TestimonialSlider
  const authorName = props?.name;
  const authorProfession = props?.profession;
  const authorImage = props?.image.sizes?.thumbnail;
  const quote = props?.quote;

  return (
    <>
      <Testimonial pt="50px" pb={{ base: "0", md: "50px" }}>
        <Quote direction="column">
          {quote && (
            <Content
              fontSize={{ base: "19px", md: "33px" }}
              lineHeight={{ base: "30px", md: "42px" }}
              color="#ffffff"
              fontWeight={{ base: "400", md: "300" }}
            >
              {quote}
            </Content>
          )}
          <Author mt={{ base: "100px", md: "30px" }} width="fit-content">
            <AuthorImage>
              {authorImage && (
                <CardImage
                  maxWidth="70px"
                  src={authorImage}
                  className=""
                  borderRadius="50px"
                />
              )}
            </AuthorImage>
            <AuthorInfo justifyContent="center">
              {authorName && (
                <Name
                  fontSize="18px"
                  lineHeight="30px"
                  fontWeight="600"
                  color="#ffffff"
                >
                  {authorName}
                </Name>
              )}
              {authorProfession && (
                <Profession fontSize="18px" lineHeight="30px" color="#8684b1">
                  {authorProfession}
                </Profession>
              )}
            </AuthorInfo>
          </Author>
        </Quote>
      </Testimonial>
    </>
  );
};

export default connect(TestimonialCard);

const CardContainer = styled(Flex)`
  overflow: hidden;
`;

const Testimonial = styled(Flex)``;
const Quote = styled(Flex)``;

const Content = styled(Text)`
  padding: 0 30px;
`;

const Author = styled(Flex)`
  padding: 15px 30px;
  @media only screen and (min-width: 768px) {
    backdrop-filter: blur(15px);
  }
`;
const AuthorInfo = styled(Flex)`
  margin-left: 10px;
  flex-direction: column;
`;
const AuthorImage = styled(Box)`
  border-radius: 30px;
`;

const Name = styled(Text)``;

const Profession = styled(Text)``;
