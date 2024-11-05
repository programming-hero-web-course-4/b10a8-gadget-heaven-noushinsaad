import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { createContext, useContext, useState } from "react";
// import { useState } from "react";


const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};



const Root = () => {
    // const [count, setCount] = useState(0)
    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);
    let totalPrice = 0;
    cart.forEach(product => {
        totalPrice += product.price;
    });

    const addToCart = (product) => {
        const productExists = cart.some(item => item.product_id === product.product_id);
        if (productExists) {
            alert(`Product  ${product.product_title} is already in the cart.`)
        }
        else {
            setCart([...cart, product]);
        }
    }

    const addToWishList = (product) => {
        const productExists = wishList.some(item => item.product_id === product.product_id);
        if (productExists) {
            alert(`Product  ${product.product_title} is already in the wishlist.`);
        }
        else {
            setWishList([...wishList, product]);
        }
    }

    return (
        <div className="sora">
            <CartContext.Provider value={{ cart, wishList, addToCart, totalPrice, addToWishList, setCart }}>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </CartContext.Provider>
        </div>
    );
};

export default Root;