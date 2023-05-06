import React from 'react';
import './App.css';
import {Products} from "./pages";
import UsersList from './components/users/UsersList.jsx';


function App() {
  return (
    <div className="body">
      <UsersList/>
      <Products/>
    </div>
  );
}

export default App;
 