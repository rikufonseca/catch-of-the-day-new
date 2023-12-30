import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory'

class App extends React.Component {
  // we declare state here to be passed done to the children
  state = {
    fishes: {}
  };
  addFish = fish => {
    // 1. take a copy of the existing state
    const fishes = {...this.state.fishes};
    // 2. add our new fish to that fishes variable, we use Date.now because we assumed that you enter every miniseconds no more than one fish, like this we will have a unique value, like this the fish will have a unique id or key
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object in state, with built in method setState
    this.setState({ fishes });
  };
  render() {
    // we call addFish where we need it then call it in inventory
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
          <Order/>
          <Inventory addFish={this.addFish}/>
      </div>
    )
  }
}

export default App;
