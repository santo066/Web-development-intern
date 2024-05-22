import { Link } from "react-router-dom"
import logo from "../../../assets/img/10001 (1).png"

export default function Header() {
    const link = <>
        <li><a>Restaurants</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            link
                        }
                    </ul>
                </div>
                <a className="">
                    <img src={logo} className="w-11 h-11" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        link
                    }
                    <li>
                        <details>
                            <summary>Page</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            
            <div className="navbar-end">
            <Link className="mr-2 font-medium">Login</Link>
                <a className="btn rounded-3xl text-white bg-[#E94339] hover:bg-[#a84742]">Sign Up </a>
            </div>
        </div>
    )
}