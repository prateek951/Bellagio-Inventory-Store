import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

import AddFoodForm from "./AddFoodForm";
import EditFoodForm from "./EditFoodForm";

class Inventory extends Component {
  static defaultProps = {
    foods: PropTypes.object,
    loadSamples: PropTypes.func,
    updateFood: PropTypes.func,
    deleteFood: PropTypes.func
  };

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
