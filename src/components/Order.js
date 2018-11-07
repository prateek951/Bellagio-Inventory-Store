import React, { Fragment } from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const food = this.props.foods[key];
    const count = this.props.order[key];
    const isAvailable = food.status === "available";
    if (!isAvailable) {
      return (
        <li key={key}>Sorry {food ? food.name : "food item"} is no longer available</li>
      );
    } else {
      return (
        <li key={key}>
          {count} lbs {food.name}
          {formatPrice(count * food.price)}
        </li>
      );
    }
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const food = this.props.foods[key];
      const numberOfItems = this.props.order[key];
      const isAvailable = food && food.status === "available" ? true : false;
      if (isAvailable) {
        return prevTotal + numberOfItems * food.price;
      }
      return prevTotal;
    }, 0);
    return (
      <Fragment>
        <div className="order-wrap">
          <h2>Order</h2>
          <ul className="order">{orderIds.map(this.renderOrder)}</ul>
          <div className="total">
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Order;
