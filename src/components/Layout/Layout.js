import React from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }
    render () {
        return (
            <Aux>
                <div>ToolBar, SideDrawer, Backdrop</div>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer  open={this.state.showSideDrawer}
                             hide={this.sideDrawerClosedHandler}
                              />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout;