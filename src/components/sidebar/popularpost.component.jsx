import React from "react";

import {Link } from "react-router-dom";

import classes from "./sidebar.module.css";

const PopularPost = (props) => {
    return (
        <div>
            <div className={classes.popular}>
                <Link to={`/posts/${props.id}`}><p className={classes.popularSubTitle}>{props.title}</p></Link>
                <p className={classes.popularSubDate}>{props.date}</p>
            </div>
        </div>
    )
}

export default PopularPost;