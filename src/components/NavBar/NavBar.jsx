import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { useCart } from "../Root/Root";

const NavBar = () => {
    const { cartCount, wishListCount } = useCart();

    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/faq'>FAQ</NavLink></li>
    </>

    return (
        <div className={`mx-3 mt-3 ${isHomePage ? "bg-purple-600  rounded-t-xl text-white" : "bg-white text-black"}`}>
            < div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            {links}
                        </ul>
                    </div>
                    <a className="text-3xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3 text-black">
                    <button className="btn btn-ghost bg-white btn-circle outline outline-1 outline-gray-400">
                        <div className="indicator">
                            <IoCartOutline className="text-2xl" />
                            <span className={`${!cartCount ? "hidden" :
                                "outline bg-white text-red-500 indicator-item p-1 rounded-badge"} `}>
                                {cartCount}
                            </span>
                        </div>
                    </button>
                    <button className="btn btn-ghost bg-white btn-circle outline outline-1 outline-gray-400">
                        <div className="indicator">
                            <IoIosHeartEmpty className="text-2xl" />
                            <span className={`${!wishListCount ? "hidden" :
                                "outline bg-white text-green-500 indicator-item p-1 rounded-badge"} `}>
                                {wishListCount}
                            </span>
                        </div>
                    </button>
                </div>
            </div >
        </div>
    );
};

export default NavBar;