import React from "react";

import classes from "./navitem.module.css";

const NavItem = (props) => (
    <li className={classes.NavItem}>
        <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default NavItem;