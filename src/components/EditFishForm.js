import React from "react";

class EditFishForm extends React.Component {
  handleChange = (event) => {
    // console.log(event.currentTarget.value);
    // 1.take a copy of the current fish, with the new value
    // 2.and update the name by the new one
    // hint: computed property name, allows you to put an expression in square brackets [] , that will be computed and used as the property name.
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
    // console.log(updatedFish);
  };

  render() {
    return (
      <form className="fish-edit">
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available"> Fresh! </option>
          <option value="unavailable"> Sold Out! </option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          name="image"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button
          type="submit"
          onClick={() => this.props.deleteFish(this.props.index)}
        >
          {" "}
          Remove Fish{" "}
        </button>
      </form>
    );
  }
}

export default EditFishForm;
