import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
class App extends React.Component {
  render() {
    // console.log(this.props.match.params.id);
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header restro="Bellagio" tagline="Ashok Vihar, New Delhi" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}
export default App;
