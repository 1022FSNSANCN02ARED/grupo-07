import React, { useEffect } from "react";
import "./App.css";
import { Products, Users } from "./pages";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";

import {
  //redireccionamiento
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  //Link
} from "react-router-dom";

function App() {
  const url = useLocation();
  useEffect(() => {
  }, [url]);
  return (
    <div className="App">
      <div className="page">
        <Menu />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Products" element={<Products />} />
            <Route path="Users" element={<Users />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
