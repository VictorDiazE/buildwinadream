import { connect } from "frontity";
import { Box } from "@chakra-ui/react";
import { isUrl, omitConnectProps } from "../helpers";
import Link from "@frontity/components/link";

const Logo = ({ isImage = true, logo }) =>
  isImage ? (
    <Box as="img" src={logo.src} alt={logo.alt} maxWidth="90px" />
  ) : (
    <Box
      fontSize="2xl"
      color="white"
      fontFamily="heading"
      textTransform="uppercase"
      fontWeight="bold"
    >
      "Win a dream"
    </Box>
  );

const SiteLogo = ({ state, actions, ...props }) => {
  // check if the logo is a url,
  // we assume, if it's a url, it points to an image, else it's a text

  //GTM EVENT
  const SiteLogoEvent = () =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "header",
        action: "logo",
        label: "",
      },
    });

  const isImage = isUrl(state.theme.logo.src);
  return (
    <Box display="block" flexShrink="0" {...omitConnectProps(props)}>
      <Link link="/" onClick={SiteLogoEvent}>
        <Logo isImage={isImage} logo={state.theme.logo} />
      </Link>
    </Box>
  );
};
export default connect(SiteLogo);
