import React from "react";
import { Navigate, Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<>Hello World</>} path="/ui/home" />
        <Route element={<Navigate replace to="ui/home" />} index />
      </Routes>
    </>
  );
};

export default App;
