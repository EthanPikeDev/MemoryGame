import React from "react";


//Navbar component to display the relevant info in the navbar
class Navbar extends React.Component {
  
  //Function to refresh the page when the game is quit or restarted.
  _refreshPage() {
    console.log("refreshed");
    window.location.reload();
  }

  //function to display the rules/help on user request.
  _helpPage() {
    alert("Rules: Click on each card to reveal the card and try to find the matching card using memory. When you quit or restart you will be able to log in again and start with a fresh score.")
  }

  render() {
    const { name, score } = this.props;
    return (
      <div className="navbar">
        <div className="game-title">Memory Game</div>
        <div className="name">{name}</div>
        <div className="score">Score: {score}</div>
        <button onClick = {this._refreshPage} >Quit/Restart?</button>
        <button onClick = {this._helpPage} >Rules/Help</button>
      </div>
    );
  }
}

export default Navbar;
