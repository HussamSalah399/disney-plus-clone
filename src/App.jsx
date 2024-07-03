import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import LayOut from "./components/LayOut";
import Detail from "./components/Detail";

function App() {
  return (
    <Router  basename="/disney-plus-clone">
      <Routes>
        <Route path="" element={<LayOut />}>
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
