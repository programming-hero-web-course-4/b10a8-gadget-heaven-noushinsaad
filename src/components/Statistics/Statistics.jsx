import { Helmet } from "react-helmet";
import { useEffect, useState } from 'react';
import {
    ComposedChart,

    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,

    ResponsiveContainer
} from 'recharts';




const Statistics = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('./productsData.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])



    return (
        <div className="bg-gray-50">
            <Helmet>
                <title>Statistics - Gadget Heaven</title>
            </Helmet>
            <div className="text-center bg-purple-600 p-6 text-white">
                <h1 className="md:w-3/4 mx-auto text-3xl md:text-4xl  lg:text-6xl font-bold">Statistics</h1>
                <p className="py-6 md:w-1/3 mx-auto">
                    Explore the latest gadgets that will take your experience to the next level.
                    From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                    data={allProducts}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="product_title" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statistics;