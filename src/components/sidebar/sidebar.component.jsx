import React from "react";
import FaSearch from 'react-icons/lib/fa/search'

import classes from "./sidebar.module.css";
import PopularPost from "./popularpost.component";

const Sidebar = (props) => {

    const result = props.sidebarPosts.sort((a,b) => b.count-a.count).map((post) => <PopularPost key={post.id} id = {post.id} title={post.title} date={post.date} />)

    return (
        <div className={classes.Sidebar}>
            <div className={classes.searchArea}>
                <div>
                    <p className={classes.searchTitle}>Search</p></div>
                <div>
                    <FaSearch className={classes.search} />
                </div>
            </div>
            <div className={classes.PopularTitle}>
                <p>Popular Posts</p>
                {result}
            </div>
        </div>
    )
}

export default Sidebar;