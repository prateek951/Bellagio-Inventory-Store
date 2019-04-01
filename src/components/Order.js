import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  static propTypes = {
    foods: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func
  };

  renderOrder = key => {
    const food = this.props.foods[key];
    const count = this.props.order[key];
    const isAvailable = food && food.status === "available";
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 5000, exit: 5000 }
    };

    if (!food) {
      return null;
    }
    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {food ? food.name : "food item"} is no longer available
          </li>
        </CSSTransition>
      );
    } else {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 5000, exit: 5000 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {food.name}
            {formatPrice(count * food.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </li>
        </CSSTransition>
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
          <TransitionGroup component="ul" className="order">
            {orderIds.map(this.renderOrder)}
          </TransitionGroup>
          <div className="total">
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Order;
