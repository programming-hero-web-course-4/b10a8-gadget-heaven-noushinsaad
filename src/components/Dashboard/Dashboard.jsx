import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ProductList from '../ProductList/ProductList';
import { useCart } from '../Root/Root';



const Dashboard = () => {
    const { cart, totalPrice, wishList, setCart } = useCart();

    const handleSortByPrice = () => {
        const sortedCartList = [...cart].sort((a, b) => b.price - a.price);
        console.log(sortedCartList)
        setCart(sortedCartList)
    }

    return (
        <div className='bg-gray-100'>

            <Tabs>
                <div className="text-center bg-purple-600 p-4">

                    <div className="text-white">
                        <h1 className="md:w-3/4 mx-auto text-3xl md:text-4xl  lg:text-6xl font-bold">Dashboard</h1>
                        <p className="py-6 md:w-1/3 mx-auto">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <TabList className="flex gap-6">
                            <Tab><button className='btn px-6 rounded-full'>Cart</button></Tab>
                            <Tab><button className='btn px-6  rounded-full'>Wish List</button></Tab>
                        </TabList>
                    </div>

                </div>



                <TabPanel>
                    <div className='w-3/4 mx-auto flex justify-between items-center p-3'>
                        <h2 className='text-2xl font-semibold'>Cart</h2>
                        <div className='flex items-center justify-between gap-6'>
                            <h1 className='text-xl font-semibold'>Total Cost: {totalPrice}</h1>
                            <button onClick={handleSortByPrice} className='btn btn-primary'>Sort By Price</button>
                            <button className='btn btn-accent'>Purchase</button>
                        </div>
                    </div>
                    <div className='space-y-4 py-8'>
                        {
                            cart.map(product => <ProductList key={product.product_id} product={product}></ProductList>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl text-center my-4 bg-gray-200 p-4 font-semibold rounded-xl'>Product I wish to Buy</h2>
                    <div className='space-y-4 py-8'>
                        {
                            wishList.map(product => <ProductList key={product.product_id} product={product}></ProductList>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;