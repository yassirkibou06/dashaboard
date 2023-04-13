import React from 'react';
import { NavLink } from "react-router-dom";
import { CgFeed } from 'react-icons/cg';
import {
    HiOutlinePaperAirplane,
    HiOutlineChatAlt2,
    HiOutlineReceiptRefund,
    HiOutlineAcademicCap,
    HiOutlineGift
} from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';


const Bar = ({open}) => {
    const navLink = [
        {
            path: "/Feed",
            name: "Feed",
            icon: <CgFeed />,
            messg: "6"
        },
        {
            path: "/Absences",
            name: "Absences",
            icon: <HiOutlinePaperAirplane />
        },
        {
            path: "/Directory",
            name: "Directory",
            icon: <FiUsers />
        },
        {
            path: "/Feedbacks",
            name: "Feedbacks",
            icon: <HiOutlineChatAlt2 />
        },
        {
            path: "/Refunds",
            name: "Refunds",
            icon: <HiOutlineReceiptRefund />
        },
        {
            path: "/Skills",
            name: "Skills",
            icon: <HiOutlineAcademicCap />
        },
        {
            path: "/Benefits",
            name: "Benefits",
            icon: <HiOutlineGift />
        }
    ]


    return (
        <>
            {
                navLink.map((item, index) => (
                    <NavLink to={item.path} key={index} className={`flex text-tClr ${open ? 'mt-7 p-3 gap-3' : 'gap-5 mt-4 pl-1 w-10 h-10 items-center'} rounded-[15px] 
                    hover:bg-two hover:text-three duration-500`}>
                        <div className='text-2xl'>
                            {item.icon}
                        </div>
                        <div className='relative flex items-center gap-80 md:gap-32'>
                            <h2 className='font-medium md:text-[0.90rem]'>{item.name}</h2>
                            <div className={`${index == 0 ? 'flex items-center justify-center w-5 h-5 bg-orange-600 rounded-full text-one' 
                            : ''}`}>
                                <span className='font-semibold text-sm'>{item.messg}</span>
                            </div>
                        </div>
                    </NavLink>
                ))
            }
        </>
    )
}

export default Bar;