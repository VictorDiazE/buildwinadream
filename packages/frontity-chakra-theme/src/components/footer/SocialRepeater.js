import { connect, styled, css } from "frontity";
import { Box, VisuallyHidden, Flex } from "@chakra-ui/react";
import {
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitch,
  IoLogoLinkedin,
} from "react-icons/io";
import Link from "../link";

const SocialRepeater = ({ state, ...props }) => {
  const items = props?.items;
  var repeater;

  items &&
    (repeater = items?.map((item, index) => {
      var socialLink = item?.social_link;
      var socialName = item?.social_media;

      return (
        <Icon link={socialLink} key={index}>
          <span className={"icon icon-" + socialName}></span>
        </Icon>
      );
    }));

  return (
    <>
      <Container>{repeater}</Container>
    </>
  );
};

export default connect(SocialRepeater);

const Container = styled(Flex)`
  @media only screen and (min-width: 768px) {
    justify-content: space-around;
  }
`;

const Icon = styled(Link)`
  font-size: 22px;
  span {
    margin: 10px 6px;
  }
`;
