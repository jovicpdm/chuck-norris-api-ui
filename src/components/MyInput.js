import { Input } from "@chakra-ui/input";

const MyInput = (props) => {
  return <Input 
    placeholder={props.placeholder}
    co
    width="80"
    backgroundColor="gray.900"
    onChange={props.onChange}
    marginBottom="1"
    type={props.type ? props.type : "text"}
  />;
};

export default MyInput;
