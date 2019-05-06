import React from 'react';
import { Progress } from 'semantic-ui-react';
import ItemContainer from "../containers/ItemContainer";
// Import vectors
import man from '../assets/avatar/hipster-man.svg';
import woman from '../assets/avatar/hipster-woman.svg';


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
      }
    }
  }
  // Starts timer on thirst once loaded
  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000);
  }

  // Stops timer when closing window/reload
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

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
      color = 'green';
    } else if (this.state.thirst > 2 && this.state.thirst <=5 ) {
      color = 'yellow';
    } else {
      color = 'red';
    }
    return color;
  }

  // Pick avatar based on gender of millennial
  pickGender() {
    let imgsrc;
    this.props.millennial.gender === 'Male' ? imgsrc = man : imgsrc = woman;
    return imgsrc;
  }

  render() {
    return (
      <div>
        <h1>{this.props.millennial.name}</h1>
        <img src={this.pickGender()} alt="avatar" />
        <div>
          <h3>Hydration Level</h3>
          <Progress
            value={this.state.thirst}
            total='10'
            progress='ratio'
            color={this.pickColor()}
          />
          <ItemContainer useItem={this.useItem} />
          {/*<button onClick={this.makeThirsty}> Super Thirst!</button>*/}
          <button onClick={() => this.props.deleteMillennial(this.props.millennial)}>
            Delete
          </button>
        </div>
      </div>
    )
  }

}

export default MillennialCard;
