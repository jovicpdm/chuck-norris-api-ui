import { Text } from "@chakra-ui/layout";
import theme from "@chakra-ui/theme";

const TextLinkApi = ({ children }) => {
  return (
    <Text
      fontSize="small"
      backgroundColor={theme.colors.gray["900"]}
      width="min-content"
      padding="2"
      marginY="2"
    >
      {children}
    </Text>
  );
};

export default TextLinkApi;
