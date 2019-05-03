import React from "react";
import avatar from '../4507.jpg';
// Setting Constants
const MILLENNIALS_URL = "http://localhost:4000/api/v1/millennials"

class FormContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      avatar: ''
    };
  }

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  // Helper method used in the postMillennial method
  makeFetchBody() {
    let body = this.state;
    let user = { user: this.props.currentUser }
    let thirst = { thirst: 10 }
    let finalBody = {...body, ...user, ...thirst}
    return finalBody
  }

  // Triggered by submit button
  postMillennial = (ev) => {
    ev.preventDefault();
    // Posting new millennial
    fetch(MILLENNIALS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.makeFetchBody())
    })
    .then(resp => resp.json())
    .then(data => {
      // Resetting state, so form is reset
      this.setState({
        name: '',
        avatar: ''
      })
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.postMillennial}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          {/* Avatar */}
          <input
            type="number"
            name="avatar"
            placeholder="Avatar#"
            value={this.state.avatar}
            onChange={this.handleChange}
            required
          />
          {/* Submit */}
          <input
            type="submit"
            value="Create a Millennial"
          />
        </form>
        <img src={avatar} alt='' width="800" height="auto"/>
      </>
    )
  }

}

export default FormContainer;
