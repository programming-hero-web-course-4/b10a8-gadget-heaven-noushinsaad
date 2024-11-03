import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

const NavBar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>

    return (
        < div className="navbar my-6" >
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-3xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className="btn btn-ghost btn-circle outline">
                    <div className="indicator">
                        <IoCartOutline className="text-2xl" />
                        {/* <span className="badge badge-sm badge-primary indicator-item  rounded-full"></span> */}
                    </div>
                </button>
                <button className="btn btn-ghost btn-circle outline">
                    <div className="indicator">
                        <IoIosHeartEmpty className="text-2xl" />
                        {/* <span className="badge badge-sm badge-primary indicator-item  rounded-full"></span> */}
                    </div>
                </button>
            </div>
        </div >

    );
};

export default NavBar;