import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.scss';

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Player: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.name }
      </span>

      <Counter score={ props.score } />
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={1} />

        <Player name="Matt" score={35} />
      </div>
    );
  }
}

export default App;
