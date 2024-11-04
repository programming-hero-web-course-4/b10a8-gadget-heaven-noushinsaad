import { useEffect, useState } from "react";
import Product from "../Product/Product";

const categories = ["All Products", "Laptop", "Accessories", "Phone", "Smartwatch", "iPhone", "MacBook"];

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    useEffect(() => {
        fetch('./productsData.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);

    useEffect(() => {   
        setProducts(allProducts);
    }, [allProducts]);

    const handleCategory = (category) => {
        setSelectedCategory(category);
        if (category === "All Products") {
            setProducts(allProducts);
            // console.log(allProducts);
        } else {
            const filteredProducts = allProducts.filter(product => product.category === category);
            setProducts(filteredProducts);
        }
    };

    return (
        <div className="py-4">
            <h3 className="text-3xl md:text-5xl text-center font-bold mb-10">Explore Cutting-Edge Gadgets</h3>
            <div className="flex flex-col lg:flex-row gap-4 p-2">
                <div className="col-span-1 flex flex-col border-2 rounded-xl p-6 gap-6 h-fit lg:w-[20%]">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategory(category)}
                            className={`btn ${selectedCategory === category ? "bg-purple-500 text-white"  : "btn-outline"} rounded-full bg-gray-200 `}
                        >
                            {category}
                        </button>
                    ))}

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