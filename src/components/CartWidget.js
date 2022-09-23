import React from "react";
import { ShoppingCart } from "@mui/icons-material";


const CartWidget = () => {
    return (
        <div>
            <ShoppingCart style={{
                background: '#cc9e41',
                color: '#111',
                padding:"15px",
                borderRadius:"500px",
            }}/>
        </div>
    );
}

export default CartWidget;