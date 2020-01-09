import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux.component';
import axios from 'axios';

import classes from './appHolder.module.css';

class postContainer extends Component {

    componentDidMount() {
        axios.get(`http://gbemiwrites.com/wp-json/api/posts/` + this.props.match.params.id)
          .then(response => {
              const posts = response.data;
              this.setState({posts});
          })
      }

    render() {
        return (
            <Aux>
                <div className={classes.appholder}>
                    <Content Allposts = {this.state.posts}/>
                    <Socials />
                </div>
            </Aux>
        );
    }
}

export default postContainer;