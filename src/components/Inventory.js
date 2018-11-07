import React, { Fragment, Component } from "react";
import AddFoodForm from "./AddFoodForm";

class Inventory extends Component {
  render() {
    return (
      <Fragment>
        <div className="inventory">
          <h2>Inventory</h2>
          <AddFoodForm addFood={this.props.addFood} />
          <button onClick={this.props.loadSamples}>Load Sample Food Items</button>
        </div>
      </Fragment>
    );
  }
}

export default Inventory;
