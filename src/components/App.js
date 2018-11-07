import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: {},
      order: {}
    };
    this.bindEvents();
  }
  bindEvents() {
    this.addFood = this.addFood.bind(this);
  }
  // Utility method to add a food 
  addFood(food) {
    // take a copy of the foods
    const foods = { ...this.state.foods };
    foods[`food${Date.now()}`] = food;
    // set state now
    this.setState({ foods: foods });
  }
  render() {
    // console.log(this.props.match.params.id);
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header restro="Bellagio" tagline="Ashok Vihar, New Delhi" />
        </div>
        <Order />
        <Inventory addFood={this.addFood} />
      </div>
    );
  }
}
export default App;
