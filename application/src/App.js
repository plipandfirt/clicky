import React, { Component } from "react";
import Nav from "./components/Nav/nav";
import Wrapper from "./components/Wrapper/wrapper";
import Card from "./components/Card/card";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";
import cards from "./cards.json";


class App extends Component {

  state = {
    cards,
    score: 0,
    topscore: 0,
    navmessage: ""
  }

  gameOver = () => {
    if(this.state.score > this.state.topscore) {
      this.setState({topscore: this.state.score}, function () {
        console.log(this.state.topscore);
      });
    }

    this.state.cards.forEach(card => {
      card.count = 0;
    });

    alert(`Game Over \nScore: ${this.state.score}`);
    this.setState({score:0});
    return true;
  }

  // need to reset the game without refeshing the screen

  clickCount = id => {
    // eslint-disable-next-line
    this.state.cards.find((o, i) => {
      if (o.id ===id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({score: this.state.score +1}, function() {
            console.log(this.state.score);
          });

          //need a you win when 12 is reached

          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {this.gameOver()}
      }
    });

  }

  render() {
    return (
      <div>
        <Nav score={this.state.score} topscore={this.state.topscore} />
        <Main />
        <Wrapper>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />))}
        </Wrapper>
        <Footer/>
      </div>

    );
  }
}

export default App;