import React from "react";
import MillennialCard from "../component/MillennialCard";
import { Button } from "semantic-ui-react";

class MillennialContainer extends React.Component {

  editMillennial = () => {};

  constructor(props) {
    super(props);
  }

  render() {
    const { millennial, hasMillennial, togglemillennialForm } = this.props;
    return (
      <>
        {hasMillennial ? (
          <>
            <Button onClick={() => togglemillennialForm()}>Edit</Button>
            {this.props.millennials.map((mill, index) => {
              return <MillennialCard
                        key={index}
                        millennial={mill}
                        deleteMillennial={this.props.deleteMillennial}
              />
            })}
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
