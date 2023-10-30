import React from "react";
import mainLogo from "../../../assets/logo.png"
import Icon from "../../../assets/Icon";
const Navbar = () => {
    return (
        <div>
            <div className="max-with px-10% full bg-white h-[86px] flex justify-between items-center font-railway">
                <img src={mainLogo} className="w-[160px] h-[50px]" />
                <div className="flex gap-12 max-[600px]:hidden">
                    <ul className="flex gap-10 text-black mt-2 text-lg font-400">
                        {
                            ["HOME", "SERVICES", "CONTACT US"].map((page, i) => <li key={i}>{page}</li>)
                        }
                    </ul>
                    <button className="px-6 py-2 rounded-md font-bold bg-[#FF0000] text-16 text-#fff font-700">BOOK AND APPOINTMENT</button>
                </div>
                <span className="hidden max-[600px]:block"><Icon type="mobile" cls="text-[#000]" /></span>
            </div>
        </div>
    );
}

export default Navbar;