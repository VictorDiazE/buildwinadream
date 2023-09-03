import { useState, useEffect, useRef } from "react";
import { styled, css, connect } from "frontity";
import Link from "@frontity/components/link";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */
/* import { faAngleDown } from "@fortawesome/free-solid-svg-icons"; */
/* import Link from "../link"; */
import DropdownParent from "./DropdownParent";

const MenuItemsParent = ({
  state,
  items,
  depthLevel,
  activeMenu,
  setActiveMenu,
}) => {
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
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const onClickLinkClose = () => {
    setDropdown(!dropdown);
    setActiveMenu(false);
  };
  return (
    <Li ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.child_items ? (
        <>
          <LinkParentDiv className="icon-arrow-down"
            css={{
              color: `${state.theme.isWhite
                ? activeMenu
                  ? "#ffffff !important"
                  : state.theme.scroll["top"]
                    ? "#ffffff !important"
                    : "#ffffff !important"
                : state.theme.scroll["top"]
                  ? activeMenu
                    ? "#ffffff !important"
                    : "#ffffff !important"
                  : "#ffffff !important"
                }`,
            }}
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown(!dropdown)}
          >
            {items.title}
          </LinkParentDiv>
          <DropdownParent
            submenus={items.child_items}
            dropdown={dropdown}
            depthLevel={depthLevel}
            idPage={items.ID}
            slugPage={items.slug}
            setActiveMenu={setActiveMenu}
            setdropdown={setDropdown}
          />
        </>
      ) : (
        <LinkParent
          css={{
            color: `${state.theme.isWhite
              ? activeMenu
                ? "#FFFFFF !important"
                : "#FFFFFF !important"
              : state.theme.scroll["top"]
                ? activeMenu
                  ? "#FFFFFF !important"
                  : "#FFFFFF !important"
                : "#FFFFFF !important"
              }`,
          }}
          link={items.url}
          onClick={() => onClickLinkClose()}
          setdropdown={setDropdown}
        >
          {items.title}
        </LinkParent>
      )}
    </Li>
  );
};

const breakpoints = [577, 769, 993, 1240];

const media = breakpoints.map((size) => `@media (min-width: ${size}px)`);

const Li = styled.li`
  display: inline-block;
  width: 100%;
  ${media[2]} {
    width: auto;
  }
`;

const LinkParent = styled(Link)`
  background-color: transparent;
  transition: all ease-in-out 0.3s;
  border: none;
  text-decoration: none;
  display: flex;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.01em;
  padding: 32px 0px 16px 0px;
  justify-content: space-between;
  border-bottom: solid 1px #f8f1e7;
  align-items: center;
  margin: 0 20px;
  text-transform: uppercase;
  ${media[2]} {
    padding: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    border-bottom: none;
    margin: 0;
  }
`;

const LinkParentDiv = styled.div`
  position: relative;
  cursor: pointer;
  background-color: transparent;
  transition: all ease-in-out 0.3s;
  border: none;
  text-decoration: none;
  display: flex;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  padding: 32px 0px 16px 0px;
  justify-content: space-between;
  border-bottom: solid 1px #f8f1e7;
  align-items: center;
  margin: 0 20px;
  text-transform: uppercase;
  &:after {
    margin-left: 5px;
  } 
  ${media[2]} {
    padding: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    border-bottom: none;
    margin: 0;
  }
`;

export default connect(MenuItemsParent);
