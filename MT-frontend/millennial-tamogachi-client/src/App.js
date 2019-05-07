import React from "react";
import "./App.css";
import MillennialContainer from "./containers/MillennialContainer";
import LoginContainer from "./containers/LoginContainer";
import FormContainer from "./containers/FormContainer";
import Header from "./component/Header";
import { Button } from "semantic-ui-react";

// Setting Constants
const USERS_URL = "http://localhost:4000/api/v1/users";
const MILLENNIALS_URL = "http://localhost:4000/api/v1/millennials";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      millennials: [],
      loggedIn: false,
      hasMillennial: false,
      millennialForm: false
    };
  }

  // Sets the current username to the input value of login form
  setUser = user => {
    this.setState({
      currentUser: user,
      millennials: user.millennials,
      loggedIn: true,
      hasMillennial: user.millennials.length !== 0
    });
  };

  // Set hasMillennial to true based on CREATE
  handleNewMillennial = mill => {
    this.setState({
      hasMillennial: true,
      millennials: [...this.state.millennials, mill]
    });
  };

  // Deletes millennial, triggered from MillennialCard
  deleteMillennial = millennial => {
    fetch(MILLENNIALS_URL + '/' + millennial.id, {
      method: 'DELETE'
    })
    .then(resp => {
      let newMillennials = this.removeMillennialFromState(millennial);
      this.setState({
        millennials: newMillennials,
        hasMillennial: newMillennials.length !== 0
      })
    })
  }

  // Goes through millennials state and removes millennial
  removeMillennialFromState = millennial => {
    let newMillennials = this.state.millennials.filter(mill => {
      return mill !== millennial
    })
    return newMillennials;
  }

  togglemillennialForm = () => {
    this.setState({ millennialForm: true });
  };

  logout = () => {
    this.setState({ currentUser: null, loggedIn: false });
  };

  closeModal = () => {
    this.setState({ millennialForm: false });
  };

  render() {

    const {
      loggedIn,
      items,
      currentUser,
      hasMillennial,
      millennials
    } = this.state;


    return (
      <>
        {loggedIn ? (
          <div>
            <Header user={this.state.currentUser} logout={this.logout} />
            {/* }{!hasMillennial && ( */}
            <Button
              circular
              animated="fade"
              onClick={this.togglemillennialForm}
            >
              <Button.Content visible>Add a Millennial</Button.Content>
              <Button.Content hidden>Now!</Button.Content>
            </Button>
            {/* )} */}
            {this.state.millennialForm && (
              <FormContainer
                closeModal={this.closeModal}
                currentUser={currentUser}
                handleNewMillennial={this.handleNewMillennial}
                millennial={millennials[0]}
              />
            )}
            <MillennialContainer
              millennials={millennials}
              currentUser={currentUser}
              hasMillennial={hasMillennial}
              togglemillennialForm={this.togglemillennialForm}
              closeModal={this.closeModal}
              deleteMillennial={this.deleteMillennial}
            />
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
