import React, { Fragment, Component } from "react";
import PropTypes from 'prop-types'

class AddFoodForm extends Component {
  //Create the ref
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {};
    this.createFood = this.createFood.bind(this);
  }

  static propTypes = {
    addFood: PropTypes.func
  };

  createFood(e) {
    // 1.Prevent the form from submission
    e.preventDefault();
    // console.log('creating a food');
    const food = {
      name: this.nameRef.value.value,
      price: +this.priceRef.value.value,
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    //    console.log(food);
    this.props.addFood(food);
    // reset the fields after creating a food

    // best approach to reset the fields after the food has been
    // created
    e.currentTarget.reset();

    // bad approach
    // 2. resetting the fields using the refs
    // this.nameRef.value.value = "";
    // this.priceRef.value.value = "";
    // this.statusRef.value.value = "";
    // this.descRef.value.value = "";
    // this.imageRef.value.value = "";
  }
  render() {
    return (
      <Fragment>
        <form className="fish-edit" onSubmit={this.createFood}>
          <input
            type="text"
            name="name"
            ref={this.nameRef}
            placeholder="Name"
          />
          <input
            type="text"
            name="price"
            ref={this.priceRef}
            placeholder="Price"
          />
          <select name="status" ref={this.statusRef}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name="desc" ref={this.descRef} placeholder="Desc" />
          <input
            type="text"
            ref={this.imageRef}
            name="image"
            placeholder="Image"
          />
          <button type="submit">Add Food</button>
        </form>
      </Fragment>
    );
  }
}

export default AddFoodForm;
