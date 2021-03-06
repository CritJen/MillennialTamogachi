import React from "react";
import { Progress, Button } from "semantic-ui-react";
import ItemContainer from "../containers/ItemContainer";
// Import vectors
import man from "../assets/avatar/hipster-man.svg";
import woman from "../assets/avatar/hipster-woman.svg";
import tombstone from "../assets/avatar/tombstone.svg";
// Setting Constants
const MILLENNIALS_URL = "http://localhost:4000/api/v1/millennials";

const hideBevs = {
  display: "none"
};

const showBevs = {
  margin: "auto"
};
class MillennialCard extends React.Component {
  constructor(props) {
    super(props);
    // Checks to see if user has millennial
    // Sets state accordingly
    // @JEN: How do you do default state????
    if (this.props.millennial) {
      this.state = {
        thirst: this.props.millennial.thirst
      };
    } else {
      this.state = {
        thirst: null
      };
    }
  }
  // Starts timer on thirst once loaded
  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000);
    window.addEventListener("unload", this.saveState);
  }

  // Stops timer when closing window/reload
  componentWillUnmount() {
    clearInterval(this.intervalId);
    window.addEventListener("unload", this.saveState);
  }

  // Save current state on page reload / window close
  saveState = () => {
    fetch(MILLENNIALS_URL + "/" + this.props.millennial.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  };

  // Decreases thirsty level by 1 until 0
  // then stops timer
  timer = () => {
    this.setState({
      thirst: this.state.thirst - 1
    });
    if (this.state.thirst < 1) {
      clearInterval(this.intervalId);
    }
  };

  // Triggered by item click function
  useItem = (name, value, category) => {
    let currentValue = this.state[category];
    let newValue = currentValue + value;
    newValue < 10
      ? this.setState({ [category]: newValue })
      : this.setState({ [category]: 10 });
  };

  makeThirsty = () => {
    this.setState({ thirst: 1 });
  };

  // Change color based on thirst level
  pickColor() {
    let color;
    if (this.state.thirst > 5) {
      color = "green";
    } else if (this.state.thirst > 2 && this.state.thirst <= 5) {
      color = "yellow";
    } else {
      color = "red";
    }
    return color;
  }

  // Pick avatar based on gender of millennial
  pickGender() {
    let imgsrc;

    if (this.state.thirst < 1) {
      imgsrc = tombstone;
    } else if (this.props.millennial.gender === "Male") {
      imgsrc = man;
    } else {
      imgsrc = woman;
    }
    return imgsrc;
  }

  render() {
    return (
      <div>
        <h1>{this.props.millennial.name}</h1>
        <img src={this.pickGender()} alt="avatar" />
        <div style={this.state.thirst < 1 ? hideBevs : showBevs}>
          <h3>Hydration Level</h3>
          <Progress
            value={this.state.thirst}
            total="10"
            progress="ratio"
            color={this.pickColor()}
          />
          <ItemContainer useItem={this.useItem} />
          {/*<button onClick={this.makeThirsty}> Super Thirst!</button>*/}
        </div>
        <br />
        <Button
          onClick={() => this.props.deleteMillennial(this.props.millennial)}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default MillennialCard;
