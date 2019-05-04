import React, { Component } from "react";
import { Label, Image } from 'semantic-ui-react';
// Import vectors
import cocoWater from '../assets/items/thirst/coconutwater.jpg';

class ItemCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { useItem, item } = this.props;
    const { name, value, category, img } = item;

    return (
      <>
        <Label
          as='a'
          onClick={item => useItem(name, value, category)}
          size='large'
        >
          <Image avatar src={cocoWater} alt="drink" />
           {name} :  {value}
        </Label>
      </>
    );

  }

}

export default ItemCard;
