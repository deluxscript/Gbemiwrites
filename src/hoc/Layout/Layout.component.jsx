import React, { Component } from 'react';

import Menu from '../../components/menu/menu.component';
import Aux from '../Aux/Aux.component';

class Layout extends Component{
   
    render() {
        return(
            <Aux>
                <Menu />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;