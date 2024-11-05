import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {


    return (
        <div className="bg-gray-50">
            <Helmet>
                <title>Home - Gadget Heaven</title>
            </Helmet>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;