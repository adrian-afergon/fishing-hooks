import React, { Component } from 'react';
import { FishingContainer } from './components/FishingList/FishingListContainer';

class App extends Component {
  render() {
    console.log("FishingContainer", FishingContainer)
    return (
      <div>
        <FishingContainer></FishingContainer>
      </div>
    );
  }
}

export default App;
