import React from "react";

import classes from "./sidebar.module.css";

const Sidebar = (props) => (
    <div className={classes.Sidebar}>
        <div>
            <p className={classes.searchTitle}>Search</p>
        </div>
        <div className={classes.PopularTitle}>
            <p>Popular Post</p>
        </div>
    </div>
);

export default Sidebar;