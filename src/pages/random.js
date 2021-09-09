import React, { useState, useEffect } from "react";
import { Grid, Box, Text } from "@chakra-ui/layout";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import api from "../services/api";
import MyButton from "../components/MyButton";
import Joke from "../components/Joke";
import MyInput from "../components/MyInput";
import TextLinkApi from "../components/TextLinkApi";
import TextSecondary from "../components/TextSecondary";

const Categories = () => {
  const [randomJoke, setRandomJoke] = useState();
  const [numberRandomJoke, setNumberRandomJoke] = useState();
  const [multipleRandomJokes, setMultipleRandomJokes] = useState([]);

  useEffect(() => {});

  const handleChangeNumber = (event) => setNumberRandomJoke(event.target.value);

  const getRandomJoke = () => {
    api.get("/jokes/random").then((response) => {
      setRandomJoke(response.data.value);
    });
  };

  const getMultiplesRandomJokes = () => {
    api.get(`/jokes/random/${numberRandomJoke}`).then((response) => {
      setMultipleRandomJokes(response.data.value);
    });
  };

  return (
    <Grid
      display="grid"
      gridTemplateColumns="3fr 7fr"
      gridTemplateRows="480 7fr"
      gridTemplateAreas="
      '. title'
      'sidebar body'
    "
    >
      <Sidebar />
      <Title>Random</Title>
      <Box
        as="div"
        gridArea="body"
        marginTop="15px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Text fontSize="2xl">Random Joke</Text>
        <MyButton onClick={() => getRandomJoke()} />
        <TextLinkApi>https://api.icndb.com/jokes/random</TextLinkApi>
        {randomJoke ? (
          <Joke>
            {randomJoke.joke}
            <Box marginTop="3" />
            <TextSecondary>id: {randomJoke.id}</TextSecondary>
            {randomJoke.categories.map((category) => (
              <TextSecondary>{category} </TextSecondary>
            ))}
          </Joke>
        ) : (
          <Joke>"Click 'send' to generate a random joke"</Joke>
        )}
        <Text fontSize="2xl" marginY="4">
          Random Multiple Jokes
        </Text>
        <TextLinkApi>
          https://api.icndb.com/jokes/random/{numberRandomJoke}
        </TextLinkApi>
        <MyInput
          placeholder="Number of jokes"
          onChange={handleChangeNumber}
          type="number"
        />
        <MyButton onClick={() => getMultiplesRandomJokes()} />
        {multipleRandomJokes.length > 0 ? (
          multipleRandomJokes.map((joke) => (
            <Joke>
              {joke.joke}
              <Box marginTop="3" />
              <TextSecondary>{joke.id}</TextSecondary>
              {joke.categories.map((category) => (
                <TextSecondary>Category: {category}</TextSecondary>
              ))}
            </Joke>
          ))
        ) : (
          <Joke>Enter the number of jokes you want to see</Joke>
        )}

        <Box marginTop="3" />
      </Box>
    </Grid>
  );
};

export default Categories;
