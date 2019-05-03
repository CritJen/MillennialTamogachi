import React, { Component } from "react";
import { FaMugHot, FaCookie } from "react-icons/fa";

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
        <Image />
        <FaMugHot />
      </div>
    );
  }
}

export default Item;
