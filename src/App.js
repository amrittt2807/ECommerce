import React from "react";
import Directory from "./Components/Directory/Directory";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Routes/Navigation";
import SignIn from "./Routes/Sign-In/Sign-In";
const Shop =()=>{
  return(<div><h1>I am the Shop Page</h1></div>)
}
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index={true} element={<Directory/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        </Route>
        
      </Routes>
      
    </>
  );
};

export default App;
