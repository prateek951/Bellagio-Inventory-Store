import React from "react";
import PropTypes from "prop-types";

class EditFoodForm extends React.Component {
  static propTypes = {
    food: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string
    }),
    index: PropTypes.string,
    updateFood: PropTypes.func,
    deleteFood: PropTypes.func
  };

  handleStringChange = event => {
    console.log("inside the handleStringChange");
    console.log(this.props.food);
    console.log(this.props.foods);
    // Clone the food
    const updatedFood = {
      ...this.props.food,
      [event.currentTarget.name]: event.currentTarget.value
    };
    const { index } = this.props;
    this.props.updateFood(index, updatedFood);
  };

  deleteFood = () => {
    this.props.deleteFood(this.props.index);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleStringChange}
          value={this.props.food.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleStringChange}
          value={this.props.food.price}
        />
        <select
          name="status"
          type="text"
          onChange={this.handleStringChange}
          value={this.props.food.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleStringChange}
          value={this.props.food.desc}
        />
        <input type="text" onChange={this.handleStringChange} name="image" />
        <button onClick={this.deleteFood}>Delete Item</button>
      </div>
    );
  }
}

export default EditFoodForm;
