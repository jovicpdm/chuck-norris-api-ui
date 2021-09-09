import { Text } from "@chakra-ui/layout";

const Title = ({children}, props) => {
  return (
    <Text 
      gridArea="title"
      fontSize="4xl"
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      padding="1.5"
      fontWeight="black"
      color={props.color}
    >
        {children}
    </Text>
  )
}

export default Title;