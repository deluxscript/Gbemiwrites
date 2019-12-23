import React from "react";

import classes from "./navitems.module.css";
import NavItem from "./navitem/navitem.component"

const NavItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/" active>Home</NavItem>
        <NavItem link="/contact">Contact</NavItem>
        <NavItem link="/about">About</NavItem>
    </ul>
);

export default NavItems;