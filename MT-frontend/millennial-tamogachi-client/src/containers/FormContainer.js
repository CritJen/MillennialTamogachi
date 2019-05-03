import React from 'react';
import man from '../assets/avatar/hipster-man.svg';
import woman from '../assets/avatar/hipster-woman.svg';
import { Form, Button } from 'semantic-ui-react';
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
        <Form onSubmit={this.postMillennial} className="ui form">
          {/* Name */}
          <Form.Field>
            <input
              type="text"
              className="ui input"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </Form.Field>
          {/* Avatar */}
          <Form.Field>
            <input
              type="number"
              name="avatar"
              placeholder="Avatar#"
              value={this.state.avatar}
              onChange={this.handleChange}
              required
            />
          </Form.Field>
          {/* Submit */}
          <Button type="submit">
            Create a Millennial
          </Button>
        </Form>
        <img src={man} alt="man" />
        <img src={woman} alt="woman" />
      </>
    )
  }

}

export default FormContainer;
