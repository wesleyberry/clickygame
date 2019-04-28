import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Cards";
import friends from "./friends.json";

function App() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Card
          image={friends[0].image}
        />
        <Card
          image={friends[1].image}
        />
        <Card
          image={friends[2].image}
        />
        <Card
          image={friends[3].image}
        />
        <Card
          image={friends[4].image}
        />
        <Card
          image={friends[5].image}
        />
        <Card
          image={friends[6].image}
        />
        <Card
          image={friends[7].image}
        />
      </Wrapper>
    );
  }
  
  export default App;
  