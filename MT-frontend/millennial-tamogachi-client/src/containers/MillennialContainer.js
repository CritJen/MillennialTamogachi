import React from "react";
import ItemContainer from "./ItemContainer";
import { Button } from "semantic-ui-react";

class MillennialContainer extends React.Component {
  constructor(props) {
    super(props);
    // Checks to see if user has millennial
    // Sets state accordingly
    this.state = {
      thirst: this.props.millennial.thirst
    };
  }

  // Starts timer on thirst once loaded
  componentDidMount() {
    this.intervalId = setInterval(this.timer, 10000);
  }

  // Stops timer when closing window/reload
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  timer = () => {
    this.setState({
      thirst: this.state.thirst - 1
    });
    if (this.state.thirst < 1) {
      clearInterval(this.intervalId);
    }
  };

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

  // Rendered when user does NOT have a millennial
  // noMillennials() {
  //   return (
  // <Button circular animated="fade" onClick={this.togglemillennialForm}>
  //   <Button.Content visible>Add a Millennial</Button.Content>
  //   <Button.Content hidden>Now!</Button.Content>
  // </Button>
  // );
  // }

  render() {
    if (this.props.millennial) {
      const { name, thirst } = this.props.millennial;
    }

    return (
      <>
        {this.props.millennial.name ? (
          <h1>You have a millennial!</h1>
        ) : (
          <>
            {/* <h2>You have no millennials!</h2>
            // {this.noMillennials()} */}
          </>
        )}
      </>
    );
  }
}

MillennialContainer.defaultProps = { millennial: {} };

export default MillennialContainer;
