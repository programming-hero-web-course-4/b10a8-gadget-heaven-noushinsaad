import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./productsData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h3 className="text-3xl md:text-5xl text-center font-bold mb-10">Explore Cutting-Edge Gadgets</h3>
            <div className="flex flex-col lg:flex-row gap-4 p-2">
                <div className="col-span-1 flex flex-col border-2 rounded-xl p-6 gap-6 h-fit lg:w-[20%]">
                    <div className="btn btn-md bg-gray-200 rounded-full">All Products</div>
                    <div className="btn btn-md bg-gray-200 rounded-full">Laptops</div>
                    <div className="btn btn-md bg-gray-200 rounded-full">Accessories</div>
                    <div className="btn btn-md bg-gray-200 rounded-full">Phones</div>
                    <div className="btn btn-md bg-gray-200 rounded-full">Smart Watches</div>
                    <div className="btn btn-md bg-gray-200 rounded-full">MacBook</div>
                    <div className="btn btn-md bg-gray-200 rounded-full">iPhone</div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        products.map(product => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;