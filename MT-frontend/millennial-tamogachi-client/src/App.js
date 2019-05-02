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
      users: [],
      millennials: [],
      items: []
    }
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchMillennials();
    this.fetchItems();
  }

  // Fetch all users, called from componentDidMount
  // Probably won't need this(?) Just proof-of-concept
  fetchUsers() {
    fetch(USERS_URL)
    .then(resp => resp.json())
    .then(data => this.setState({ users: data }))
  }

  // Fetch all millenials, called from componentDidMount
  // Will want to filter to only get millennials for single user
  fetchMillennials() {
    fetch(MILLENNIALS_URL)
    .then(resp => resp.json())
    .then(data => this.setState({ millennials: data }))
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
        <h3>List of Users</h3>
        <ul>
          {this.state.users.map(user => {
            return <li>{user.username}</li>
          })}
        </ul>
        <h3>List of Millennials</h3>
        <ul>
          {this.state.millennials.map(millennial => {
            return (
              <li>
                Name: {millennial.name}<br/>
                Thirst: {millennial.thirst} (higher the thirstier?)<br/>
                Avatar: {millennial.avatar} (need to figure out)<br/>
                Belongs to: {millennial.user.username}
              </li>
            )
          })}
        </ul>
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
