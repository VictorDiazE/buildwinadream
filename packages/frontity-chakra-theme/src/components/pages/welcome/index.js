import { connect, styled } from "frontity";
import React, { useState, useEffect, useRef } from "react";
import { Stack } from "@chakra-ui/react";
import MenuProfile from "../../user-data/menu-profile";
import FormAccount from "../../user-data/forms";

const UserData = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const id = data.id;
  const page = state.source.page[id]?.acf;

  useEffect(() => {
    actions.source.fetch("/my-account/");
    const account = state.source.get("/my-account/");
    const accountID = account?.id;
    const myAccount = state.source.page[accountID]?.acf;
  }, []);
  const accountACF = myAccount?.page;
  return (
    <PageContainer>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="24px"
        justifyContent="center"
      >
        <MenuProfile />
        <FormAccount fields={accountACF} />
      </Stack>
    </PageContainer>
  );
};

export default connect(UserData);

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  color: white;
  padding-top: 180px;
`;
