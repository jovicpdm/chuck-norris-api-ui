import React from "react";
import { Grid, Box, Text } from "@chakra-ui/layout";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import api from "../services/api";
import { useState } from "react";
import TextLinkApi from "../components/TextLinkApi";
import Joke from "../components/Joke";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import TextSecondary from "../components/TextSecondary"

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [includeCategory, setIncludeCategory] = useState();
  const [excludeCategory, setExcludeCategory] = useState();
  const [jokesIncluded, setjokesIncluded] = useState({});
  const [jokesExcluded, setjokesExcluded] = useState({});

  const handleChangeInclude = (event) => setIncludeCategory(event.target.value);
  const handleChangeExclude = (event) => setExcludeCategory(event.target.value);

  api.get("/categories").then((response) => {
    setCategories(response.data.value);
  });

  const requestIncludeCategory = () => {
    api.get(`/jokes/random?limitTo=[${includeCategory}]`).then((response) => {
      setjokesIncluded(response.data.value);
    });
  };

  const requestExcludeCategory = () => {
    api.get(`/jokes/random?exclude=[${excludeCategory}]`).then((response) => {
      setjokesExcluded(response.data.value);
    });
  };

  return (
    <Grid
      display="grid"
      gridTemplateColumns="3fr 7fr"
      gridTemplateRows="2fr 8fr"
      gridTemplateAreas="
        '. title'
        'sidebar body'
      "
    >
      <Sidebar />
      <Title>Categories</Title>
      <Box
        as="div"
        gridArea="body"
        marginTop="15px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        paddingRight="40"
      >
        <Text fontSize="2xl" marginY="4">
          All Categories
        </Text>
        <TextLinkApi>http://api.icndb.com/categories</TextLinkApi>
        {categories.map((category) => (
          <Joke>{category}</Joke>
        ))}
        <Text fontSize="2xl" marginY="4">
          Include Categories
        </Text>
        <Text fontSize="smaller" marginY="2">
          Format = [category, category, ...]
        </Text>
        <TextLinkApi>
          https://api.icndb.com/jokes/random?limitTo=[{includeCategory}]
        </TextLinkApi>
        <MyInput placeholder="category" onChange={handleChangeInclude} />
        <MyButton onClick={() => requestIncludeCategory()} />
        <Joke>
          {jokesIncluded.joke
            ? jokesIncluded.joke
            : "Enter a category to see a random joke from that category"}
        </Joke>

        <Text fontSize="2xl" marginY="4">
          Exclude Categories
        </Text>
        <Text fontSize="smaller" marginY="2">
          Format = [category, category, ...]
        </Text>
        <TextLinkApi>
          https://api.icndb.com/jokes/random?exclude=[{excludeCategory}]
        </TextLinkApi>
        <MyInput placeholder="category" onChange={handleChangeExclude} />
        <MyButton onClick={() => requestExcludeCategory()} />
        {jokesExcluded.joke ? (
          <Joke>
            {jokesExcluded.joke}
            <TextSecondary>id: {jokesExcluded.id}</TextSecondary>
            {jokesExcluded.categories.map((category) => (
              <TextSecondary>Category: {category}</TextSecondary>
            ))}
          </Joke>
        ) : (
          <Joke>Enter the category you don't want to see a joke</Joke>
        )}
        <Box marginY="10" />
      </Box>
    </Grid>
  );
};

export default Categories;
