import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import NewPost from "./Components/NewPost";
import Motivation from "./Components/Motivation";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'

function App() {
  return(
    <BrowserRouter>
        <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
    <Route path="/Home" exact element={<Home />}/>
    <Route path="/About" exact element={<About />}/>
    <Route path="/NewPost" exact element={<NewPost />}/>
    <Route path="/Motivation" exact element={<Motivation />}/>
        </Routes>
    </div>
    <Footer />
    </div>

    </BrowserRouter>


  )
}
export default App