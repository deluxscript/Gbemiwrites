import React from "react";

import {Link } from "react-router-dom";

import classes from "./content.module.css";

const BlogInfo = (props) => {

    return(
        <div className={classes.BlogInfo}>
            <div className={classes.postGrid}>
                <div className={classes.textGrid}>
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.date}</p>
                        <Link to={`posts/${props.id}`}><button>Read More</button></Link>
                    </div>
                </div>
                <div className={classes.imgGrid} style={{ backgroundImage: "url("+props.image+")" }}></div>
            </div>
        </div>
    )
}

export default BlogInfo;