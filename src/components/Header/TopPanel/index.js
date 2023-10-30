import React from "react";
import Icon from "../../../assets/Icon";
const socialInfo = [{
    type: 'fb', cls: 'text-#fff text-16'
}, {
    type: 'twt', cls: 'text-#fff text-16'
}, {
    type: 'insta', cls: 'text-#fff text-16'
}]
const TopPanel = () => {
    return (
        <div>
            <div className='w-full h-[40px] bg-#4e535a text-#fff max-[600px]:flex justify-end items-center'>
                <div className='px-10% m-auto w-full h-full flex justify-between items-center font-railway max-[600px]:hidden'>
                    <div className="flex justify-between gap-6">
                        <span className='flex items-center gap-2'><Icon cls='text-#fff text-16' type="phone" /> <span lassName='text-xs text-16 font-500'>(817) 77-0-0060</span></span>
                        <span className='flex items-center gap-2'><Icon cls='text-#fff text-16' type="email" /> <span lassName='text-xs text-16 font-500'>info@yourdomain.com</span></span>
                    </div>
                    <div className="flex items-center gap-6 ">
                        <span lassName='text-xs text-16 font-500'>Social Connect</span>
                        <div className="flex gap-6">
                            {socialInfo.map(({ type, cls }) => <Icon type={type} cls={cls} />)}
                        </div>

                    </div>
                </div>
                <span className="hidden max-[600px]:block mr-[10%]"><Icon type="social" cls="text-[#fff]" /></span>
            </div>
        </div>
    );
}

export default TopPanel;