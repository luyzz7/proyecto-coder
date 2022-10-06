import { Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/mockApi";
import ItemCount from "./ItemCount";

const ItemDetail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);

    const onAdd = (count) => console.log("Agregados " + count + " stock al carrito");

    useEffect(() => {
        setLoading(true);
        getProduct(id).then(
            (newProduct) => setProduct(newProduct)
        ).finally(() => {
            setLoading(false);
        });
    }, [id]);

    return (
        <div>
           
            {
                loading && <LinearProgress />
            }
            {
                !loading && <div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
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
                                        src={product.img}
                                        alt={product.title}
                                        style={{
                                            maxHeight: "400px"
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography
                                        style={{
                                            color: '#000000',
                                            lineHeight: '38px',
                                            fontSize: '34px',
                                            fontWeight: 'bold',
                                            textAlign: "center",
                                        }}
                                    >
                                        {product.title}
                                    </Typography>
                                    <Typography
                                        style={{
                                            color: '#27afb4',
                                            lineHeight: '34px',
                                            fontSize: '30px',
                                            fontWeight: 'bold',
                                            textAlign: "center",
                                            marginTop: "15px"
                                        }}
                                    >
                                        $ {product.price}
                                    </Typography>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={6}>
                            <div style={{
                                padding: "30px",
                                borderRadius: "12px",
                                background: "#fff",
                                border: '1px solid rgba(29, 50, 153, 0.1)',
                                boxShadow: 'rgb(29 50 153 / 2%) 0px 100px 49px, rgb(29 50 153 / 2%) 0px 64.8148px 28.6968px, rgb(29 50 153 / 1%) 0px 38.5185px 15.6074px, rgb(29 50 153 / 1%) 0px 20px 7.9625px, rgb(29 50 153 / 1%) 0px 8.14815px 3.99259px, rgb(29 50 153 / 0%) 0px 1.85185px 1.92824px',
                            }}>
                                 <Typography
                                    style={{
                                        marginBottom: "60px"
                                    }}
                                >
                                    {product.description}
                                </Typography>
                                <ItemCount
                                    stock={product.stock}
                                    onAdd={onAdd}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            }
        </div>
    )
};

export default ItemDetail;
