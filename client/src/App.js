import './App.css';
import React from 'react';
import { Router } from '@reach/router';   
import Main from './views/Main';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import CreatePet from './components/CreatePet';
import UpdatePet from './components/UpdatePet';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <PetList path="/pets" />
        <PetDetails path="/pets/:id" />
        <CreatePet path="/pets/new" />
        <UpdatePet path="pets/update/:id" />
      </Router>
      
    </div>
  );
}

export default App;
