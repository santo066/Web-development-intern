import logo from "../../../assets/img/10001 (1).png"
import apple from "../../../assets/img/Logo (1).png"
import google from "../../../assets/img/Google Play logo.png"
export default function Footer() {
    const link = <>
        <li><a>Privacy</a></li>
        <li><a>Policy</a></li>
        <li><a>Terms</a></li>
        <li><a>Services</a></li>
    </>
    return (
        <div>
            <footer className="footer p-10 bg-black text-white ">
                <aside>
                    <a className="">
                        <img src={logo} className="w-11 h-11" alt="" />
                    </a>
                    {/* button  */}
                    <div className="md:flex grid text-black justify-items-center gap-3 md:gap-8 mt-[35px]">
                        <a href="">
                            <div className="flex  gap-3 pl-2 rounded-xl items-center w-[186px] h-[68px] bg-[#F4F4F4]">
                                <img src={apple} className="w-[30px] h-[35px]" alt="" />
                                <div className="leading-[20px]">
                                    <p className="font-medium text-sm">Download on the</p>
                                    <h1 className="text-[27px] font-bold">App Store</h1>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="flex  gap-3 pl-2 rounded-xl items-center w-[186px] h-[68px] bg-[#F4F4F4]">
                                <img src={google} className="w-[30px] h-[35px]" alt="" />
                                <div className="leading-[20px]">
                                    <p className="font-medium text-sm">GET IT ON</p>
                                    <h1 className="text-[22px] font-bold">Google Play</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            <div className="navbar bg-black text-white px-">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <a className="text-sm">© 2023 pizza.All right reserved</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            link
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}