import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};



const Root = () => {
    const [cartCount, setCartCount] = useState(0)
    const [wishListCount, setWishListCount] = useState(0)
    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);

    let totalPrice = 0;
    cart.forEach(product => {
        totalPrice += product.price;
    });

    const addToCart = (product) => {
        const productExists = cart.some(item => item.product_id === product.product_id);
        if (!productExists && product.stock_quantity > 0) {
            setCart([...cart, product]);
            setCartCount(cartCount + 1);
            toast.success(`${product.product_title} added to the Cart Successfully`)
        }
        else {
            toast.warn(`Product  ${product.product_title} is already in the cart.`);
        }
    };

    const addToWishList = (product) => {
        const productExists = wishList.some(item => item.product_id === product.product_id);
        if (productExists) {
            toast.warn(`Product  ${product.product_title} is already in the wishlist.`);
        }
        else {
            setWishList([...wishList, product]);
            setWishListCount(wishListCount + 1)
            toast.success(`${product.product_title} added to the Wish list Successfully`)
        }
    }


    const deleteProductFromCart = (productId) => {
        const updatedProducts = cart.filter((product) => product.product_id !== productId);
        setCart(updatedProducts);
        setCartCount(cartCount - 1);
        toast.info("Deleted from the Cart")
    };

    const deleteProductFromWishList = (productId) => {
        const updatedProducts = wishList.filter((product) => product.product_id !== productId);
        setWishList(updatedProducts);
        setWishListCount(wishListCount - 1);
        toast.info("Deleted from the wish list")
    };


    return (
        <div className="sora">
            <CartContext.Provider
                value={
                    {
                        cart, wishList, addToCart, totalPrice, addToWishList, setCart,
                        cartCount, wishListCount, deleteProductFromCart, deleteProductFromWishList
                    }
                }>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
                <ToastContainer />
            </CartContext.Provider>
        </div>
    );
};

export default Root;