import { Box, Divider, chakra } from "@chakra-ui/react";
import { connect } from "frontity";
import LinkChild from "./LinkChild";
import FrontityLink from "@frontity/components/link";
const Link = chakra(FrontityLink);

const DropDown = ({
  parent,
  dropdown,
  setActiveMenu,
  setDropdown,
  activeMenu,
  parentName,
}) => {
  const childsItems = parent.child_items;

  const onClickLinkClose = () => {
    setDropdown(false);
    setActiveMenu(false);
  };

  return (
    <Box
      width={"max-content"}
      /* transform={'translateY(4px)'} */
      as={"ul"}
      display={"table"}
      position={{ base: "relative", md: "absolute" }}
      backgroundColor={activeMenu ? "transparent" : "white"}
      sx={dropdown ? { display: "flex" } : { display: "none" }}
      className={`${dropdown ? "show" : ""}`}
      padding={activeMenu ? "0px 0px 0px 12px" : "32px 32px"}
      left={{ base: "0px", md: "-16px" }}
      flexDirection={"column"}
      alignItems={"flex-start"}
    >
      {childsItems.map((child, index, parent) => {
        return (
          <LinkChild
            setActiveMenu={setActiveMenu}
            activeMenu={activeMenu}
            key={index}
            child={child}
            depthLevel={1}
            parent={parentName}
            setDropdown={setDropdown}
            onClick={() => onClickLinkClose()}
          />
        );
      })}

      {activeMenu ? null : (
        <Divider
          orientation="horizontal"
          borderBottomWidth={"2px"}
          padding={"6px 0"}
        />
      )}
      <Link
        margin={"0 0px"}
        padding={activeMenu ? "16px 0 16px 0" : "16px 0 0"}
        color={"principal.500"}
        link={parent.url.replace(/^.*\/\/[^\/]+/, "")}
      >
        See all
      </Link>
    </Box>
  );
};

export default connect(DropDown);
