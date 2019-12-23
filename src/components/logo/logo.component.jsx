import React from "react";

import logoImage from "./../../assets/images/writing.svg";

import classes from "./logo.module.css";
const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImage} alt="brand_img" width="60"/>
    </div>
);

export default Logo;