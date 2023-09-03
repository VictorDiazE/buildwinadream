import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { Box, Stack, Link, background } from "@chakra-ui/react";

export const PaginationButton = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
  min-height: 60px;

  cursor: pointer;
  border: none;
  background: transparent;
  color: #ffffff;

  &:hover {
    background-color: #4c43cd;
    color: #ffffff;
  }

  &[aria-disabled="true"] {
    background-color: transparent;
    cursor: auto;
    color: #818181;
  }
`;

export const PrevLink = ({
  isDisabled,
  label = "See older posts",
  link,
  ...props
}) => (
  <Box {...props}>
    <PaginationButton
      href={isDisabled ? null : link}
      aria-label={label}
      aria-disabled={isDisabled}
    >
      <Box width="40px" height="auto" as={IoIosArrowRoundForward} />
    </PaginationButton>
  </Box>
);

export const NextLink = ({
  isDisabled,
  label = "See newer posts",
  link,
  ...props
}) => (
  <Box {...props}>
    <PaginationButton
      href={isDisabled ? null : link}
      aria-label={label}
      aria-disabled={isDisabled}
    >
      <Box width="40px" height="auto" as={IoIosArrowRoundBack} />
    </PaginationButton>
  </Box>
);

const Pager = ({ totalPages, ruta, data }) => {
  const pages = [...Array(totalPages)].map((x) => 0);

  return pages.map((page, index) => {
    const link = `/news/page/${index + 1}/`;
    const isLink = link === data.link;
    return (
      <Box padding={0}>
        <Link
          _hover={{
            textDecoration: "none",
            color: "#fff",
            backgroundColor: "buttonpurple",
          }}
          color={isLink ? "white" : "#8684b1"}
          display={"flex"}
          justifyContent={"center"}
          verticalAlign={"middle"}
          padding={"1rem 1.5rem"}
          fontSize={{ base: "18.66px", md: "18.66px" }}
          /* 						color={'#8684b1'} */
          href={link}
          key={index}
        >
          {index + 1}
        </Link>
      </Box>
    );
  });
};

const Pagination = ({ state, actions, libraries, ...props }) => {
  const { totalPages } = state.source.get(state.router.link);
  const { path, page, query } = libraries.source.parse(state.router.link);
  const ruta = state.source.data["/news/"];
  const data = state.source.get(state.router.link);

  const isThereNextPage = page > 1;
  const isTherePreviousPage = page < totalPages;

  const nextPageLink = libraries.source.stringify({
    path,
    page: page + 1,
    query,
  });

  const prevPageLink = libraries.source.stringify({
    path,
    page: page - 1,
    query,
  });

  // Fetch the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (isThereNextPage) actions.source.fetch(nextPageLink);
  }, []);

  return (
    <Stack direction="row" spacing="0px" {...props} justifyContent={"center"}>
      <NextLink link={prevPageLink} isDisabled={!isThereNextPage} />
      <Pager totalPages={totalPages} ruta={ruta} data={data} />
      <PrevLink link={nextPageLink} isDisabled={!isTherePreviousPage} />
    </Stack>
  );
};

export default connect(Pagination);
