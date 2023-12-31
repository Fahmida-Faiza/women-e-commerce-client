import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {FaShoppingCart} from 'react-icons/fa'
import useCart from '../hooks/useCart'
const Navbar = () => {
    const {user, logOut} =useContext(AuthContext);

    const [cart] = useCart()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navLink=
    <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/contact">Contact</Link></li>
            <li>
                <Link to="/dashboard/cart">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </Link>
            </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">E-Commerce Women</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to="/login" className="btn btn-accent">Login</Link> */}
                    {
                        user ? <>
                            <span>{user?.displayName}</span>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            {/* <span>{user?.photoURL}</span> */}
                            <Link onClick={handleLogOut} className="btn btn-accent">Logout</Link>
                        </> : <>
                                <Link className="btn btn-accent" to="/login">Login</Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;