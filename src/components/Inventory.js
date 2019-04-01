import React, { Fragment, Component } from "react";
import AddFoodForm from "./AddFoodForm";
import EditFoodForm from "./EditFoodForm";
import { throws } from "assert";

class Inventory extends Component {
  render() {
    return (
      <Fragment>
        <div className="inventory">
          <h2>Inventory</h2>
          {Object.keys(this.props.foods).map(
            key =>
              console.log(key) || (
                <EditFoodForm
                  deleteFood={this.props.deleteFood}
                  updateFood={this.props.updateFood}
                  foods={this.props.foods}
                  key={key}
                  index={key}
                  food={this.props.foods[key]}
                />
              )
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
