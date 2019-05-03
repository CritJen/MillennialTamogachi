import React from "react";
import "./App.css";
import MillennialContainer from "./containers/MillennialContainer";
import LoginContainer from "./containers/LoginContainer";
import FormContainer from './containers/FormContainer'


// Setting Constants
const USERS_URL = "http://localhost:4000/api/v1/users";
const MILLENNIALS_URL = "http://localhost:4000/api/v1/millennials";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null,
      items: [],
      loggedIn: false,
      userLoaded: false
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  // Sets the current username to the input value of login form
  setUser = user => {
    this.setState({
      username: user
    });
  };

  // Fetch all users, called from componentDidMount
  // Probably won't need this(?) Just proof-of-concept
  fetchUsers() {
    fetch(USERS_URL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          currentUser: data[0],
          userLoaded: true
        });
      });


  render() {
    const { userLoaded, items } = this.state;

    return (
      <>
        {userLoaded ? (
          <div>
                     <LoginContainer setUser={this.setUser} />

            <h1>Current User</h1>
            {this.state.currentUser.username}

            <MillennialContainer
              millenial={this.state.currentUser.millennials[0]}
            />
      
          <FormContainer
            currentUser={this.state.currentUser}
          />
          </div>
        ) : (
          <div />
        )}

      </>
    );
  }
}

export default App;
