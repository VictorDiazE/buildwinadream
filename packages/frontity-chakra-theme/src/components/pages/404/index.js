import { React, useEffect, useState } from "react";
import { connect, styled } from "frontity"
import { Flex, TabList, TabPanel, Tabs, Tab, Text, TabPanels, Box } from "@chakra-ui/react";
import Page404Content from "./Page404";

const Page404 = ({ state, libraries }) => {

    const options = state?.source?.data["acf-options-page/"]?.acf;
    const content = options?.content404;
    const imagen404 = options?.image404;
    const links = options?.links404;
    return (
        <>
            <Flex
                width="100%"
                maxWidth="100%"
                minH="700px"
                mx="auto"
                pb={{ base: "0", md: "20px" }}
                flexDirection="column"
            >
                <Page404Content/>
            </Flex>
        </>
    )
}

export default connect(Page404)

