import React from 'react';
import './App.css';
// Setting Constants
const USERS_URL = "http://localhost:3000/api/v1/users";
const ITEMS_URL = "http://localhost:3000/api/v1/items";
const MILLENNIALS_URL = "http://localhost:3000/api/v1/millennials";

class App extends React.Component {
  // User will probably be set to single user on login
  constructor() {
    super();
    this.state = {
      currentUser: '',
      millennial: null,
      items: []
    }
  }

  componentDidMount() {
    this.fetchUsers();
    // this.fetchMillennials();
    this.fetchItems();
  }

  // Fetch all users, called from componentDidMount
  // Probably won't need this(?) Just proof-of-concept
  fetchUsers() {
    fetch(USERS_URL)
    .then(resp => resp.json())
    .then(data => this.setState({ currentUser: data[0] }))
  }

  // Fetch all millenials, called from componentDidMount
  // Will want to filter to only get millennials for single user
  fetchMillennials() {
    fetch(MILLENNIALS_URL)
    .then(resp => resp.json())
    .then(data => this.setState({ millennial: data[0] }))
  }

  fetchItems() {
    fetch(ITEMS_URL)
    .then(resp => resp.json())
    .then(data => this.setState({ items: data }))
  }

  render() {
    return (
      <div>
        <h1>Millennials!</h1>
        <h3>Current User</h3>
        {this.state.currentUser}
        <h3>Your Millennial</h3>
        <h3>Some Items</h3>
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
      </div>
    );
  }

}

export default App;
