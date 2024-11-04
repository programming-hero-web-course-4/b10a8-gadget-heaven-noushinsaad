import { useLoaderData, useParams } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";


const ProductDetails = () => {



    const { productId } = useParams();

    const data = useLoaderData();

    const product = data.find(product => product.product_id === productId);

    const { product_id, product_title, product_image, price, availability, description, Specification, rating } = product;

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    const handleAddToCart = ( product_id ) => {
        console.log('added',  product_id );
    }

    const handleAddToWishList = ( product_id ) => {
        console.log('added wish',  product_id );
    }



    return (
        <div className='relative bg-gray-100'>
            <div>
                <div className="text-center bg-purple-600 h-[400px] pt-4">
                    <div className="text-white">
                        <h1 className="md:w-3/4 mx-auto text-3xl md:text-4xl  lg:text-6xl font-bold">Product Details</h1>
                        <p className="py-6 md:w-1/2 mx-auto">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto border-2 p-2 bg-white rounded-xl relative -top-44'>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="border-2 lg:w-2/5 h-[250px] lg:h-[500px] bg-gray-300 rounded-xl p-4">
                        <img className="h-full w-full object-cover rounded-xl" src={product_image} alt={product_title} />
                    </div>
                    <div className="lg:w-3/5 rounded-xl p-3 space-y-4">
                        <h2 className="text-3xl font-extrabold">{product_title}</h2>
                        <p className="text-xl font-semibold opacity-80 flex items-center gap-1">Price: <FaBangladeshiTakaSign />{price}</p>
                        <p className="badge outline outline-2 bg-green-200 outline-green-500 text-lime-700 p-3">
                            {
                                availability ? 'In Stock' : 'Out of Stock'
                            }
                        </p>
                        <p className="opacity-70">{description}</p>
                        <div>
                            <h1 className="font-bold">Specification:</h1>
                            {
                                Specification.map((specification, idx) =>
                                    <li className="opacity-75" key={idx}>{specification}</li>
                                )
                            }
                        </div>
                        <div>
                            <h1 className="font-bold">Rating</h1>
                            <div className="flex gap-2 items-center">
                                <div className="flex">
                                    {[...Array(fullStars)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-500  text-xl" />
                                    ))}
                                    {hasHalfStar && <FaRegStar className="text-gray-300 text-xl" />}
                                </div>
                                <p className="bg-gray-300 p-2 rounded-full">{rating}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleAddToCart(product_id)}
                                className="flex items-center btn rounded-full">Add to Cart <IoCartOutline className="text-2xl" /></button>
                            <button
                                onClick={() => handleAddToWishList(product_id)}
                                className="btn rounded-full"><IoIosHeartEmpty className="text-2xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;