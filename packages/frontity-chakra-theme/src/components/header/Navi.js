import { Box } from "@chakra-ui/react";
import { connect } from "frontity";
import ItemsParent from "./ItemsParent";

const Navi = ({ state, setActiveMenu, activeMenu }) => {
  const items = state.source.get(`/menu/nav-menu/`).items;
  return (
    <Box
      className="Navi"
      as={"ul"}
      display={{ base: "flex", md: "block" }}
      flexDir={{ base: "column", md: "row" }}
    >
      {items.map((menu, index) => {
        const depthLevel = 0;
        return (
          <ItemsParent
            setActiveMenu={setActiveMenu}
            activeMenu={activeMenu}
            items={menu}
            key={index}
            parentName={menu?.title}
            depthLevel={depthLevel}
          />
        );
      })}
    </Box>
  );
};

export default connect(Navi);
