import React from "react";


// import Menu from '../../components/menu/menu.component';
import Content from '../../pages/content/content.component';

import classes from "./appHolder.module.css";

const Home = (props) => (
    <div className={classes.contentSection}>
        {/* <Menu /> */}
        <Content Allposts = {props.posts}/>
    </div>
);

export default Home;