import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Signup from "./views/Signup";
import Login from "./views/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
