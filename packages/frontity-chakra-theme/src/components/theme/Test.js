import { connect, styled, decode } from "frontity";
import React from "react";
import {
  Box,
  ChakraProvider,
  HStack,
  Avatar,
  Center,
  Switch,
  Tag,
  Heading,
  Text
} from "@chakra-ui/react";

function Test() {
  return (
    <Box padding="4" bg="gray.100">
      <Box
        position="relative"
        paddingY="8"
        bg="white"
        shadow="md"
        borderStartWidth="5px"
        borderStartColor="teal"
        paddingStart="8"
        paddingEnd="6"
      >
        <HStack>
          <Avatar
            name="Jill Vince"
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          />
          <Heading fontSize="xl">Jill Vince</Heading>
          <Tag size="sm" variant="solid" colorScheme="teal">
            Developer
          </Tag>
        </HStack>
        <Text mt={4}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </Box>
    </Box>
  );
}
export default connect(Test);
