import { connect, styled } from "frontity";
import React from "react";
import { Stack } from "@chakra-ui/react";
import MenuProfile from "./menu-profile";
import FormAccount from "./forms";

const UserData = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const id = data.id;
  const page = state.source.page[id]?.acf;

  return (
    <PageContainer>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="24px"
        justifyContent="center"
      >
        <MenuProfile />
        <FormAccount fields={page} />
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
  scroll-behavior: smooth;
  .user-data {
    max-width: 800px;
    width: 100%;
    @media only screen and (min-width: 768px) {
      width: 70%;
    }
  }
  .welcome-text {
    margin: 0 30px 0 0;
    padding: 0 30px;
  }
`;
