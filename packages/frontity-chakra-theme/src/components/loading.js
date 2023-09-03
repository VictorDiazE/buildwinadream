import { Box, CircularProgress } from "@chakra-ui/react";

const Loading = () => (
  <Box
    mx="auto"
    p="24px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    minH="inherit"
  >
    <CircularProgress
      css={{
        "[data-progress-indicator]": {
          color: "#4C43CD",
        },
      }}
      isIndeterminate
    />
  </Box>
);

export default Loading;
