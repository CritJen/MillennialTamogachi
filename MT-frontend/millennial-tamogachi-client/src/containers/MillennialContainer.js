import React from "react";
import MillennialCard from "../component/MillennialCard";

class MillennialContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.hasMillennial.length !== 0 ?
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
