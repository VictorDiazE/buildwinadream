import { Link, chakra } from "@chakra-ui/react";
import FrontityLink from "@frontity/components/link";
import { connect } from "frontity";

const LinkChildContainer = chakra(FrontityLink);

const LinkChild = ({
  actions,
  state,
  child,
  depthLevel,
  setDropdown,
  dropdown,
  activeMenu,
  setActiveMenu,
  parent,
}) => {
  /*   const path = state.router.link == child.url.replace(/^.*\/\/[^\/]+/, "");*/
  /*   console.log(child.url.toString().replace(/^.*\/\/[^\/]+/, ""))  */
  let eventName = "menu desktop";
  const isMobile = state.theme?.isMobile;
  {
    isMobile && (eventName = "menu mobile");
  }
  /*   console.log(parent); */
  //GTM EVENT
  function close(parent) {
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: eventName,
        action: parent,
        label: child.title,
      },
    });

    setActiveMenu(false);
    setDropdown(false);
  }
  return (
    <LinkChildContainer
      link={child.url.toString().replace(/^.*\/\/[^\/]+/, "")}
      onClick={() => close(parent)}
      sx={
        activeMenu
          ? { color: "white", width: "65vw" }
          : depthLevel <= 0
          ? { color: "white" }
          : { color: "tamkeen.900" }
      }
      aria-haspopup="menu"
      aria-expanded={dropdown ? "true" : "false"}
      fontSize={depthLevel <= 0 ? "xs" : "md"}
      display={"inline-block"}
      line-height="shorter"
      textTransform={depthLevel <= 0 ? "uppercase" : "capitalize"}
      px={2}
      py={1}
      borderBottom="2px solid"
      borderColor="transparent"
      _hover={{
        textDecoration: "none",
        borderBottom: "2px solid",
        borderColor: "buttonpurple",
      }}
      margin={
        depthLevel <= 0
          ? { base: "6px 14px", md: "0 14px" }
          : { base: "0", md: "0" }
      }
      padding={{ base: "6px 0", md: "6px 0" }}
    >
      {child.title}
    </LinkChildContainer>
  );
};

export default connect(LinkChild);
