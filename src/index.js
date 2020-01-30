import React from  "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from 'react-router-dom';


import Dashboard from "./components/dashboard/Dashboard";
import Aboutus from "./components/aboutus/Aboutus";
import Contactus from "./components/contactus/Contactus";
import Help from "./components/help/Help";

import "./components/Style.css";
import Bulb from "./components/category/Bulb";
import Tubelight from "./components/category/Tubelight";
import Panellight from "./components/category/Panellight";
import Floodlight from "./components/category/Floodlight";



ReactDOM.render(

<HashRouter>

    <Route exact path="/" component={Dashboard}/>

    <Route exact path="/bulb" component={Bulb}/>
    <Route exact path="/tubelight" component={Tubelight}/>
    <Route exact path="/panellight" component={Panellight}/>
    <Route exact path="/floodlight" component={Floodlight}/>

    <Route exact path="/contactus" component={Contactus}/>
    <Route exact path="/aboutus" component={Aboutus}/>
    <Route exact path="/help" component={Help}/>

    
</HashRouter>,
document.getElementById("root"));