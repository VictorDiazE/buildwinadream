import { connect } from "frontity";
import { useState, useEffect, useRef } from "react";
import { Box, Link, Icon, Divider, Fade, styled } from "@chakra-ui/react";
import LinkChild from "./LinkChild";
import DropDown from "./DropDown";
const ItemsParent = ({
  state,
  setActiveMenu,
  activeMenu,
  items,
  parentName,
}) => {
  /* console.log(activeMenu) */
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 768 && setDropdown(true);
    /*         console.log('Mouse enter')
        console.log(dropdown) */
  };

  const onMouseLeave = () => {
    window.innerWidth > 768 && setDropdown(false);
    /*       console.log('Mouse Leave')
        console.log(dropdown) */
  };

  const onClickLinkClose = () => {
    /* console.log('Close') */
    setDropdown(!dropdown);
    setActiveMenu(false);
  };

  const childsItems = items.child_items;

  return childsItems ? (
    <Box
      as={"li"}
      display="inline-block"
      position="relative"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={activeMenu ? { borderBottom: "1px solid #524583" } : null}
    >
      <LinkChild
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        child={items}
        dropdown={dropdown}
        depthLevel={0}
        border={"solid 12px transparent"}
        setDropdown={setDropdown}
      />
      {state.theme.isMobile ? (
        dropdown ? (
          <Icon onClick={() => setDropdown(!dropdown)} viewBox="0 0 11 7">
            <path stroke="#ffffff" strokeWidth="2" d="m1.6172 5.7071 4-4 4 4" />
          </Icon>
        ) : (
          <Icon onClick={() => setDropdown(!dropdown)} viewBox="0 0 11 7">
            <path
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              d="M1.61719 1L5.61719 5L9.61719 1"
            />
          </Icon>
        )
      ) : (
        <Icon viewBox="0 0 11 7">
          <path
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            d="M1.61719 1L5.61719 5L9.61719 1"
          />
        </Icon>
      )}
      {/* <Fade in={dropdown}>  */}
      <DropDown
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        onClickLinkClose={onClickLinkClose}
        parent={items}
        setDropdown={setDropdown}
        dropdown={dropdown}
        parentName={parentName}
      />

      {/*  </Fade> */}
    </Box>
  ) : (
    <Box
      as={"li"}
      display="inline-block"
      sx={activeMenu ? { borderBottom: "1px solid #524583" } : null}
    >
      {/*  Link padre sin hijos */}
      <LinkChild
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        child={items}
        depthLevel={0}
        onClick={() => onClickLinkClose()}
        setDropdown={setDropdown}
      />
    </Box>
  );
};

export default connect(ItemsParent);

/* const Menu = styled(Box)`
    .show {
        display: flex;
    }
`; */
