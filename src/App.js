import React, { Component } from 'react';
import './App.css';
import LuckyImage from './components/LuckyImage';

class App extends Component {
  state = {
    pictures: [
      {
        name: "clover",
        image: require("./images/clover.jpg")
    },
    {
      name: "rainbow",
      image: require("./images/rainbow.png")
    },
    {
      name: "horseshoe",
      image: require("./images/horseshoe.png")
    },
    {
      name: "hat",
      image: require("./images/hat.jpg")
    },
    {
      name: "boat",
      image: require("./images/sailboat.jpg")
    },
    {
      name: "glasses",
      image: require("./images/glasses.png")
    },
    {
      name: "balloon",
      image: require("./images/ballon.png")
    }
  ],
    alreadyClicked: [],
    wins: 0,
    losses: 0,
    score: 0
  }

    handleClick = (name) => {
      const shuffledImages = this.state.pictures
      this.setState({
        pictures: shuffledImages.sort((a, b) => 0.5-Math.random())
      })
      if(this.state.alreadyClicked.includes(name)){
        this.setState({losses: this.state.losses + 1, alreadyClicked: [], score: 0})
      } else {
        const newAlreadyClicked = this.state.alreadyClicked
        newAlreadyClicked.push(name)
        this.setState({score: this.state.score + 1})
        this.setState({alreadyClicked: newAlreadyClicked})
        if(this.state.alreadyClicked.length === this.state.pictures.length){
          this.setState({wins: this.state.wins + 1, alreadyClicked: [], score: 0})
        }
      }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Not-Clicky Game</h1>
          <h2>wins:{this.state.wins}</h2>
          <h2>losses:{this.state.losses}</h2>
          <h2>score:{this.state.score}</h2>
          <div>
            {this.state.pictures.map(pic => (

              <LuckyImage image={pic.image} name={pic.name} key={pic.name} onClick={ () => this.handleClick(pic.name)} />
            
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
