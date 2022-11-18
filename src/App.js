import logo from './logo.svg';
import './App.css';

import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import countriesJSON from './countries.json';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {

  const [countries, setCountries] = useState(countriesJSON);

  


  return (
    <div className="App">
      <Navbar></Navbar>

      //* CountriesList Starts here


    </div>
  );
}

export default App;
