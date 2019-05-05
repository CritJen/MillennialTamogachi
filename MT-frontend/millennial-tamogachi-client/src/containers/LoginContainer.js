import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Tamagachi from "../assets/tamagochi/RaimbowTamagachi.jpg";
import styles from "../styles/LoginContainer.module.css";

const USERS_URL = "http://localhost:4000/api/v1/users";

const divStyle = {
  margin: "auto",
  width: "30%",
  padding: "250px 0"
};

const fontStyle = {
  textAlign: "center"
};

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

  submitLogin = ev => {
    ev.preventDefault();
    let currentUser = { username: this.state.username };

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
        this.props.setUser(data);
        console.log(data);
      });
  };

  render() {
    return (
      <>
        <div
          className={styles.background}
          style={divStyle}
          style={{ backgroundImage: `url(${Tamagachi})` }}
        >
          <h1 className={styles.title} style={fontStyle}>
            Millennial
          </h1>
          <br />
          <br />
          <br />
          <Form
            onSubmit={this.submitLogin}
            size={"huge"}
            className={styles.form}
          >
            <Form.Field>
              <label className={styles.label}>Username:</label>
              <input
                type="text"
                id="username"
                value={this.state.username}
                onChange={this.logIn}
              />
            </Form.Field>
            <Button color="teal" type="submit" size="large" circular>
              Submit
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default LoginContainer;
