import React from 'react'
import { FaAsterisk } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import './SideBar.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";


function SideBar(){
    return(
    <div className="main_div">
    <Router>
        <div className="sidediv">
        <NavLink exact to="#" style={{textDecoration:'none'}}>
        <div  className="icon">
       <FaAsterisk/>
       </div>
       </NavLink>
       <NavLink exact to="#" style={{textDecoration:'none'}}>
       <div  className="icon">
        <RiContactsLine/>
      <span>student</span>
    </div>
    </NavLink>
    <NavLink   to="/" style={{textDecoration:'none', backgroundColor:'rgb(183, 183, 255)',borderLeft:'2px solid blue', opacity:'1'}}>
     <div  className="icon">
       <BiBook/>
       <span>lesson-plan</span>
       </div>
       </NavLink>
       <NavLink exact to="#" style={{textDecoration:'none'}}>
       <div  className="icon">
       <AiOutlineSetting/>
       <span>setting</span>
       </div>
       </NavLink>
        </div>
        </Router>
        </div>
    )
}
export default SideBar