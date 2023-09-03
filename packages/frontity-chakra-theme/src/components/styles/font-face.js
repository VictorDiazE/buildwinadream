import React from "react";
import { Global, css } from "frontity";
import RubikBlack from "../../fonts/Rubik-Black.ttf";
import RubikExtraBold from "../../fonts/Rubik-ExtraBold.ttf";
import RubikBold from "../../fonts/Rubik-Bold.ttf";
import RubikSemiBold from "../../fonts/Rubik-SemiBold.ttf";
import RubikRegular from "../../fonts/Rubik-Regular.ttf";
import RubikLight from "../../fonts/Rubik-Light.ttf";
import tamkeenEOT from "../../fonts/icons/tamkeen.ttf";
import tamkeenSVG from "../../fonts/icons/tamkeen.svg";
import tamkeenTTF from "../../fonts/icons/tamkeen.ttf";
import tamkeenWOFF from "../../fonts/icons/tamkeen.woff";

import kelsonBoldTTF from "../../fonts/Rubik-Bold.ttf";

const FontFace = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap");
      @font-face {
        font-family: "tamkeen";
        src:url("${tamkeenEOT}");
        src:url("${tamkeenEOT}?#iefix") format("embedded-opentype"),
        url("${tamkeenWOFF}") format("woff"),
        url("${tamkeenTTF}") format("truetype"),
        url("${tamkeenSVG}#tamkeen") format("svg");
        font-weight: normal;
        font-style: normal;
    }
      @font-face {
        font-family: "Rubik";
        src: url(${RubikBlack}) format("ttf");
        font-weight: 900;
      }
      @font-face {
        font-family: "Rubik";
        src: url(${RubikExtraBold}) format("ttf");
        font-weight: 800;
      }
      @font-face {
        font-family: "Rubik";
        src: url(${RubikBold}) format("ttf");
        font-weight: 700;
      }
      @font-face {
        font-family: "Rubik";
        src: url(${RubikSemiBold}) format("ttf");
        font-weight: 600;
      }
      @font-face {
        font-family: "Rubik", sans-serif;
        src: url(${RubikRegular}) format("ttf");
        font-weight: 400;
      }
      @font-face {
        font-family: "Rubik";
        src: url(${RubikLight}) format("ttf");
        font-weight: 300;
      }
    `}
  />
);

export default FontFace;
