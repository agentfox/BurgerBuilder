import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div>Alo</div>
        <div>Alo</div>
        <div>Alo</div>
    </div>
);

export default drawerToggle;