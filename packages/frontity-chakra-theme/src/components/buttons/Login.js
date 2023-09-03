import { connect, styled, decode, css } from "frontity";
import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Link from "@frontity/components/link";

const Login = ({ title, actions, props }) => {
  //GTM EVENT
  const LoginHeaderEvent = () =>
    actions.analytics.event({
      name: "genericEvent",
      payload: {
        category: "header",
        action: "login",
        label: "",
      },
    });

  return (
    <>
      <Link
        link="/login/"
        onClick={() => {
          LoginHeaderEvent();
        }}
      >
        <Box
          aria-label="Login"
          className="login"
          lineHeight="1.2"
          border="2px"
          px="8px"
          borderRadius="40px"
          fontSize="12px"
          letter-spacings={"0.95em"}
          fontWeight="600"
          bg="transparent"
          borderColor="white"
          color="white"
          padding={"11px 40px"}
          textTransform={"uppercase"}
          marginInlineStart={"0px !important"}
          transition={"ease-in-out 500ms"}
          _hover={{ bg: "white", color: "#4c43cd" }}
          _active={{
            bg: "transparent",
            /* transform: 'scale(0.98)', */
            borderColor: "white",
          }}
          _focus={{
            boxShadow: "none",
          }}
          {...props}
        >
          {title}
        </Box>
      </Link>
    </>
  );
};

export default connect(Login);
