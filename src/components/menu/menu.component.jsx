import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../logo/logo.component';

import classes from './menu.module.css';

const Menu = (props) => (
    <header className={classes.header}>
        <div className={classes.headerFlex}>
            <div>
                <Link to="/"><Logo /></Link>
            </div>
            {/* <div>
                <Link to="/posts">Posts</Link>
            </div> */}
        </div>
    </header>
);

export default Menu;