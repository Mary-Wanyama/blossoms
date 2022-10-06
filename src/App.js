import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import NewPost from "./Components/NewPost";
import Motivation from "./Components/Motivation";
import NavBar from "./Components/Navbar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'

function App() {
  return(
    <BrowserRouter>
        <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/NewPost" element={<NewPost />}/>
    <Route path="/Motivation" element={<Motivation />}/>
        </Routes>
    </div>
    </div>

    </BrowserRouter>


  )
}
export default App