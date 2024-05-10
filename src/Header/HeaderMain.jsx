import Navbar from "./Navbar";
// import NavbarBody from "./NavbarBody";
import "../index.css"
import { Outlet } from "react-router-dom";
// import photos from "../assets/images/Home_Backgrounds.png"

const HeaderMain = () => {
    return (
        <div>

            <div className=" pt-3 pb-3 bg-gray-200 ">
                <div className="container mx-auto">
                    <div className="">
                        <Navbar></Navbar>
                    </div>

                </div>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default HeaderMain;