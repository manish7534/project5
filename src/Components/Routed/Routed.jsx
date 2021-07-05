import React from 'react'
import Lesson from '../LessonPlan/Lesson'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
function Routed(){
    return(
        
       <Router>
       <Switch>
          <Route  exact path="/" exact component={Lesson}/>
          </Switch>
     
          </Router>
    )
}
export default Routed