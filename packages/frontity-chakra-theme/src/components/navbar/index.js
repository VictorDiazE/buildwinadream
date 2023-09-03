import React, { useState, useRef, useEffect } from "react";
import { connect, styled, css } from "frontity";
import Image from "@frontity/components/image";
import Search from "../search";
import MenuItemsParent from "./MenuItemsParent";
import BurguerIcon from "./burguerIcon";
import { Flex } from "@chakra-ui/react";

const Navbar = ({ state, activeMenu, setActiveMenu }) => {
  const [active, setActive] = useState(false);
  const items = state.source.get(`/menu/nav-menu/`).items;

  const imput = useRef(null);
  const openSearch = () => {
    setActive(!active);
  };

  return (
    <>
      <Flex
        className={state.theme.isMobile ? (activeMenu ? "open" : "close") : ""}
        css={css`
          overflow-y: ${state.theme.isMobile ? "scroll;" : "hidden;"};
        `}
      >
        <Ul>
          {items.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItemsParent
                items={menu}
                key={index}
                depthLevel={depthLevel}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            );
          })}
        </Ul>
      </Flex>
    </>
  );
};

const breakpoints = [577, 769, 993, 1240];

const media = breakpoints.map((size) => `@media (min-width: ${size}px)`);

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 0;
  margin-block-start: 0;
  padding-inline-start: 0px;
  margin-block-end: 0;
  list-style-type: none;
  align-items: center;
  ${media[2]} {
    flex-direction: row;
    column-gap: 54px;
  }
`;

export default connect(Navbar);
