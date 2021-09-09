import {
  color,
  Grid,
  Link,
  List,
  ListItem,
  theme,
} from "@chakra-ui/react";
import LinkNext from "next/link";

const Sidebar = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      gridArea="sidebar"
      marginTop="2"
    >
      <List paddingLeft="4">
        <ListItem marginBottom="3">
          <LinkNext href="/">
            <Link
              fontSize="2xl"
              _hover={{ backgroundColor: theme.colors.gray["50"], color: theme.colors.purple["500"] }}
              paddingY="2.5"
              paddingRight="20"
              orderRadius="4"
            >
              All
            </Link>
          </LinkNext>
        </ListItem>
        <ListItem marginBottom="2">
          <LinkNext href="/try-with-your-name">
            <Link
              fontSize="2xl"
              _hover={{ backgroundColor: theme.colors.gray["50"], color: theme.colors.purple["500"] }}
              paddingY="2.5"
              borderRadius="4"
            >
              Try with your name
            </Link>
          </LinkNext>
        </ListItem>
        <ListItem marginBottom="2">
          <LinkNext href="/search-one">
            <Link
              fontSize="2xl"
              _hover={{ backgroundColor: theme.colors.gray["50"], color: theme.colors.purple["500"] }}
              paddingY="2.5"
              borderRadius="4"
            >
              Search by id
            </Link>
          </LinkNext>
        </ListItem>
        <ListItem marginBottom="2">
          <LinkNext href="/random">
            <Link
              fontSize="2xl"
              _hover={{ backgroundColor: theme.colors.gray["50"], color: theme.colors.purple["500"] }}
              paddingY="2.5"
              borderRadius="4"
            >
              Random Joke
            </Link>
          </LinkNext>
        </ListItem>
        <ListItem marginBottom="2">
          <LinkNext href="/categories">
            <Link
              fontSize="2xl"
              _hover={{ backgroundColor: theme.colors.gray["50"], color: theme.colors.purple["500"] }}
              paddingY="2.5"
              borderRadius="4"
            >
              Categories
            </Link>
          </LinkNext>
        </ListItem>
      </List>
    </Grid>
  );
};

export default Sidebar;
