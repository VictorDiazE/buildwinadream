import React from "react";
import { Global, css } from "frontity";

/* @font-face Icons Hanaley */
import tamkeenEOT from "./icons/tamkeen.ttf";
import tamkeenSVG from "./icons/tamkeen.svg";
import tamkeenTTF from "./icons/tamkeen.ttf";
import tamkeenWOFF from "./icons/tamkeen.woff";

const Icon = () => (
  <Global
    styles={css`
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
[data-icon]:before {
  font-family: "tamkeen" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="icon-"]:before,
[class*=" icon-"]:before {
  font-family: "tamkeen" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`} />
);

export default Icon;
