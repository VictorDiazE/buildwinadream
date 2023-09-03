import { styled, css, connect } from "frontity";
import MenuItemsChild from "./MenuItemsChild";

const DropdownParent = ({
  state,
  submenus,
  dropdown,
  depthLevel,
  idPage,
  slugPage,
  setActiveMenu,
  setdropdown,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  const theme = state.source.data["acf-options-page/"]?.acf;
  return (
    <Dropdown
      css={css`
        position: ${state.theme.isMobile ? "relative" : "absolute"};
      `}
      className={`drop-down-parent dropdown ${dropdownClass} ${
        dropdown ? "show" : ""
      }`}
    >
      {/*       <Container> */}
      {/*  <WrapperDiv> */}
      <Ul>
        {submenus.map((submenu, index) => (
          <MenuItemsChild
            items={submenu}
            key={index}
            depthLevel={depthLevel}
            setActiveMenu={setActiveMenu}
            dropdown={dropdown}
            setdropdown={setdropdown}
            slugPage={slugPage}
          />
        ))}
      </Ul>
      {/*  </WrapperDiv> */}
      {/*       </Container> */}
    </Dropdown>
  );
};

export default connect(DropdownParent);

const breakpoints = [577, 769, 993, 1240];

const media = breakpoints.map((size) => `@media (min-width: ${size}px)`);

const Container = styled.div`
  width: 100%;
  margin: 0 0px 15px 0px;
  display: flex;
  justify-content: space-between;
  ${media[2]} {
    /* width: 1240px; */
    margin: 0;
  }
  ${media[3]} {
    margin: 0px calc(50vw - 630px) 0px;
    width: 1240px;
  }
`;

const WrapperDiv = styled.div`
  width: 100%;
  display: flex;
  ${media[2]} {
    width: auto;
  }
`;

const Dropdown = styled.div`
  z-index: 99999;
  left: 0;
  transform: translate(0, 10px);
  opacity: 1;
  color: #150f35;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
    visibility 0.3s ease-in-out, display 0.3s ease-in-out;
  justify-content: center;
  visibility: hidden;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  background-color: #ffffff;
  flex-direction: column;
  &.show {
    opacity: 1;
    transform: translate(0, 0px);
    visibility: visible;
    display: flex;
  }
`;

const Ul = styled.ul`
  display: flex;
  padding-inline-start: 0px;
  column-gap: 0px;
  flex-direction: column;
  width: 100%;
  ${media[2]} {
    width: auto;
  }
`;
