import React, { useState } from "react";
import { connect } from "frontity";
import { Button, Flex, Box } from "@chakra-ui/react";

const FilterPostsButtons = ({ filterItem, setProjectsFilter, state }) => {
  const [activeId, setActiveId] = useState("all");

  const onClickAll = () => {
    setProjectsFilter(state.theme.projects);
    setActiveId("all");
  };

  const onClickCategory = (id) => {
    filterItem(id);
    setActiveId(id);
  };
  return (
    <>
      <Flex gap="32px" padding={"60px 0 34px 0"}>
        <Box
          onClick={() => onClickAll()}
          className={activeId === "all" ? "active" : ""}
          fontFamily="Rubik"
          as="button"
          color="#FFFFFF"
          fontWeight="400"
          fontSize="18.66px"
          lineHeight="30px"
          borderBottom="2px solid rgba(255,255,255,0)"
          _hover={{ borderBottom: "2px solid #4c43cd" }}
          _active={{ borderBottom: "2px solid #4c43cd" }}
          _focus={{ borderBottom: "2px solid #4c43cd" }}
        >
          All
        </Box>
        {state.theme.allCategories.map((category, id) => {
          return (
            <>
              {/* Descartamos la uncategorized por defecto !=1 */}
              {category.id != 1 && (
                <Box
                  id={category.id}
                  onClick={() => onClickCategory(category.id)}
                  key={id}
                  className={activeId === category.id ? "active" : ""}
                  fontFamily="Rubik"
                  as="button"
                  color="#FFFFFF"
                  fontWeight="400"
                  fontSize="18.66px"
                  lineHeight="30px"
                  borderBottom="2px solid rgba(255,255,255,0)"
                  _hover={{ borderBottom: "2px solid #4c43cd" }}
                  _active={{ borderBottom: "2px solid #4c43cd" }}
                  _focus={{ borderBottom: "2px solid #4c43cd" }}
                >
                  {category.name}
                </Box>
              )}
            </>
          );
        })}
      </Flex>
    </>
  );
};

export default connect(FilterPostsButtons);

{
  /* <Box
  as='button'
  height='24px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='#f5f6f7'
  borderColor='#ccd0d5'
  color='#4b4f56'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  Join Group
</Box> */
}
