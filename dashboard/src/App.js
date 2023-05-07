import React from "react";
import "./App.css";
import { Products,Users } from "./pages";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";

import {
  //redireccionamiento
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="Home"  />
            <Route path="Products" element={<Products />} />
            <Route path="Users" element={<Users />} /> 
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
