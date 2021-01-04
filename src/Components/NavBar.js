import React from "react"
import TagLine from "./TagLine"

function NavBar(){
    return <header>
     <div className="navBar">
        <img className="navImg" src="./images/logo.jpg"/>
        <ul className="navList">
            <li className="navItem">HOME</li>
            <li className="navItem">MENU</li>
            <li className="navItem">LOCATION</li>
            <li className="navItem">SIGN UP</li>
        </ul>
        <TagLine/>
    </div>
    </header>
}

export default NavBar