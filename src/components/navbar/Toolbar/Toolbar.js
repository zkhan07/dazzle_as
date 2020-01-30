import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/"> 
          <div className="ui mini image">
            <img src="logo2.png" height="150" width="200" />
          </div>
            DAZZLE <sup>AS</sup>
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          

          
        <div class="ui container">
          <div class="ui secondary menu">
          
          <div class="item" >
            <Link to="/" style={{color: "white"}}>HOME</Link>
          </div>

          <div class="ui simple dropdown item">
            <a style={{color: "white"}}>SHOP BY CATEGORY</a>
            <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <Link to="/bulb"> LED BULB'S </Link></div> 
                  <div class="item"> <Link to="/tubelight"> LED TUBE LIGHT'S  </Link></div> 
                  <div class="item"> <Link to="/panellight"> LED PANEL LIGHT'S  </Link></div> 
                  <div class="item"> <Link to="/floodlight"> LED FLOOD LIGHT'S </Link></div>
                </div>
              </div>

              <div class="item">
                <Link to="/aboutus" style={{color: "white"}}>ABOUT US </Link>
              </div>
              <div class="item">
                <Link to="/contactus" style={{color: "white"}}>CONTACT US </Link>
              </div>
              <div class="item">
                <Link to="/help" style={{color: "white"}}> HELP </Link>
              </div>
        
              <div class="right item">
                <i className="grey search icon" ></i> <input type="text" placeholder="Search your Brands" />
              </div>
        
        </div>
      </div>


        </div>
    </nav>
  </header>
);

export default toolbar;
