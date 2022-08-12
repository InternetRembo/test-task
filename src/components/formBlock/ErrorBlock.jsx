import React from 'react';
import {Overlay} from "react-bootstrap";

const ErrorBlock = ({target , error}) => (
    <Overlay target={target.current} show={error} placement="top-start">
        {({placement, ...props}) => (
            <div
                {...props}
                style={{
                    height:'24px',
                    display:"flex",
                    alignItems:"center",
                    fontSize:'14px',
                    margin:'0px 0px 5px 5px',
                    position: 'absolute',
                    backgroundColor: 'white',
                    padding: '2px 10px',
                    color: 'red',
                    boxShadow:'2px 2px 2px 2px grey',
                    borderRadius: 3,
                    ...props.style,
                }}
            >
                {error}
            </div>
        )}
    </Overlay>
)

export default ErrorBlock;