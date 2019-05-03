import React, { Component } from "react";

const USERS_URL = "http://localhost:4000/api/v1/users";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  logIn = ev => {
    this.setState({
      username: ev.target.value
    });
  };

  // function

  submitLogin = ev => {
    ev.preventDefault();
    let currentUser = { username: this.state.username };
    console.log(currentUser);
    fetch(USERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(currentUser)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitLogin}>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.logIn}
          />
          <button
            type="submit"
            onClick={() => this.props.updateUser(this.state.username)}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default LoginContainer;
