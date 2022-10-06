import { findByLabelText } from "@testing-library/react";
import React from "react";

function NavBar() {
    
    return(
        <nav className="navbar" style={{display: 'flex',alignItems: 'center', justifyContent: "space-around"  }}>
            <h1>Blossoms</h1>
            <div  style={{display: 'flex',alignItems: 'center', justifyContent: "space-between"  }}>
                <a href="/" style={{paddingRight: '1.5vw'}}>Home</a> 
                <a href="/About" style={{paddingRight: '1.5vw'}}>About</a>
                <a href="/NewPost" style={{paddingRight: '1.5vw'}}>NewPost</a>
                <a href="/Motivation" style={{paddingRight: '1.5vw'}}>Motivation</a>
            </div>

        </nav>
    )
}
export default NavBar