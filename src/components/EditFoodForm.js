import React from "react";

class EditFoodForm extends React.Component {
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" value={this.props.food.name} />
        <input type="text" name="price" value={this.props.food.price} />
        <select name="status" type="text" value={this.props.food.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc" value={this.props.food.desc} />
        <input type="text" name="image" />
      </div>
    );
  }
}

export default EditFoodForm;
