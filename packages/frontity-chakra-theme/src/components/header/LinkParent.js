import { connect } from "frontity";
import { useState, useEffect, useRef } from "react";
import { Box, Link, Icon, Divider, Fade, styled } from "@chakra-ui/react";
import LinkChild from "./LinkChild";
import DropDown from "./DropDown";
const LinkParent = ({ state, setActiveMenu }) => {
  const items = state.source.get(`/menu/nav-menu/`).items;
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
    window.innerWidth > 960 && setDropdown(true);
    /*         console.log('Mouse enter')
        console.log(dropdown) */
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
    /*       console.log('Mouse Leave')
        console.log(dropdown) */
  };

  const onClickLinkClose = () => {
    setDropdown(!dropdown);
    setActiveMenu(false);
  };

  return (
    <Box
      as={"ul"}
      display={{ base: "flex", md: "block" }}
      flexDir={{ base: "column", md: "row" }}
      /* padding={'32px'} */
    >
      {items.map((parent, index) => {
        const childsItems = parent.child_items;
        return childsItems ? (
          <Box
            className="LI-Padre"
            as={"li"}
            key={index}
            display="inline-block"
            position="relative"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <LinkChild
              child={parent}
              dropdown={dropdown}
              depthLevel={0}
              border={"solid 12px transparent"}
              parent={parent?.title}
            />
            {state.theme.isMobile ? (
              dropdown ? (
                <Icon onClick={() => setDropdown(!dropdown)} viewBox="0 0 11 7">
                  <path
                    stroke="#ffffff"
                    strokeWidth="2"
                    d="m1.6172 5.7071 4-4 4 4"
                  />
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
            <DropDown parent={parent} dropdown={dropdown} />

            {/*  </Fade> */}
          </Box>
        ) : (
          <Box
            as={"li"}
            key={index}
            display="inline-block"
            className="LI-SinHijo"
          >
            {/*  Link padre sin hijos */}
            <LinkChild
              child={parent}
              depthLevel={0}
              key={index}
              onClick={() => onClickLinkClose()}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default connect(LinkParent);

/* const Menu = styled(Box)`
    .show {
        display: flex;
    }
`; */
