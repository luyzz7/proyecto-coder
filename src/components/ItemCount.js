import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < props.stock) {
            setCount(count + 1);
        }
    }

    const handleSubstract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div
            style={{
                display: "flex",
            }}
        >
            <Button
                style={{
                    borderRadius: "0",
                }}
                variant="outlined" onClick={handleSubstract}>-</Button>
            <Typography
                style={{
                    lineHeight: "1.75",
                    padding: "5px 15px",
                    borderTop: "1px solid rgba(25, 118, 210, 0.5)",
                    borderBottom: "1px solid rgba(25, 118, 210, 0.5)",

                }}
            >{count}</Typography>
            <Button
                style={{
                    borderRadius: "0"
                }}
                variant="outlined" onClick={handleAdd}>+</Button>
            <Button
                style={{
                    marginLeft: "15px",
                    backgroundColor: "#cc9e41",


                }}
                variant="contained" onClick={() => props.onAdd(count)} disabled={props.stock === 0}
            >
                Agregar al carrito
            </Button>
        </div>
    );
}

export default ItemCount;