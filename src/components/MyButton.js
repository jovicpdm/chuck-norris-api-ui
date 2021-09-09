import { Button, ButtonGroup, theme } from "@chakra-ui/react";

const MyButton = (props) => {
  return (
    <Button
      backgroundColor="purple.800"
      color={theme.colors.gray["450"]}
      onClick={props.onClick}
      marginTop="3"
    >
      SEND
    </Button>
  );
};

export default MyButton;
