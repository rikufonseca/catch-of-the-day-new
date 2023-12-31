import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
// because it is not a component, don't need uppercase
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';


class App extends React.Component {
  // we declare state here to be passed done to the children
  state = {
    fishes: {},
    order: {}
  };
  // readen before everything else, contruct the database on firebase
  componentDidMount() {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }
  // xlean up the database, before rewritting it
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // 1. take a copy of the existing state
    const fishes = {...this.state.fishes};
    // 2. create our new fish to that fishes hash varaible, we use Date.now because we assumed that you enter every miniseconds no more than one fish, like this we will have a unique value, like this the fish will have a unique id or key
    fishes[`fish${Date.now()}`] = fish;
    // 3. add the new fishes object in state, with built in method setState
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    // set the new fishes object on state
    this.setState({fishes: sampleFishes})
  }

  addToOrder = (key) => {
    // take a copy of state
    const order = {...this.state.order};
    // add to order or update the number in order
    order[key] = order[key] + 1 || 1;
    // call stState to update or state object
    this.setState({order})
  }

  render() {
    // Object.keys on l'utilise pour transformer un hash en harray to do the .map
    // we use curly-brackets that told jsx we use javascript, (lesson displaying state in jsx)
    // we use key={key} or index={key} is to pass props
    // except of ligne 58 inside order we can pass everything in state by writting {...this.state}
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key =>
            <Fish
              key={key}
              index={key}
              details={this.state.fishes[key]}
              addToOrder={this.addToOrder} />)}
          </ul>
        </div>
          <Order fishes={this.state.fishes} order={this.state.order}/>
          <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    )
  }
}

export default App;
