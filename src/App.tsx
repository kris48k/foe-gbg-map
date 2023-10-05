import React from 'react';
import logo from './logo.svg';
import './App.css';
import Volcano from './components/Volcano/Volcano';

function App() {
  return (
    <div className="App">
      <div className="map">
          <Volcano />
      </div>

    </div>
  );
}

function OldApp() {
  return (
    <div className="App">
      <div className="map">
          <div className='circle-4 circle'>
            <div className='circle-3 circle'>
              <div className='circle-2 circle'>
                <div className='A2S tile ring2'></div>
                <div className='A2T tile ring2'></div>
                <div className='B2S tile ring2'></div>
                <div className='B2T tile ring2'></div>
                <div className='C2S tile ring2'></div>
                <div className='C2T tile ring2'></div>
                <div className='D2S tile ring2'></div>
                <div className='C2T tile ring2'></div>
                <div className='circle-1 circle'>
                  <div className="A1 tile ring1"></div>
                  <div className="B1 tile ring1"></div>
                  <div className="C1 tile ring1"></div>
                  <div className="D1 tile ring1"></div>
                </div>
              </div>

            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
