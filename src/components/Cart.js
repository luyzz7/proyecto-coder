import React, { useContext, useState } from "react";
import { Delete } from "@mui/icons-material";
import { Alert, Button, Dialog, DialogContent, Grid, IconButton, LinearProgress, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import { newOrder } from "../Services/firebase";

const Cart = () => {
    const {
        cart,
        removeItem,
        getTotalPrice,
        clear,
        getTotalProductsPrice
    } = useContext(cartContext);

    const [loading, setLoading] = useState(false);
    const [idOrder, setIdOrder] = useState(null);
    const [errorMsg, setErrorMsg] = useState([]);
    const [userData, setUserData] = useState({
        name: "", phone: "", email: "", email2: ""
    });

    const onChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    const handleOnSubmit = (event) => {
        let newErrors = [];
        event.preventDefault();
        if (userData.name === "") newErrors.push("Nombre es requerido.");
        if (userData.phone === "") newErrors.push("Teléfono es requerido.");
        if (userData.email === "") newErrors.push("Email es requerido.");
        if (userData.email2 === "") newErrors.push("Repita su Email es requerido.");
        if (userData.email !== "" && userData.email2 !== ""
        && userData.email2 !== userData.email) newErrors.push("Ambos Emails deben coincidir.");

        setErrorMsg(newErrors);
    
        if (newErrors.length === 0) {
            const {
                name, phone, email
            } = userData;

            const newCart = cart.map(({
                id, title, price
            }) => ({id, title, price}));
    
            let orderData = {
                buyer: {
                    name, phone, email
                },
                items: newCart,
                total: getTotalProductsPrice(),
                date: new Date(),
            }
            
            setLoading(true);
            newOrder(orderData).then(order => {
                setIdOrder(order);
                clear();
                setLoading(false);
            });
        } 
    }

    return (
        <div style={{
            padding:"60px",
        }}>
            {
                cart.length === 0
                ?
                <div>
                    <Typography align="center">
                        No se encontraron ítems en el carrito.
                    </Typography>
                    <Typography align="center">
                        <Link to="/">Ir al Inicio.</Link>
                    </Typography>
                </div>
                :
                <div style={{
                    padding: "30px 60px",
                    background: 'rgb(255, 255, 255)',
                    border: '1px solid rgba(29, 50, 153, 0.1)',
                    boxShadow: 'rgb(29 50 153 / 2%) 0px 100px 49px, rgb(29 50 153 / 2%) 0px 64.8148px 28.6968px, rgb(29 50 153 / 1%) 0px 38.5185px 15.6074px, rgb(29 50 153 / 1%) 0px 20px 7.9625px, rgb(29 50 153 / 1%) 0px 8.14815px 3.99259px, rgb(29 50 153 / 0%) 0px 1.85185px 1.92824px',
                }}>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={2}></Grid>
                        <Grid item xs={3}>
                            <Typography align="center">
                                <strong>Título</strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography align="center">
                                <strong>Unidad/es</strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography align="center">
                                <strong>Precio</strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography align="center">
                                <strong>Remover</strong>
                            </Typography>
                        </Grid>
                    </Grid>
                    {
                        cart.map((product) => {
                            return (
                                <Grid container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    key={product.id}
                                >
                                    <Grid item xs={2}>
                                        <div style={{
                                            textAlign: "center"
                                        }}>
                                            <img
                                                src={product.img}
                                                alt={product.title}
                                                style={{
                                                    maxHeight: "70px"
                                                }}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                      <Typography align="center">{product.title}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                    <Typography align="center">{product.quantity}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography align="center">$ {getTotalPrice(product)}</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Typography align="center">
                                            <IconButton onClick={() => removeItem(product.id)}>
                                                <Delete/>
                                            </IconButton>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }

                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        style={{
                            marginTop: "50px"
                        }}
                    >
                        <Grid item xs={6}>
                            <Typography align="center">
                                <Button onClick={clear} variant="outlined">
                                    Vaciar carrito
                                </Button>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography align="center">
                                Precio total de la compra: <strong>$ {getTotalProductsPrice()}</strong>
                            </Typography>
                        </Grid>
                    </Grid>
                    

                    <div style={{
                        maxWidth: "500px",
                        margin: "70px auto 0 auto"
                    }}>
                        <Typography align="center">Complete el formulario para finalizar la compra</Typography>

                        {
                            loading && <LinearProgress style={{
                                marginTop: "20px"
                            }}/>
                        }
                        {
                            !loading &&
                            <form onSubmit={handleOnSubmit} noValidate>
                                <Grid container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{
                                        marginTop: "20px"
                                    }}
                                    spacing={3}
                                >
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Nombre"
                                            variant="filled"
                                            fullWidth
                                            name="name"
                                            value={userData.name}
                                            onChange={onChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Teléfono"
                                            variant="filled"
                                            fullWidth
                                            name="phone"
                                            value={userData.phone}
                                            onChange={onChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Email"
                                            variant="filled"
                                            fullWidth
                                            name="email"
                                            value={userData.email}
                                            onChange={onChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Repita su Email"
                                            variant="filled"
                                            fullWidth
                                            name="email2"
                                            value={userData.email2}
                                            onChange={onChange}
                                            required
                                        />
                                    </Grid>
                                    {
                                        errorMsg.map((error, index) =>
                                        <Grid key={index} item xs={12}>
                                            <Alert severity="error">{error}</Alert>
                                        </Grid>
                                        )
                                    }
                                    <Grid item xs={12}>
                                        <Button type="submit" fullWidth variant="contained">
                                            Finalizar la compra
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        }
                    </div>


                </div>
            }

            <Dialog
                open={idOrder !== null}
                onClose={() => setIdOrder(null)}
            >
                <DialogContent>
                    <Typography>
                        Su orden ha sido realizada.<br/>
                        El ID es: {idOrder}
                    </Typography>
                </DialogContent>
                
            </Dialog>
        </div>
    );
}

export default Cart;