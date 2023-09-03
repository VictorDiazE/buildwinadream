import { Box, Flex, Icon, Input } from "@chakra-ui/react";
import { connect } from "frontity";
import React from "react";
import useSearch from "../hooks/useSearch";

// A11y: Add a hidden search button
const SearchForm = props => {
	const { form, input } = useSearch(props);
	return (
		<Flex
			as="form"
			maxWidth="md"
			mx="auto"
			pos="relative"
			width="100%"
			height="80%"
			justifyContent="center"
			alignItems="center"
			{...form}
		>
			<Input
				placeholder="Type and Hit Enter"
				variant="flushed"
				size="lg"
				fontSize={{ base: "24px", md: "32px" }}
				height="auto"
				focusBorderColor="primary.400"
				py={{ base: 1, md: 3 }}
				{...input}
			/>
			<Box
				as='button'
				className="icon-search"
				height='24px'
				lineHeight='1.2'
				transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
				border='0px'
				px='8px'
				borderRadius='0px'
				fontSize='22px'
				fontWeight='semibold'
				bg='transparent'
				borderColor='transparent'
				color='principal.700'
				marginInlineStart={'0px !important'}
				_hover={{ bg: 'transparent' }}
				_active={{
					bg: 'transparent',
					/* transform: 'scale(0.98)', */
					borderColor: '#bec3c9',
				}}
				_focus={{
					boxShadow: 'none',
				}}
			/>
		</Flex>
	);
};

export default connect(SearchForm);
