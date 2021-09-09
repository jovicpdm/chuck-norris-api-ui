import React, { useState, useEffect } from "react";
import { Grid, Box } from "@chakra-ui/layout";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import api from "../services/api";
import Joke from "../components/Joke";
import TextLinkApi from "../components/TextLinkApi";

const SearchOne = () => {
  const [joke, setJoke] = useState({});

  const handleChange = (event) => setInput(event.target.value);

  const [input, setInput] = useState("");

  const getJoker = (value) => {
    api.get(`/jokes/${value}`).then((response) => {
      setJoke(response.data.value);
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
      <Title>Search by id</Title>
      <Box
        gridArea="body"
        marginTop="15"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <MyInput placeholder="id" onChange={handleChange} />
        <MyButton onClick={() => getJoker(input)} />
        <TextLinkApi>https://api.icndb.com/jokes/{input}</TextLinkApi>
        <Joke>
          {joke.id > 0
            ? joke.joke
            : "Enter a joke id to see it"}
        </Joke>
      </Box>
    </Grid>
  );
};

export default SearchOne;
