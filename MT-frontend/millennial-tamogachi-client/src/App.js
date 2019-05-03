import React from 'react';
import './App.css';
import MillennialContainer from './containers/MillennialContainer'
import FormContainer from './containers/FormContainer'
// Setting Constants
const USERS_URL = "http://localhost:4000/api/v1/users";
const ITEMS_URL = "http://localhost:4000/api/v1/items";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null,
      items: [],
      userLoaded: false,
      itemsLoaded: false,
      loggedIn: false
    }
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchItems();

  }

  // Fetch all users, called from componentDidMount
  // Probably won't need this(?) Just proof-of-concept
  fetchUsers() {
    fetch(USERS_URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        currentUser: data[0],
        userLoaded: true
      })
    })
  }

  fetchItems() {
    fetch(ITEMS_URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        items: data,
        itemsLoaded: true
      })
    })
  }

  render() {
    const { userLoaded, itemsLoaded } = this.state

    return (
      <>
        {userLoaded && itemsLoaded ?
        <div>
          <h1>Current User</h1>
          {this.state.currentUser.username}
          <ul>
            {this.state.items.map(item => {
              return (
                <li>
                  Name: {item.name}<br/>
                  Value: {item.value}
                </li>
              )
            })}
          </ul>
          <MillennialContainer
            millenial={this.state.currentUser.millennials[0]}
          />
          <FormContainer
            currentUser={this.state.currentUser}
          />
        </div>
        :
        <div></div>}
      </>
    );
  }

}

export default App;
