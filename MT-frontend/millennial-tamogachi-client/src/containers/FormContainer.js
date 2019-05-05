import React from "react";
import man from "../assets/avatar/hipster-man.svg";
import woman from "../assets/avatar/hipster-woman.svg";
import { Form, Button, Modal, Input, Checkbox } from "semantic-ui-react";
import styles from "../styles/FormContainer.module.css";
// Setting Constants
const MILLENNIALS_URL = "http://localhost:4000/api/v1/millennials";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      gender: "Male"
    };
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleRadioChange = ev => {
    this.setState({ gender: ev.target.textContent });
  };

  // Helper method used in the postMillennial method
  makeFetchBody() {
    let body = this.state;
    let user = { user: this.props.currentUser };
    let thirst = { thirst: 10 };
    let finalBody = { ...body, ...user, ...thirst };
    return finalBody;
  }

  // Triggered by submit button
  postMillennial = ev => {
    ev.preventDefault();
    this.props.closeModal();
    // Posting new millennial
    fetch(MILLENNIALS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.makeFetchBody())
    })
      .then(resp => resp.json())
      .then(data => {
        // Resetting state, so form is reset
        this.setState({
          name: "",
          avatar: ""
        });
        console.log(data);
        this.props.handleNewMillennial(data);
      });
  };

  render() {
    return (
      <Modal
        open
        closeOnEscape
        closeOnDimmerClick
        closeIcon
        onClose={this.props.closeModal}
        className={styles.form}
      >
        <Modal.Header className={styles.brown}>Form</Modal.Header>
        <Modal.Content className={styles.blue}>
          <Form>
            <Form.Input
              label="Name"
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            {/* Gender */}
            <Form.Group inline>
              <label>Present as:</label>
              <Form.Radio
                label="Male"
                value="male"
                checked={this.state.gender === "Male"}
                onChange={this.handleRadioChange}
              />
              <Form.Radio
                label="Female"
                value="female"
                checked={this.state.gender === "Female"}
                onChange={this.handleRadioChange}
              />
            </Form.Group>
            {/* Submit */}
            <Button color="teal" type="submit" onClick={this.postMillennial}>
              Create Your Millennial
            </Button>
          </Form>
          {this.state.gender === "Male" ? (
            <img src={man} alt="man" />
          ) : (
            <img src={woman} alt="woman" />
          )}
        </Modal.Content>
      </Modal>
    );
  }
}

export default FormContainer;
