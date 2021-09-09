import { Box, Text } from "@chakra-ui/react";

const Joke = ({ children }, props) => {
  return (
    <Box
      p="3"
      width="100%"
      border="1px"
      borderColor="purple.800"
      marginTop="2"
    >
      <Text color="purple.50">{children}</Text>
    </Box>
  );
};

export default Joke;
