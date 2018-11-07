import React, { Component } from 'react'
import { formatPrice } from '../helpers';
export class Food extends Component {
  render() {
    const { name, price, status, desc, image } = this.props.food;
    const isAvailable = status === 'available' ? true : false;
    return (
        <li className="menu-fish">
            <img src={image} alt={name}/>
            <h3 className="fish-name">{name}
                <span className="price">{formatPrice(price)}</span>
            </h3>
            <p>{desc}</p>
            <button disabled={!isAvailable}>{isAvailable ? 'Add To Cart' : 'Sold Out'}</button>
        </li>
    )
  }
}

export default Food
