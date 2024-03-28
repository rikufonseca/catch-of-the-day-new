import React from "react";

// state is an object that old data, state can be passed from parent to children only. here our data is in fish, so we will put it in app parent component
class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    // stop the form from submitting
    event.preventDefault();
    // pull all the value with ref (queryselect), in the console $r to find it
    const fish = {
      name: this.nameRef.current.value,
      // store the price in float
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    // we want to add the fish to our state in app
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available"> Fresh! </option>
          <option value="unavailable"> Sold Out! </option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit"> + Add Fish </button>
      </form>
    );
  }
}

export default AddFishForm;
