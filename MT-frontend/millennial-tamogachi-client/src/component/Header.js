import React, { Component } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  logout = () => {};

  render() {
    const { activeItem } = this.state;
    let user = this.props.user.username;
    return (
      <Menu size="small">
        <Menu.Item
          name="Millennial Tamogachi"
          active={activeItem === "home"}
          onClick={null}
        />

        <Menu.Menu position="right">
          <Menu.Item onClick={null}>{user}</Menu.Item>
          <Menu.Item>
            <Button onClick={this.props.logout} primary>
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
