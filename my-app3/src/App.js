import React from 'react';
import './App.css';

function Television(props) {
  // State for channel and volume
  const [channel, setChannel] = React.useState(1);
  const [volume, setVolume] = React.useState(5);

  // Function to change channel safely (1-10)
  const changeChannel = (direction) => {
    setChannel((currentChannel) => {
      if (direction === 'up' && currentChannel < 10) return currentChannel + 1;
      if (direction === 'down' && currentChannel > 1) return currentChannel - 1;
      return currentChannel;
    });
  };

  // Function to change volume safely (0-10)
  const changeVolume = (direction) => {
    setVolume((currentVolume) => {
      if (direction === 'up' && currentVolume < 10) return currentVolume + 1;
      if (direction === 'down' && currentVolume > 0) return currentVolume - 1;
      return currentVolume;
    });
  };

  return (
    <div className="tv-container">
      {/* Props: brand and model (fixed values) */}
      <h2>{props.brand} TV - Model {props.model}</h2>
      
      {/* State: channel and volume (changeable values) */}
      <div className="tv-screen">
        <p>Channel: {channel}</p>
        <p>Volume: {volume}</p>
      </div>

      {/* Remote Control Buttons */}
      <div className="tv-controls">
        <div className="control-group">
          <h3>Channel Control</h3>
          <button onClick={() => changeChannel('up')}>Channel Up</button>
          <button onClick={() => changeChannel('down')}>Channel Down</button>
        </div>

        <div className="control-group">
          <h3>Volume Control</h3>
          <button onClick={() => changeVolume('up')}>Volume Up</button>
          <button onClick={() => changeVolume('down')}>Volume Down</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Television brand="Samsung" model="X1000" />
      <Television brand="LG" model="OLED55" />
    </div>
  );
}

export default App;
