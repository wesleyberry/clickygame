import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./components/Container";
import Score from "./components/Score";
import Card from "./components/Cards";
import friends from "./friends.json";

class App extends React.Component {

  state = {
    friends
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Score></Score>
        <Container>
          {this.state.friends.map(friend => {
            return(
              <Card 
                key={friend.id}
                image={friend.image}
              />
            );
          })}
        </Container>
      </Wrapper>
    );
  }
  }
  
  export default App;
  