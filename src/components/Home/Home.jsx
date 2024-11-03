import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";

const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div>
            <Banner></Banner>
            <h3 className="text-3xl md:text-5xl text-center font-bold">Explore Cutting-Edge Gadgets {product}</h3>
        </div>
    );
};

export default Home;