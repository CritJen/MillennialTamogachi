import React from "react";
import ItemCard from "../component/Item";
const ITEMS_URL = "http://localhost:4000/api/v1/items";

class ItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
  }

  componentDidMount() {
    this.fetchItems();
  }

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

  render() {
    return (
      <div>
        {this.state.items &&
          this.state.items.map((item, index) => {
            return <ItemCard item={item} key={index} useItem={this.props.useItem} />;
          })}
      </div>
    );
  }
}

export default ItemContainer;
