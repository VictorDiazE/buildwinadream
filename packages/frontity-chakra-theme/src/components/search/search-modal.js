import { Modal, ModalCloseButton, ModalContent } from "@chakra-ui/react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SearchModal = props => (

		<Modal preserveScrollBarGap {...props}>
			<ModalContent
				width="100vw"
				my="0"
				padding="40px"
				maxWidth="100%"
				height="100vh"
				bg="rgba(251,251,251,0.96)"
				css={{ backdropFilter: "blur(1px)" }}
			>
				{props.children}
				<ModalCloseButton size="lg" rounded="full" />
			</ModalContent>
		</Modal>

);

export default SearchModal;
