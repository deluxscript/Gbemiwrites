import React from "react";
import {
    Redirect,
    useRouteMatch
  } from "react-router-dom";
import classes from "./Posts.module.css";


const Posts = (props) => {

    let match = useRouteMatch();

    const validId = parseInt(match.params.id)
    console.log(validId)
    if (!validId) {
        return <Redirect to="/404" />
    }

    const fetchedPost = {}
    let postExists = false
    props.posts.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "Title not provided"
            fetchedPost.date = post.title ? post.date : "Date not provided"
            fetchedPost.content = post.content ? post.content : "Content not provided"
            fetchedPost.image = post.imgURL ? post.imgURL : "Image not provided"
            postExists = true
        }
    })
    // if (postExists === false) {
    //     return <Redirect to="/404" />
    // }

    return (
        <div className={classes.SinglePost}>
            <div className={classes.topContent}>
                <h1>{fetchedPost.title}</h1>
                <p>{fetchedPost.date}</p>
            </div>
             <div className={classes.mainContent}>
                 <div>
                    <img src={fetchedPost.image} alt="postImage" />
                 </div>
             </div>
             <p className={classes.postText} dangerouslySetInnerHTML={{__html: fetchedPost.content}}></p>
        </div>
    )
}

export default Posts;