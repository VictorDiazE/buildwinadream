import { Box } from "@chakra-ui/react";

const Lang = ({ props }) => {

	return (
		<>
			<Box
                aria-label="Select Language"
                as='button'
                className="icon-globe"
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
                color='white'
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
                {...props}
                />
		</>
	)
}

export default Lang;