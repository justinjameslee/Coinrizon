import React from 'react'
import { Typography } from '@material-ui/core';

export default function Header(props) {
    return (
        <div style={{backgroundColor: "#ECEFF1", height: 200}}>
            <Typography varient="h3">{props.title}</Typography>
        </div>
    )
}
