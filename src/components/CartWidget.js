import React, { useContext } from "react";
import { ShoppingCart } from "@mui/icons-material";
import { cartContext } from "../context/cartContext";
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { getTotalProducts } = useContext(cartContext);
    return (
        <div>
            <Badge badgeContent={getTotalProducts()} color="primary">
                <Link to="/cart" style={{textDecoration: "none"}}>
                    <IconButton style={{
                        background: '#cc9e41',
                        color: '#111',
                        padding:"15px",
                        borderRadius:"500px",
                    }}>
                        <ShoppingCart />
                    </IconButton>
                </Link>
            </Badge>
        </div>
    );
}

export default CartWidget;