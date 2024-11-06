import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import ProductList from '../ProductList/ProductList';
import { useCart } from '../Root/Root';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Modal from '../Modal/Modal';
import { Helmet } from "react-helmet";



const Dashboard = () => {
    const { cart, totalPrice, wishList, setCart, deleteProductFromCart, deleteProductFromWishList, clearCart } = useCart();

    const [activeTab, setActiveTab] = useState('cart');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSortByPrice = () => {
        if (cart.length > 1) {
            const sortedCartList = [...cart].sort((a, b) => b.price - a.price);
            console.log(sortedCartList)
            setCart(sortedCartList)
            toast("Product Sorted")
        }
        else {
            toast.info("Cart is empty or only one product is added in the cart");
        }
    }

    const handlePurchase = () => {
        if (cart.length > 0) {
            setIsModalOpen(true);
        }
        else {
            toast.warn("Cart is empty");
        }
    }

    const handleProceedModal = () => {
        setIsModalOpen(false);
        clearCart();
        toast.success("Order placed successfully!")
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // toast.success("Order placed successfully!")
    }


    return (
        <div className='bg-gray-100'>

            <Helmet>
                <title>Dashboard - Gadget Heaven</title>
            </Helmet>

            <Tabs>
                <div className="text-center bg-purple-600 p-4">

                    <div className="text-white">
                        <h1 className="md:w-3/4 mx-auto text-3xl md:text-4xl  lg:text-6xl font-bold">Dashboard</h1>
                        <p className="py-6 md:w-1/3 mx-auto">
                            Explore the latest gadgets that will take your experience to the next level.
                            From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <TabList className="flex flex-col md:flex-row gap-6">
                            <Tab>
                                <button onClick={() => setActiveTab('cart')}
                                    className={`btn btn-wide rounded-full ${activeTab === 'cart' ? 'bg-white text-black' :
                                        'bg-purple-800 text-white'}`}>
                                    Cart
                                </button>
                            </Tab>
                            <Tab>
                                <button
                                    onClick={() => setActiveTab('wishlist')}
                                    className={`btn btn-wide rounded-full ${activeTab === 'wishlist' ? 'bg-white text-black' :
                                        'bg-purple-800 text-white'}`}>
                                    Wish List
                                </button></Tab>
                        </TabList>
                    </div>

                </div>



                <TabPanel>
                    <div className='bg-gray-200 my-4 rounded-xl'>
                        <div className='w-3/4 mx-auto flex flex-col lg:flex-row  items-center justify-between gap-6 py-3'>
                            <h2 className='text-2xl font-semibold'>Cart</h2>
                            <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-6'>
                                <h1 className='text-xl font-semibold flex items-center gap-1'>Total Cost: <FaBangladeshiTakaSign /> {totalPrice}</h1>
                                <div className='flex flex-col md:flex-row gap-2'>
                                    <button
                                        onClick={handleSortByPrice}
                                        className='btn btn-wide rounded-full  bg-purple-200'>
                                        Sort By Price
                                    </button>
                                    <button
                                        onClick={handlePurchase}
                                        className='btn btn-wide rounded-full bg-purple-400'>
                                        Purchase
                                    </button>
                                </div>

                                <Modal
                                    isOpen={isModalOpen}
                                    handleProceed={handleProceedModal}
                                    handleClose={handleCloseModal}
                                    totalPrice={totalPrice}
                                ></Modal>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4 py-8'>
                        {
                            cart.map(product => <ProductList
                                key={product.product_id}
                                product={product}
                                deleteProduct={() => deleteProductFromCart(product.product_id)}
                                listType="cart"
                            ></ProductList>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl text-center my-4 bg-gray-200 p-4 font-semibold rounded-xl'>Product I wish to Buy</h2>
                    <div className='space-y-4 py-8'>
                        {
                            wishList.map(product => <ProductList
                                key={product.product_id}
                                product={product}
                                deleteProduct={() => deleteProductFromWishList(product.product_id)}
                                listType="wishlist"
                            ></ProductList>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;