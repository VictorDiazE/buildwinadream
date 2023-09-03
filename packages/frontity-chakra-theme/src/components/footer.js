import { Box, SimpleGrid, Flex, chakra } from "@chakra-ui/react";
import React from "react";
import { SocialMenu } from "./header/social-menu";
import SocialRepeater from "./footer/SocialRepeater";
import { connect, styled, decode } from "frontity";
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";

const FooterImage = chakra(Image);

const FooterSection = (props) => (
  <Box
    as="footer"
    pos="relative"
    bg="tamkeen.900"
    py={{ base: "32px", lg: "50px" }}
    {...props}
  />
);

const FooterSectionGroup = (props) => (
  <Flex
    maxWidth="1220px"
    mx="auto"
    width="100%"
    direction={{ base: "column", md: "row" }}
    justifySelf="space-between"
    {...props}
  />
);

const FooterSectionItem = (props) => (
  <Flex
    py="24px"
    color="white"
    textAlign="left"
    direction="column"
    bg="tamkeen.900"
    {...props}
  />
);

const Footer = ({ state, actions, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const options = state?.source?.data["acf-options-page/"]?.acf;
  const logo = options?.footer_logo;
  const menu1 = options?.main_menu_1;
  const menu2 = options?.main_menu_2;
  var menu2List;
  const menu3 = options?.main_menu_3;
  var menu3List;
  const contactMenu = options?.contact_menu;
  var contactList;
  const copyright = options?.copyright;
  const socialRepeater = options?.social_repeater;

  //GTM EVENT
  const FooterLinkClickEvent = (name, parentName) =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "footer",
        action: parentName,
        label: name,
      },
    });

  var menu1List;
  {
    menu1 &&
      (menu1List = menu1?.links?.map((item, index) => {
        const enlace = item?.link;
        const name = item?.link?.title;
        const parentName = menu1?.title;
        return (
          <FooterLink
            key={index}
            link={enlace?.url}
            onClick={() => FooterLinkClickEvent(name, parentName)}
          >
            {enlace?.title}
          </FooterLink>
        );
      }));
  }

  {
    menu2 &&
      (menu2List = menu2?.links?.map((item, index) => {
        const enlace = item?.link;
        const name = item?.link?.title;
        const parentName = menu2?.title;
        return (
          <FooterLink
            key={index}
            link={enlace?.url}
            onClick={() => FooterLinkClickEvent(name, parentName)}
          >
            {enlace?.title}
          </FooterLink>
        );
      }));
  }

  {
    menu3 &&
      (menu3List = menu3?.links?.map((item, index) => {
        const enlace = item?.link;
        const name = item?.link?.title;
        const parentName = menu3?.title;
        return (
          <FooterLink
            key={index}
            link={enlace?.url}
            onClick={() => FooterLinkClickEvent(name, parentName)}
          >
            {enlace?.title}
          </FooterLink>
        );
      }));
  }
  {
    contactMenu &&
      (contactList = contactMenu?.links?.map((item, index) => {
        const enlace = item?.link;
        const name = item?.link?.title;
        const parentName = contactMenu?.title;
        return (
          <FooterLink
            key={index}
            link={enlace?.url}
            onClick={() => FooterLinkClickEvent(name, parentName)}
          >
            {enlace?.title}
          </FooterLink>
        );
      }));
  }

  return (
    <FooterSection alignSelf="flex-end" pt="80px" pb="50px">
      <FooterSectionGroup maxWidth="1200px" px="30px">
        <FooterSectionItem display="flex" direction="column">
          <FooterImageSection mx={{ base: "0", md: 0 }}>
            <FooterImage
              align="left"
              maxWidth="150px"
              src={logo}
              className=""
            />
          </FooterImageSection>
          <Box
            mt="20px"
            ml="0px"
            justifyContent="space-between"
            mx={{ base: "0", md: 0 }}
          >
            <SocialRepeater items={socialRepeater} />
          </Box>
        </FooterSectionItem>
        <FooterSectionItem
          display="flex"
          direction="row"
          justifyContent="flex-end"
          width="100%"
          className=""
        >
          <NavContainer
            columns={{ base: 2, md: 4 }}
            maxWidth="620px"
            width="100%"
            justifyContent="space-between"
          >
            <NavList>
              <ListTitle>{menu1 && menu1?.title}</ListTitle>
              {menu1List}
            </NavList>
            <NavList>
              <ListTitle>{menu2 && menu2?.title}</ListTitle>
              {menu2List}
            </NavList>
            <NavList>
              <ListTitle>{menu3 && menu3?.title}</ListTitle>
              {menu3List}
            </NavList>
            <NavList>
              <ListTitle> {contactMenu && contactMenu?.title}</ListTitle>
              {contactList}
            </NavList>
          </NavContainer>
        </FooterSectionItem>
      </FooterSectionGroup>
      <FooterCopyright
        maxWidth="1200px"
        width="100%"
        mx="auto"
        justify="flex-end"
        px="30px"
      >
        <Html2React html={copyright} />
      </FooterCopyright>
    </FooterSection>
  );
};

export default connect(Footer);

const NavContainer = styled(SimpleGrid)``;

const NavList = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`;

const FooterImageSection = styled(Flex)`
  @media only screen and (min-width: 768px) {
    margin: auto;
  }
`;
const FooterCopyright = styled(Flex)`
  color: #8684b1;
  font-family: "Rubik", sans-serif;
  p {
    font-family: "Rubik", sans-serif;
    font-size: 12px;
    line-height: 18px;
  }
`;

const ListTitle = styled.h5`
  color: #e5d0fc;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 30px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 45px;
  }
`;

const FooterLink = styled(Link)`
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #dee4ed;
  transition-duration: 350ms;
  margin-bottom: 8px;
  :hover {
    color: #8684b1;
  }
`;
