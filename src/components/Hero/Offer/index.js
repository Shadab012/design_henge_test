import React from 'react'
import rate from '../../../assets/rate.png'
import management from '../../../assets/management.png'
import servers from '../../../assets/servers.png'

const cardData = [{ title: <h2 className='flex flex-col ml-2 justify-center text-[black] text-[26px] font-500 leading-[26px]'>EXTENSIVE <br /><span className='text-[#f00]'>SERVICES</span></h2>, ico: servers, desc: "We have the ability to handle all your IT needs, from help desk and server support to cloud and cyber security." },
{ title: <h2 className='flex flex-col ml-2 justify-center text-[black] text-[26px] font-500 leading-[26px]'>LOWER <br /><span className='text-[#f00]'>COSTS</span></h2>, ico: rate, desc: "We customize our managed IT services to fit your specific needs. You pay only for what you need, at a very competitive rate." },
{ title: <h2 className='flex flex-col ml-2 justify-center text-[black] text-[26px] font-500 leading-[26px]'>AWESOME<br /> <span className='text-[#f00]'>STAFF</span></h2>, ico: management, desc: "All of our associates are experts at what they do, and they’ll provide you with the best service and treat you like one of the." }]
const Card = ({ data, index }) => {
    const { title, ico, desc } = data
    return <div className='bg-[#fff] shadow-3xl' style={index == 0 ? { borderBottomLeftRadius: 40, borderTopLeftRadius: 40 } : index == 2 ? { borderBottomRightRadius: 40, borderTopRightRadius: 40 } : {}}>
        <header className='flex align-center ' style={index == 0 ? { borderTopLeftRadius: 40 } : {}}>
            <div className='bg-[#efefef] h-w-[80px] p-[14px] rounded-br-xl' style={index == 0 ? { borderTopLeftRadius: 40 } : {}} ><img src={ico} alt="card_icons" style={{ height: 50, width: 50 }} /></div>
            {title}
        </header>
        <p className='text-[#414042] font-400 text-[18px] pl-[20px] pt-[20px] pb-[40px]'>{desc}</p>
    </div>
}
const Offer = () => {
    return <div className='flex justify-center px-15% mt-[-140px] leading-[25px] first:rounded-l-xl max-[600px]:flex-col'>
        {cardData.map((data, i) => <Card data={data} index={i} />)}
    </div>
}

export default Offer