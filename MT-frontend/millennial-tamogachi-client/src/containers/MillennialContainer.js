import React from "react";
import MillennialCard from "../component/MillennialCard";
import { Button } from 'semantic-ui-react';

class MillennialContainer extends React.Component {
  constructor(props) {
    super(props);
  }

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

    return (
      <>
        {this.props.millennial ?
          <>
            <MillennialCard
              millennial={this.props.millennial}
            />
          </>
        :
          <>
            {/* <h2>You have no millennials!</h2>
            // {this.noMillennials()} */}
          </>
        }
      </>
    );
  }
}

MillennialContainer.defaultProps = { millennial: {} };

export default MillennialContainer;
