import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import NewPost from "./Components/NewPost";
import Motivation from "./Components/Motivation";
import NavBar from "./Components/Navbar";
import './App.css'

function App() {
  return(
    <div className="App">
      <NavBar />
      <div className="content">
      <Home />
      <Motivation />

    </div>
    </div>

  )
}
export default App