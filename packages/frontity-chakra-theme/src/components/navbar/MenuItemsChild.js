import { styled, css, connect } from "frontity";
import Link from "@frontity/components/link";
import DropdownChild from "./DropdownChild";

const MenuItemsChild = ({
  state,
  items,
  depthLevel,
  setActiveMenu,
  dropdown,
  setdropdown,
  slugPage,
}) => {
  const onClickLinkClose = () => {
    setActiveMenu(false);
  };
  return (
    <Li
    >
      {items.child_items ? (
        <>
          <Link
            css={css`
              color: ${state.theme.scroll["hero"]
                ? "#F8F1E7 !important;"
                : "#F8F1E7 !important;"};
              font-size: 14px;
            `}
            link={items.url}
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setdropdown(!dropdown)}
          >
            {items.post_title}
            {depthLevel > 1 ? <span>&raquo;</span> : <span className="arrow" />}
          </Link>
          <DropdownChild
            submenus={items.child_items}
            setActiveMenu={setActiveMenu}
            setdropdown={setdropdown}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          css={css`
            color: red;
          `}
          link={items.url}
          onClick={() => onClickLinkClose()}
        >
          {items.post_title}
        </Link>
      )}
    </Li>
  );
};

export default connect(MenuItemsChild);

const breakpoints = [577, 769, 993, 1240];

const media = breakpoints.map((size) => `@media (min-width: ${size}px)`);

const Li = styled.li`
  display: block;
  padding: 12px 5px 12px 95px;
  ${media[2]} {
    padding: 15px 5px 5px 30px;
  }
  ${media[3]} {
    a {
      font-style: normal;
      font-size: ;
    }
  }
  ${media[2]} {
    padding: 15px 5px 5px 30px;
  }
  ${media[3]} {
    padding: 15px 5px 5px 95px;
  }
`;
