import './App.css'
import SideBar from './Components/LessonPlan/SideBar'
import Lesson from './Components/LessonPlan/Lesson'
import Routed from './Components/Routed/Routed'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <SideBar/>
     
    <Routed/>
    </div>
  );
}

export default App;
