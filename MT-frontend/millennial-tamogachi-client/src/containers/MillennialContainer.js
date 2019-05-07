import React from "react";
import MillennialCard from "../component/MillennialCard";
import { Button } from "semantic-ui-react";

class MillennialContainer extends React.Component {
  editMillennial = () => {};
  render() {
    const { millennial, hasMillennial, togglemillennialForm } = this.props;
    return (
      <>
        {hasMillennial ? (
          <>
            <MillennialCard millennial={millennial} />
            <Button onClick={() => togglemillennialForm()}>Edit</Button>
          </>
        ) : (
          <>
            {/* <h2>You have no millennials!</h2>
            // {this.noMillennials()} */}
          </>
        )}
      </>
    );
  }
}

MillennialContainer.defaultProps = { millennial: {} };

export default MillennialContainer;
