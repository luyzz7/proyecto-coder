import React, { createContext, useState } from "react";

export const cartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addItem = (item, quantity) => {
        const product = cart.find(product => product.id === item.id);
        if (product) {
            if (product.quantity + quantity <= product.stock) {
                const newCart = [
                    ...cart.filter(product => product.id !== item.id),
                    {
                        ...product,
                        quantity: product.quantity + quantity
                    }
                ];
                setCart(newCart);
            }
        } else {
            const newCart = [
                ...cart,
                {
                    ...item,
                    quantity
                }
            ];
            setCart(newCart);
        }
    }

    const removeItem = (itemId) => {
        const newCart = [
            ...cart.filter(product => product.id !== itemId),
        ];
        setCart(newCart);
    }
    
    const clear = () => setCart([]);

    const isInCart = (itemId) => cart.find(product => product.id === itemId) !== null;

    const getProductQuantity = (itemId) => {
        let quantity = 0;
        const product = cart.find(product => product.id === itemId);
        if (product) {
            quantity = product.quantity;
        }

        return quantity;
    };

    const getTotalProducts = () => {
        let total = 0;
        cart.forEach(product => {
            total = total + product.quantity
        });
        return total;
    }

    const getTotalPrice = (product) => product.price * product.quantity;

    const getTotalProductsPrice = () => {
        let total = 0;
        cart.forEach(product => {
            total = total + getTotalPrice(product)
        });
        return total;
    }

    return (
        <cartContext.Provider
            value={{
                cart,
                removeItem,
                clear,
                addItem,
                isInCart,
                getTotalProducts,
                getTotalPrice,
                getTotalProductsPrice,
                getProductQuantity
            }}
        >
            { children }
        </cartContext.Provider>
    );
};

export default CartContextProvider;