import { FaBangladeshiTakaSign } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { product_id, product_title, product_image, price } = product;
    return (
        <div className="card p-4 border-2 shadow-xl h-fit">
            <figure className="w-full rounded-xl h-[200px] bg-gray-200">
                <img className='w-full h-full object-contain'
                    src={product_image}
                    alt={product_title} />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title">{product_title}</h2>
                <p className="flex items-center gap-1 opacity-70">Price: <FaBangladeshiTakaSign />{price}</p>
                <div className="card-actions">
                    <Link to={`/products/${product_id}`}>
                        <button
                            className="btn btn-md bg-white rounded-full outline outline-purple-400 text-purple-600">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
}

export default Product;