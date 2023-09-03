import connect from "@frontity/connect";
import { styled, css } from "frontity";

const BurguerIcon = ({
  state,
  active,
  setActive,
  activeMenu,
  setActiveMenu,
}) => {
  const openSearch = () => {
    setActive(!active);
  };

  return (
    <>
      <Buscar
        onClick={() => openSearch()}
        data-icon="i"
        className="icon"
        css={
          state.theme.isWhite
            ? activeMenu
              ? css`
                  color: #f8f1e7;
                `
              : css`
                  color: #000000;
                `
            : state.theme.scroll["top"]
            ? activeMenu
              ? css`
                  color: #f8f1e7;
                `
              : css`
                  color: #000000;
                `
            : css`
                color: #f8f1e7;
              `
        }
      ></Buscar>
      <Button
        onClick={() => setActiveMenu(!activeMenu)}
        type="button"
        aria-expanded={activeMenu}
        data-icon={activeMenu ? "Q" : "P"}
        className="icon"
        css={
          state.theme.isWhite
            ? activeMenu
              ? css`
                  color: #f8f1e7;
                  border-left: 1px solid #f8f1e7;
                `
              : css`
                  border-left: 1px solid #000000;
                  color: #000000;
                `
            : state.theme.scroll["top"]
            ? activeMenu
              ? css`
                  border-left: 1px solid #f8f1e7;
                  color: #f8f1e7;
                `
              : css`
                  border-left: 1px solid #000000;
                  color: #000000;
                `
            : css`
                border-left: 1px solid #f8f1e7;
                color: #f8f1e7;
              `
        }
      ></Button>
    </>
  );
};

export default connect(BurguerIcon);

const Button = styled.button`
  position: absolute;
  font-size: 32px;
  right: 25px;
  padding-top: 49px;
  border-bottom: none;
  border-right: none;
  border-top: none;
  background-color: transparent;
  color: #f8f1e7;
  padding-left: 21px;
`;

const Buscar = styled.button`
  position: absolute;
  color: #f8f1e7;
  font-size: 25px !important;
  right: 95px;
  /*   transition: all ease-in-out 0.3s; */
  border: none;
  font-size: 16px;
  -webkit-text-decoration: none;
  text-decoration: none;
  padding: 50px 21px 5px 21px;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
`;
