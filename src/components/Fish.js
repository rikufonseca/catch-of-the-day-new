import React from "react";
import { formatPrice } from "../helper";

class Fish extends React.Component {
  render() {
    // let use jsx destructuring to set multiple variable in a single shot
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {" "}
          {name}
          <span className="price"> {formatPrice(price)} </span>
        </h3>
        <p> {desc} </p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add To Order" : "Sold out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
