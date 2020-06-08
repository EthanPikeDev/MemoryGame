import React from "react";


//Login Component for when a user imputs their username
class Login extends React.Component {
  state = {};

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="login">
          <form>
            <div className="form-group">
              <label>Name:  </label>
              <input
                type="name"
                className="form-control"
                onChange={this.handleChange}
              />
              <br/>
              <small className="form-text text-muted">
                Please enter your name 
                to play the memory game
              </small>
            </div>
            <br/>

            <button onClick={this.handleClick} className="btn btn-primary">
              Start Game
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
