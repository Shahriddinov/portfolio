import React from 'react';
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Michael</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+998 93 463 29 09</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>shahriddinovmurod195@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                   <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                     <span className="line1"></span>
                     <span className="line2"></span>
                     <span className="line3"></span>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;