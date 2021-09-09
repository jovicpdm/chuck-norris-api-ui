import { Text } from "@chakra-ui/layout"
import theme from "@chakra-ui/theme"

const TextSecondary = ({children}) => {
  return(
    <Text
      fontSize="small"
      color={theme.colors.purple["600"]}
    >{children}</Text>
  )
}

export default TextSecondary