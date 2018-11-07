import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Food from "./Food";
import sampleFoods from "./sample-foods";

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
    this.loadSamples = this.loadSamples.bind(this);
    this.doOrder = this.doOrder.bind(this);
  }
  // Utility method to add a food
  addFood(food) {
    // take a copy of the foods
    const foods = { ...this.state.foods };
    foods[`food${Date.now()}`] = food;
    // set state now
    this.setState({ foods: foods });
  }

  //Utility method to load the food items
  loadSamples() {
    // console.log('inside the load samples');
    this.setState({ foods: sampleFoods });
  }

  // Utility method to book an order
  doOrder(key) {
    console.log(`Here is the order`);
    console.log(key);
    console.log(`wiring of food and app done`);
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order: order });
  }


  render() {
    // console.log(this.props.match.params.id);
    const { foods, order } = this.state;
    return <div className="catch-of-the-day">
        <div className="menu">
          <Header restro="Bellagio" tagline="Ashok Vihar, New Delhi" />
          <ul className="fishes">
            {Object.keys(foods).map(key => (
              <Food key={key} index={key} doOrder={this.doOrder} food={foods[key]} />
            ))}
          </ul>
        </div>
        <Order foods={foods} order={order} />
        <Inventory loadSamples={this.loadSamples} addFood={this.addFood} />
      </div>;
  }
}
export default App;
