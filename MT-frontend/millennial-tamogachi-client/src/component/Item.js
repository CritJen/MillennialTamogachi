import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { useItem, item } = this.props;
    const { name, value, category, img } = item;
    const Image = img;
    return (
      <div onClick={item => useItem(name, value, category)}>
        {name} <br />
        {value}
      </div>
    );
  }
}

export default Item;
