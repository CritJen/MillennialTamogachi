import React, { Component } from "react";
import { Label, Image } from 'semantic-ui-react';
// Import vectors
import cocoWater from '../assets/items/thirst/coconutwater.jpg';
import coffee from '../assets/items/thirst/coffee.svg';
import lacroix from '../assets/items/thirst/lacroix.svg';

const DRINKS = {
  "La Croix": lacroix,
  "Coconut Water": cocoWater,
  "Soy Milk Latte": coffee
}

class ItemCard extends Component {

  constructor(props) {
    super(props);
  }

  getImg(name) {
    return DRINKS[name]
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
          <Image avatar src={this.getImg(name)} alt="drink" />
           {name} :  {value}
        </Label>
      </>
    );

  }

}

export default ItemCard;
