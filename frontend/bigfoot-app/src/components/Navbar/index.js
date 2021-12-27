import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown } from "react-bootstrap";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <img src="photos/bigfoot-tracker-logo.svg" height="35px"/>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/signup" activeStyle>
                    Sign Up
                </NavLink>
                <NavLink to="/login" activeStyle>
                    Login
                </NavLink>
                
                    <DropdownButton align="end" title="View Sightings" id="dropdown-menu-align-end">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>               
                
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;