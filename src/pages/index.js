import { Box, Grid, Text, theme } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Joke from "../components/Joke";
import Sidebar from "../components/Sidebar";
import TextLinkApi from "../components/TextLinkApi";
import TextSecondary from "../components/TextSecondary";
import Title from "../components/Title";
import api from "./../services/api";

const Index = () => {
  const [jokes, setJokes] = useState([]);
  const [number, setNumber] = useState(Number);

  useEffect(() => {
    api.get("/jokes?escape=javascript").then((response) => {
      setJokes(response.data.value);
    });
    api.get("/jokes/count").then((response) => {
      setNumber(response.data.value);
    });
  });

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
      <Title>All jokes ({number})</Title>
      <Box marginTop="2" gridArea="body" paddingRight="2" height="min-content">
        <TextLinkApi>https://api.icndb.com/jokes</TextLinkApi>
        {jokes.map((item) => (
          <Joke>
            {item.joke}
            <Box marginTop="4" />
            <TextSecondary>id: {item.id}</TextSecondary>
            {item.categories.map((category) => (
              <TextSecondary>Category: {category}</TextSecondary>
            ))}
          </Joke>
        ))}
      </Box>
    </Grid>
  );
};

export default Index;
