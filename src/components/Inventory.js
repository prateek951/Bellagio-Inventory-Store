import React, { Fragment, Component } from "react";
import AddFoodForm from "./AddFoodForm";
import EditFoodForm from "./EditFoodForm";

class Inventory extends Component {
  render() {
    return (
      <Fragment>
        <div className="inventory">
          <h2>Inventory</h2>
          {Object.keys(this.props.foods).map(
            key =>
              console.log(key) || <EditFoodForm food={this.props.foods[key]} />
          )}
          <AddFoodForm addFood={this.props.addFood} />
          <button onClick={this.props.loadSamples}>
            Load Sample Food Items
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Inventory;
