import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Aux from '../../hoc/Aux/Aux.component';
import axios from 'axios';

import classes from './appHolder.module.css';
import Sidebar from '../../components/sidebar/sidebar.component';
import Home from './home.component';
import Posts from '../../components/Posts/Posts.component';
import Menu from '../../components/menu/menu.component';
import NotFound from '../../pages/notfound/notfound.component';

class AppHolder extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`http://gbemiwrites.com/wp-json/api/posts`)
          .then(response => {
              const posts = response.data;
              this.setState({posts});
          })
      }


    
    render() {
        return (
            <Router>
                <Aux>
                    <div className={classes.appholder}>
                        <Menu />
                        <div className={classes.contentsSection}>
                            <Switch>
                                <Route path="/404">
                                    <NotFound />
                                </Route>
                                <Route path="/posts/:id">
                                    <Posts posts = {this.state.posts} />
                                </Route>
                                <Route path="/">
                                    <Home posts = {this.state.posts}/>
                                </Route>
                            </Switch>
                        </div>
                        <div className={classes.sidebarSection}>
                            <Sidebar sidebarPosts = {[...this.state.posts]} />
                        </div>
                    </div>
                </Aux>
            </Router>
        );
    }
}

export default AppHolder;