import Link from "@frontity/components/link";
import connect from "@frontity/connect";
import { styled, css } from "frontity";
import MenuItemsChild from "./MenuItemsChild";

const DropdownChild = ({ submenus, setActiveMenu, dropdown, setdropdown, state }) => {
  const onClickLinkClose = () => {
    setdropdown(!dropdown);
    setActiveMenu(false);
  };

  return (
    <>
      <Ul
        css={css`
          column-count: ${submenus.length > 13
            ? state.theme.isMobile
              ? 1
              : 3
            : state.theme.isMobile
              ? 1
              : 2};
        `}
      >
        {submenus.map((submenu, index) => {
          return (
            <Li key={index}>
              <Link
                css={css`
                  color: ${state.theme.scroll["hero"]
                    ? "#FFFDFA !important;"
                    : "#FFFDFA !important;"};
                `}
                link={submenu.url}
                onClick={() => onClickLinkClose()}
              >
                {submenu.post_title}
              </Link>
            </Li>
          );
        })}
      </Ul>
    </>
  );
};
export default connect(DropdownChild);

