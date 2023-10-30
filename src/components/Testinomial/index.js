import React, { useEffect, useState } from "react"
import Icon from "../../assets/Icon"
import Alex_icon from "../../assets/alex.png"

const cardData = [{
    name: "Alex",
    designation: "Lone Star Neurology",
    link: Alex_icon,
    desc: "“As usual, exceptional service from byteLogik. Thanks again for all your help resolving our issues!”"
},
{
    name: "John",
    designation: "Supper Star Neurology",
    link: Alex_icon,
    desc: "“As always, exceptional service from byteLogik. Thanks again for all your help resolving our issues!”"
},
{
    name: "David",
    designation: "Big Star Neurology",
    link: Alex_icon,
    desc: "“As occassional, exceptional service from byteLogik. Thanks again for all your help resolving our issues!”"
}]
const TestinomialCard = ({ data }) => {
    const { name, designation, link, desc } = data
    return <div className="flex flex-col items-center bg-[#fff] py-[30px] px-[80px] gap-2 w-[1000px]  max-[600px]:w-[90%]  max-[600px]:px-[30px]">
        <img className="h-[55px] w-[55px]" src={link} alt="Alex_icon" />
        <h3 className="text-[26px] font-[700] text-[#000]">{name}</h3>
        <h4 className="text-[16px] font-400 text-[#000]" >{designation}</h4>
        <p className="text-[18px] font-500 text-[#000] text-center">{desc}</p>
        <div className="flex">{[1, 2, 3, 4, 5].map((star) => <Icon type="star" cls="text-[yellow]" />)}</div>
    </div>
}
const Testinomial = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setSlideIndex(slideIndex + 1);
            if (slideIndex != cardData.length - 1) {
                setSlideIndex(slideIndex + 1);
            } else if (slideIndex == cardData.length - 1) {
                setSlideIndex(0);
            }
        }, 2000);

        return () => {
            clearInterval(id);
        };
    }, [slideIndex]);
    return <div className="flex flex-col items-center justify-center bg-[#fefefe]">
        <h2 className="text-[50px] font-[500] text-[black] max-[600px]:text-center"> <span className="text-[#f00]">Client</span> Testinomials</h2>
        <div className="flex items-center">
            <Icon type="left" cls="text-[#000] mr-[30px] " />
            <TestinomialCard data={cardData[slideIndex]} />
            <Icon type="right" cls=" text-[#000] ml-[30px]" />
        </div>
    </div>
}

export default Testinomial