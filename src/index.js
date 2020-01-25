import React from  "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from 'react-router-dom';


import Dashboard from "./components/dashboard/Dashboard";
import Aboutus from "./components/aboutus/Aboutus";
import Contactus from "./components/contactus/Contactus";
import Help from "./components/help/Help";

import "./components/Style.css";



ReactDOM.render(

<HashRouter>

    <Route exact path="/" component={Dashboard}/>
    <Route exact path="/contactus" component={Contactus}/>
    <Route exact path="/aboutus" component={Aboutus}/>
    <Route exact path="/help" component={Help}/>

    
</HashRouter>,
document.getElementById("root"));