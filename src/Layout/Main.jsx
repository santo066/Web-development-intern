import { Outlet } from "react-router-dom";
import Header from "../Pages/Home/Header/Header";
import Footer from "../Pages/Home/Footer/Footer";

export default function Main(){
    return(
        <div className="md:max-w-[1310px] max-w-[300px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}