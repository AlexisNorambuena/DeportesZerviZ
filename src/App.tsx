import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from './components/page';
import CheckOne from './components/teamone';
import CheckTwo from './components/teamtwo';
import Acciones from './components/acciones';
import Removed from './components/removed';
import Revive from './components/revive';
//import './Data/futbol.json'



function App() {
  return (<div className="App">
    <body className="App-header">
      <div>
        <div className='sizeselect'>
          < BasicExample ></BasicExample>
        </div>
        <div className='team'>
          <div className='check'>
            <h1>Team One</h1>
            <CheckOne />
          </div>
          <div className='btn'>
            <Acciones />

          </div>
          <div className='check2'>
            <h1>Team Two</h1>
            <CheckTwo />
          </div>
        </div>
      </div>
      <hr />
      <h1>Removed Players</h1>
      <div className='check3'>
        <Removed/>
      </div>
      <div>
        <Revive/>
      </div>

    </body>
  </div>
  );
}

export default App;
