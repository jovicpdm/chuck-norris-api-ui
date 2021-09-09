import React from "react";
import { Grid, Box } from "@chakra-ui/layout";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import api from "../services/api";
import { useState } from "react";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import Joke from "../components/Joke";
import TextLinkApi from "../components/TextLinkApi";

const Try = () => {
  const [joke, setJoke] = useState({
    id: 0,
    joke: '',
    categorie: ''
  });
  
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");

  const handleChangeFirstName = (event) => setInputFirstName(event.target.value)  
  const handleChangeLastName = (event) => setInputLastName(event.target.value)

  const getWithName = (firstName, lastName) => {
    api
      .get(`/jokes/random?firstName=${firstName}&lastName=${lastName}`)
      .then((response) => {
          setJoke(response.data.value);
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
      <Title>Try with your name</Title>
      <Box
        as="div"
        gridArea="body"
        marginTop="15px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <MyInput placeholder="First name" onChange={handleChangeFirstName}></MyInput>
        <MyInput placeholder="Last name" onChange={handleChangeLastName}></MyInput>
        <MyButton onClick={() => getWithName(inputFirstName, inputLastName)}/>
        <TextLinkApi>
          https://api.icndb.com/jokes/random?firstName={inputFirstName}&lastName={inputLastName}
        </TextLinkApi>
        <Joke>
          {joke.id > 0 ? joke.joke : "Enter your first and last name to receive a joke with your name"}
        </Joke>
      </Box>
    </Grid>
  );
};

export default Try;
