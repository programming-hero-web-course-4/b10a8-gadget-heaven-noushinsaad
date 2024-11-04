import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
// import { useState } from "react";




const Root = () => {
    // const [count, setCount] = useState(0)

    return (
        <div className="sora">

            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;