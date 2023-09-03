import { connect } from "frontity";
import React from "react";
import { Box, chakra } from "@chakra-ui/react";
import FrontityLink from "@frontity/components/link";

const Link = chakra(FrontityLink);

const User = ({ actions, props }) => {
  //GTM EVENT
  const MyAccountEvent = () =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "account",
        action: "access",
        label: "",
      },
    });

  return (
    <>
      <Box
        aria-label="Acount"
        as="button"
        height="24px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="0px"
        px="8px"
        borderRadius="0px"
        fontSize="22px"
        fontWeight="semibold"
        bg="transparent"
        borderColor="transparent"
        color="white"
        marginInlineStart={"0px !important"}
        _hover={{ bg: "transparent" }}
        _active={{
          bg: "transparent",
          /* transform: 'scale(0.98)', */
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow: "none",
        }}
        {...props}
      >
        <Link
          onClick={() => {
            MyAccountEvent();
          }}
          _hover={{ textDecor: "none" }}
          textDecor={"none"}
          className="icon-user"
          link="/my-account/"
        ></Link>
      </Box>
    </>
  );
};

export default connect(User);
