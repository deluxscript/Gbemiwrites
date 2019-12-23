import React from 'react';

import NavItems from "../navitems/navitems.component"
import Logo from '../logo/logo.component';

import classes from './menu.module.css';

const Menu = (props) => (
    <header className={classes.header}>
        <div>
           <Logo />
        </div>
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default Menu;