import { FaBangladeshiTakaSign } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ProductList = ({ product, deleteProduct, listType }) => {
    const { product_id, product_title, product_image, price, description } = product;

    return (
        <div className="w-3/4 mx-auto card shadow-xl">
            <div className="card-body">
                <div className="card-actions justify-end">
                    <button
                        onClick={deleteProduct}
                        className="btn btn-square btn-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="h-fit bg-gray-200 w-full md:w-1/2 lg:w-1/4 rounded-xl">
                        <img className="h-[200px] object-content w-full rounded-xl" src={product_image} alt="" />
                    </div>
                    <div className="space-y-3">
                        <p className="text-3xl font-bold">{product_title}</p>
                        <p className="text-lg opacity-75">{description}</p>
                        <p className="text-xl font-semibold opacity-80 flex items-center gap-1">Price: <FaBangladeshiTakaSign />{price}</p>
                        <Link to={`/products/${product_id}`}>
                            <button
                                className="btn btn-wide rounded-full mt-4 bg-purple-400">
                                View Details
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

ProductList.propTypes = {
    product: PropTypes.object.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    listType: PropTypes.string.isRequired
}

export default ProductList;