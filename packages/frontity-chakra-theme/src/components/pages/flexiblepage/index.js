import { connect, styled } from "frontity";
import React from "react";
import FlexibleContent from "../../theme/FlexibleContent";
import FlexibleHero from "../../theme/FlexibleHero";
import { Box } from "@chakra-ui/react";

const FlexiblePage = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const id = data.id;
  const page = state.source.page[id]?.acf;
  // Flexible Hero
  const flexHero = page?.flexible_hero;

  // Flexible Content
  const flexibleContent = page?.flexible;

  return (
    <Container>
      <FlexibleHero flexible={flexHero} />
      <FlexibleContent flexible={flexibleContent} />
    </Container>
  );
};

export default connect(FlexiblePage);

const Container = styled(Box)`
  width: 100%;
`;
