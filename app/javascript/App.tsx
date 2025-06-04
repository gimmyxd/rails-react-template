import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "./views/home";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/ui/home" />
        <Route element={<Navigate replace to="ui/home" />} index />
      </Routes>
    </>
  );
};

export default App;
