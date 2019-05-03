import React from "react";
import Item from "../component/Item";
const ITEMS_URL = "http://localhost:4000/api/v1/items";

class MillennialContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thirst: this.props.millenial.thirst,
      items: null
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 10000);
    this.fetchItems();
  }

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

  fetchItems() {
    fetch(ITEMS_URL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          items: data
        });
      });
  }

  makeThirsty = () => {
    this.setState({ thirst: 1 });
  };

  render() {
    const { name, thirst } = this.props.millenial;

    return (
      <div>
        <h1>Millennial Container!</h1>
        {name}
        <br />
        {thirst}
        <br />
        <h1>{this.state.thirst}</h1>
        {this.state.items &&
          this.state.items.map(item => {
            return <Item item={item} useItem={this.useItem} />;
          })}
        <button onClick={this.makeThirsty}> Super Thirst!</button>
      </div>
    );
  }
}

export default MillennialContainer;
