import React from "react";

import classes from "./content.module.css";
import BlogInfo from "./blogInfo.component";
// import NavItem from "./navitem/navitem.component"

const Content = (props) => (
    <div className={classes.content}>
        {
            props.Allposts.map(post => <BlogInfo key={post.id} id={post.id} image={post.imgURL} title={post.title} excerpt={post.teaserText} content={post.content}/>)
        }
    </div>
);

export default Content;