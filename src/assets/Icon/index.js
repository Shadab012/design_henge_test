import React from "react";
import { FiPhoneCall, FiHeadphones } from 'react-icons/fi';
import { MdMarkEmailRead } from 'react-icons/md';
import { AiFillStar, AiOutlineMenu } from 'react-icons/ai';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { IoShareSocialOutline } from 'react-icons/io5';
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';

const Icon = ({ cls, type }) => {
    let icon;

    switch (type) {
        case 'phone':
            icon = <FiPhoneCall />;
            break;
        case 'email':
            icon = <MdMarkEmailRead />;
            break;
        case 'fb':
            icon = <BiLogoFacebook />;
            break;
        case 'twt':
            icon = <BiLogoTwitter />;
            break;
        case 'insta':
            icon = <BiLogoInstagram />;
            break;
        case 'mobile':
            icon = <AiOutlineMenu />;
            break;
        case 'social':
            icon = <IoShareSocialOutline />;
            break;
        case 'star':
            icon = <AiFillStar />;
            break;
        case 'left':
            icon = <BsChevronLeft />;
            break;
        case 'right':
            icon = <BsChevronRight />;
            break;
        default:
            icon = <FiHeadphones />;
            break;
    }

    return (
        <span className={cls}>{icon}</span>
    );
}

export default Icon