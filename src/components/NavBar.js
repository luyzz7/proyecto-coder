import React from "react";
import CartWidget from "./CartWidget";
import { Button } from "@mui/material";

const NavBar = () => {
    return (
        <div style={{
            padding: "15px 60px",
            background: "#111",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <div>
                <img src="logo.png" alt="Logo"/>
            </div>

            <div>
                <Button style={{color: "#cc9e41"}} variant="text">Suplementos</Button>
                <Button style={{color: "#cc9e41"}} variant="text">Accesorios</Button>
                <Button style={{color: "#cc9e41"}} variant="text">Otros</Button>
            </div>

            <div>|
                <CartWidget/>
            </div>

        </div>

    );
}

export default NavBar;