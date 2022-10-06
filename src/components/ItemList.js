import { Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/mockApi";
import { categoriesList } from "../constants/Constants";
import Item from "./Item";

const ItemList = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        const category = categoriesList.find((cat) => cat.id === id);
        if (category) {
            setTitle(category.title)
        } else {
            setTitle("Catálogo de Productos")
        }
        getProducts(id).then(
            (newProducts) => setProducts(newProducts)
        ).finally(() => {
            setLoading(false);
        });
    }, [id]);

    return (
        <div>
            <Typography style={{
                color: '#222222',
                textAlign: 'center',
                fontWeight: 'bold',
                lineHeight: '40px',
                fontSize: '35px',
                marginBottom: "40px"
            }}>
                {title}
            </Typography>
            {
                loading && <LinearProgress />
            }
            {
                !loading && <Grid container spacing={2}>
                    {
                        products.map((product) => <Grid key={product.id} item xs={3}>
                            <Item product={product} />
                        </Grid>)
                    }

                </Grid>
            }
            {
                !loading && products.length === 0 && <Typography>No se encontraron productos en esta categoría</Typography>
            }
        </div>
    )
};

export default ItemList;
