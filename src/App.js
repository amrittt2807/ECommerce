import React from "react";
import Directory from "./Components/Directory/Directory";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Routes/Navigation";
import Authenticaiton from "./Routes/Authenticaiton/Authentication";
const Shop = () => {
  return (
    <div>
      <h1>I am the Shop Page</h1>
    </div>
  );
};
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Directory />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authenticaiton />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
