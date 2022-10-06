import React from "react";
import CartWidget from "./CartWidget";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { categoriesList } from "../constants/Constants";

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
                <Link to="/">
                    <img src="logo.png" alt="Logo"/>
                </Link>
            </div>

            <div>
                {
                    categoriesList.map((category) => <Link key={category.id} to={"/category/" + category.id}>
                        <Button style={{color: "#cc9e41"}} variant="text">
                            {category.title}
                        </Button>
                    </Link>)
                }
            </div>

            <div>
                <CartWidget/>
            </div>

        </div>

    );
}

export default NavBar;