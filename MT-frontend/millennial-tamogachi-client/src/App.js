import React from "react";
import "./App.css";
import MillennialContainer from "./containers/MillennialContainer";
import LoginContainer from "./containers/LoginContainer";
import FormContainer from "./containers/FormContainer";
import Header from "./component/Header";

// Setting Constants
const USERS_URL = "http://localhost:4000/api/v1/users";

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

  // componentDidMount() {
  // this.fetchUsers();
  // }

  // Sets the current username to the input value of login form
  setUser = user => {
    this.setState({
      username: user.username,
      currentUser: user,
      loggedIn: true
    });
  };

  // Fetch all users, called from componentDidMount
  // Probably won't need this(?) Just proof-of-concept

  // fetchUsers() {
  //   fetch(USERS_URL)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       this.setState({
  //         currentUser: data[0],
  //         userLoaded: true
  //       });
  //     });
  // }

  logout = () => {
    this.setState({ currentUser: null, userLoaded: false, loggedIn: false });
  };

  render() {

    const { loggedIn, items , currentUser } = this.state;

    return (
      <>
        {loggedIn ? (
          <div>
            <Header
              user={this.state.currentUser}
              logout={this.logout}
            />

            <MillennialContainer
              millenial={currentUser.millennials[0]}
              currentUser={currentUser}
            />

            <FormContainer currentUser={this.state.currentUser} />
          </div>
        ) : (
          <div>
            <LoginContainer setUser={this.setUser} />
          </div>
        )}
      </>
    );
  }
}

export default App;
