import React from "react";

// import {Link } from "react-router-dom";

import classes from "./content.module.css";

const BlogInfo = (props) => (
    <div className={classes.BlogInfo}>
        <h2>{props.title}</h2>
        <p>{props.excerpt}</p>
        {/* <Link to={"/fullcontent/" + props.id}>
          <button className="btn">Read More</button>
        </Link> */}
        <div className={classes.extras}>
            <span className={classes.left}>March 12, 2019</span>
            <span className={classes.right}>red</span>
        </div>
    </div>
);

export default BlogInfo;