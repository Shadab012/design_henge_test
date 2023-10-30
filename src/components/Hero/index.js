import React from "react";
import banner from '../../assets/banner.png'
import Offer from "./Offer";

const Hero = () => {
    return <> <div className=' w-full' style={{ backgroundImage: `url(${banner})` }}>
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='w-[500px] text-center text-white max-[600px]:w-[90%]'>
                <div className='max-[600px]:flex flex-col items-center'>
                    <h1 className='leading-90 text-90 font-600 max-[600px]:leading-[50px] text-[50px]'>Business
                        Technology</h1>
                    <h3 className='text-50 font-500 max-[600px]:relative '>THAT WORKS!</h3>
                    <div className="w-[500px] h[40px]  bg-[#FF0000] text-[#FF0000] mt-[-30px] max-[600px]:w-[80%]">box</div>
                </div>
                <p className="text-[22px] font-400 mt-[10px] leading-[32px]" >
                    We promise to keep your business connected and transparerband secure solution,
                    backed by suppord that is resposive ralaibal and local to the dallas Worth metprolex.
                </p>
            </div>
        </div>

    </div>
        <Offer />
    </>
}

export default Hero 