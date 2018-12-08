import React, { Component } from 'react';
import { FishingContainer } from './containers/FishingListContainer';

class App extends Component {
  render() {
    console.log("FishingContainer", FishingContainer)
    return (
      <FishingContainer></FishingContainer>
    );
  }
}

export default App;
