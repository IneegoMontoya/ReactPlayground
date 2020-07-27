import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({lakes}) => (
  <ul>
      {lakes.map(lake => //When using a list, must give a key value to each item in the list so that React can know what was what. I can display without the key, but will give a warning to the console. 
          <li key={lake.id}>
            {lake.name} | Trailhead: {lake.trailhead}
          </li>
)}        
  </ul>
);

export default App;
