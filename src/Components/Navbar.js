import { findByLabelText } from "@testing-library/react";
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    
    return(
        <nav className="navbar" style={{display: 'flex',alignItems: 'center', justifyContent: "space-around"}}>
            <h1>Blossoms</h1>
            <div  style={{display: 'flex',alignItems: 'center', justifyContent: "space-between" }}>
                <NavLink to="/Home" style={{marginRight: '1.5vw'}} className='links'>Home</NavLink> 
                <NavLink to="/About" style={{marginRight: '1.5vw'}} className='links'>About</NavLink>
                <NavLink to="/NewPost" style={{marginRight: '1.5vw'}} className='links'>NewPost</NavLink>
                <NavLink to="/Motivation" style={{marginRight: '1.5vw'}} className='links'>Motivation</NavLink>
            </div>

        </nav>
    )
}
export default NavBar