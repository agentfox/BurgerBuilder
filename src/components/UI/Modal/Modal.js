import React from 'react';
import classes from './Modal.css'
    const modal =(props) => (
        <div 
        className={classes.Modal}
        style={{
            display : props.show? 'block' : 'none'
        }}
        >   <div className={classes.container}>
                <div>{props.children}</div>
                <div onClick={props.hide} className={classes.close}>Close</div>
            </div>
        </div>
    )

    
export default modal;
