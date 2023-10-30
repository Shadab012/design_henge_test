import React from "react";
import Logo from "../../assets/logo.png"
import Icon from "../../assets/Icon";
const socialInfo = [{
  type: 'fb', cls: 'text-#fff text-[25]'
}, {
  type: 'twt', cls: 'text-#fff text-[25]'
}, {
  type: 'insta', cls: 'text-#fff text-[25]'
}]
const Footer = () => {
  return (
    <div>
      <div className="flex px-[10%] pt-[120px] max-[600px]:flex-col max-[600px]:gap-8 max-[600px]:mt-[520px] max-[500px]:mt-[420px] max-[400px]:mt-[360px]">
        <div className="w-1/4 p-4 max-[600px]:w-[90%] max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center">
          <img src={Logo} alt="logo" />
          <div className="w-[100%] h-[3px] my-[25px] text-[#000] bg-[#000]"></div>
          <h3 className="text-[22px] text-[#000] font-500 mb-[10px]">Follow us</h3>
          <div className="flex gap-6">
            {socialInfo.map(({ type, cls }) => <div className=" flex items-center justify-center bg-[#f00] w-[40px] h-[40px] rounded-full"> <Icon type={type} cls={cls} /> </div>)}
          </div>
        </div>
        <div className="w-1/4 p-4 max-[600px]:w-[90%] max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center">
          <h2 className="text-[18px] text-[#000] font-700">QUICK LINKS</h2>
          <ul className="flex flex-col gap-2 text-black mt-2 text-[14px] font-400 max-[600px]:items-center ">
            {
              ["HOME", "ABOUT US", "SERVICES", "CONTACT US"].map((page, i) => <li key={i}>{page}</li>)
            }
          </ul>
        </div>
        <div className="w-1/4 p-4 max-[600px]:w-[90%] max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center">
          <h2 className="text-[18px] text-[#000] font-700 mb-[10px]">INFORMATION</h2>
          <div className="flex flex-col justify-between gap-2 text-[#000] max-[600px]:items-center">
            <span className='flex items-center gap-2'><Icon cls='text-[#000] text-16' type="phone" /> <span lassName='text-xs text-16 font-500'>(817) 77-0-0060</span></span>
            <span className='flex items-center gap-2'><Icon cls='text-[#000] text-16' type="email" /> <span lassName='text-xs text-16 font-500'>info@yourdomain.com</span></span>
          </div>
        </div>
        <div className="w-1/4 p-4 max-[600px]:w-[90%] max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center">
          <h2 className="text-[18px] text-[#000] font-700 max-[600px]:text-center">Subscribe to our Newsletter</h2>
          <p className="text-[16px] text-[#000] font-500 my-[20px] max-[600px]:text-center">We'll keep you posted with news and updates!</p>
          <div className="flex rounded-2xl border-gray-300">
            <input placeholder="Enter your Email" style={{ borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} />
            <button className="h-[50px] bg-[#f00]" style={{ borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="py-[15px] text-center text-[#000] text-[18px] mt-[20px]" style={{ borderTop: '2px solid #000' }}>
        Copyright @ 2023 bytelogik | DFD Services
      </div>
    </div>
  );
}

export default Footer;