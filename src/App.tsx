import React from 'react';
import './App.css';
import Volcano from './components/Volcano/Volcano';
import {store} from './store/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className="map">
          <Volcano />
      </div>
   
    </div>
    </Provider>
  );
}



export default App;
