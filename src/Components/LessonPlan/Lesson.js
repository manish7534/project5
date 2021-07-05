import React from 'react'
import { IoMdArrowDropleft } from "react-icons/io";
import './Lesson.css'
function Lesson(){
    return(
        <div className="main_container">
        <div className="blankdiv"></div>
        <p><IoMdArrowDropleft/> Video</p>
        
        <div className="inner_div">
        <input placeholder="insert URL here" type="url" className="inserturl"/>
        <p className="or">or</p>
        <input type="text" placeholder="upload" className="upload" />
        </div>
        </div>
    )
}
export default Lesson