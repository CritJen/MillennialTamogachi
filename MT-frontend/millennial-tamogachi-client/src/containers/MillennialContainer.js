import React from 'react';

class MillennialContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentThirstLevel: this.props.millenial.thirst
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  timer = () => {
    this.setState({
      currentThirstLevel: this.state.currentThirstLevel - 1
    })
    if (this.state.currentThirstLevel < 1) {
      clearInterval(this.intervalId)
    }
  }

  render() {
    const { name, thirst } = this.props.millenial

    return (
      <div>
        <h1>Millennial Container!</h1>
        {name}<br/>
        {thirst}<br/>
        <h1>{this.state.currentThirstLevel}</h1>
      </div>
    )
  }

}

export default MillennialContainer;
