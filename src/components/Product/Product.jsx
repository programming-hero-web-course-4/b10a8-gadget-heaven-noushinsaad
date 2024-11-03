import PropTypes from 'prop-types';

const Product = ({ product }) => {
    const { product_id, product_title, product_image, price } = product;
    return (
        <div className="card p-4 border-2 shadow-xl">
            <figure className="w-full rounded-xl h-[200px] bg-gray-200">
                <img
                    src=""
                    alt={product_title} />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title">{product_title}</h2>
                <p className="opacity-70">Price: {price}</p>
                <div className="card-actions">
                    <button className="btn btn-md bg-white rounded-full outline outline-purple-400 text-purple-600">View Details</button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
}

export default Product;