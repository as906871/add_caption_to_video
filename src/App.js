import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';
import './App.css';
import CaptionForm from './Components/CaptionForm';
import VideoPlayer from './Components/VideoPlayer';
import CaptionDisplay from './Components/CaptionDisplay';
import StateLogger from './Components/StateLogger';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CaptionForm />
          <VideoPlayer />
          {/* <CaptionDisplay /> */}
          <StateLogger />
        </div>
    </Provider>
  );
}

export default App;