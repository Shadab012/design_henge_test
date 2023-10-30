import React from "react";
import founder_bg from '../../assets/our-founder-bg.png'
import service_img from '../../assets/service.png'
const About = () => {
    return <div className="flex bg-cover bg-no-repeat py-[50px] max-[600px]:flex-col items-center" style={{ backgroundImage: `url(${founder_bg})` }}>
        <div className="w-[50%] flex justify-center max-[600px]:w-[90%]">
            <img className="h-[610px]" src={service_img} alt={service_img} />
        </div>
        <div className="w-[50%] pr-[50px] py-[100px] max-[600px]:w-[90%] pr-[0px] flex flex-col items-center py-[50px]">
            <h2 className="text-[black] text-[50px] font-500"> <span className="text-[#f00]">Our</span> Founder</h2>
            <p className="text-[#414042] text-[20px] leading-[30px] font-400 py-[15px] max-[600px]:text-center">“Since 2002, we’ve been helping businesses in Texas harness the latest technology. byteLogik was developed to offer a one-stop shop for businesses to get what they need. Our goal is to keep you connected to the things that matter to you, delivered through a high quality and dynamic customer experience at competitive pricing.</p>
            <h4 className="text-[#010101] text-[26px] leading-[32px] font-400 pr-[100px] max-[600px]:pr-[0px] text-center">You have my personal commitment to excellence on behalf of our staff.”</h4>
            <button className="text-[16px] bg-[#f00] text-[#fff] font-700 py-[10px] px-[20px] mt-4 rounded">DISCOVER MORE</button>
        </div>
    </div>
}

export default About