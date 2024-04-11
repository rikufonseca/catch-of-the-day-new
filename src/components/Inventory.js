import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import { firebaseApp } from "../base";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    addFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
  }

    authenticate = (provider) => {
      const provider = new firebase.auth[`${provider}authProvider`]();
    }
  render() {
    const isLoggedIn = this.props.isLoggedIn;

    if (!isLoggedIn) {
      return <Login authenticate={this.authenticate} />;
    }
    return (
      <div className="inventory">
        <h2> Inventory </h2>
        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button className="" onClick={this.props.loadSampleFishes}>
          LOAD SAMPLE FISHES
        </button>
      </div>
    );
  }
}

export default Inventory;
