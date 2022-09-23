import { Typography } from "@mui/material";
import React from "react";

const ItemListContainer = (props) => {
    return (
        <div style={{
            padding:"60px",
            background: "#eeeeee"
        }}>
            <Typography style={{
                color: '#222222',
                textAlign: 'center',
                fontWeight: 'bold',
                lineHeight: '40px',
                fontSize: '35px',
            }}>
                {props.greeting}
            </Typography>
        </div>
    );
}

export default ItemListContainer;