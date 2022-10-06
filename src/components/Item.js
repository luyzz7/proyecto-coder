import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <div style={{
            padding: "15px",
            borderRadius: "12px",
            background: "#fff",
            border: '1px solid rgba(29, 50, 153, 0.1)',
            boxShadow: 'rgb(29 50 153 / 2%) 0px 100px 49px, rgb(29 50 153 / 2%) 0px 64.8148px 28.6968px, rgb(29 50 153 / 1%) 0px 38.5185px 15.6074px, rgb(29 50 153 / 1%) 0px 20px 7.9625px, rgb(29 50 153 / 1%) 0px 8.14815px 3.99259px, rgb(29 50 153 / 0%) 0px 1.85185px 1.92824px',
        }}>
            <div style={{
                textAlign: "center"
            }}>
                <img
                    src={props.product.img}
                    alt={props.product.title}
                    style={{
                        maxHeight: "210px"
                    }}
                />
            </div>
            <div>
                <Typography
                    style={{
                        color: '#000000',
                        lineHeight: '20px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        textAlign: "center",
                    }}
                >
                    {props.product.title}
                </Typography>
                <Typography
                    style={{
                        color: '#27afb4',
                        lineHeight: '20px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        textAlign: "center"
                    }}
                >
                    $ {props.product.price}
                </Typography>
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "15px"
                    }}
                >
                    <Link style={{
                        textDecoration: "none"
                    }} to={"/item/" + props.product.id}>
                        <Button variant="outlined">
                            Ver detalle
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Item;
