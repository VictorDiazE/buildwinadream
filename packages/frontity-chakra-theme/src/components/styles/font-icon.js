const FontsIcon = () => (
  <Global
    styles={css`
        @font-face {
            font-family: "hanaley";
            src:url("${hanaleyEOT}");
            src:url("${hanaleyEOT}?#iefix") format("embedded-opentype"),
            url("${hanaleyWOFF}") format("woff"),
            url("${hanaleyTTF}") format("truetype"),
            url("${hanaleySVG}#hanaley") format("svg");
            font-weight: normal;
            font-style: normal;
        }
        `}
    supressHydrationWarning
  />
);

export default FontsIcon;
