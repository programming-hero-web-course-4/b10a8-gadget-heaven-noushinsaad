import { useEffect, useState } from "react";

const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div className="">
            <h3 className="text-4xl">Product: {product.length}</h3>
        </div>
    );
};

export default Home;