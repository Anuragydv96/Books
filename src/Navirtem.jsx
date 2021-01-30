import React from 'react';
import { NavLink } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';


const Navirtem = () =>{
    return(
        <>
          <div className="navbar">
            <div className="logo">
          <NavLink className="main-logo-active" to="/">Library </NavLink>
          </div>

         
    
  <ul>       
            <li> <NavLink className="main-nav-active" to="/">Home </NavLink></li>
            <li> <NavLink  activeClassName="main-nav-active" to="/contact">Contact </NavLink></li>
            <li> <NavLink  activeClassName="main-nav-active" to="/student">Student </NavLink></li>
            <li> <NavLink  activeClassName="main-nav-active" to="/admin">Admin </NavLink></li>
            
          </ul>
          
          
             </div>
  
        </>
    );
}

export default Navirtem;