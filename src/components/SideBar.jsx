import { useState } from "react";
import {
    MdOutlineKeyboardDoubleArrowLeft,
    MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import CountdownTimer from "./CounterDown";
import Bar from "./Bar";


const SideBar = ({ open, setOpen }) => {
    return (
        <>
            <aside className={`border-r-[2px] border-boClr py-4 px-3 ${open ? '': 'overflow-hidden'}`}>
                <div className={`${open ? "flex items-center justify-between border-b-[1px] border-boClr" : "none"} py-5`}>
                    {open && (
                        <div className="flex items-center">
                            <div className="p-2 bg-four w-10 h-10 rounded-ROne">
                                <img src="assets/humanoid-robot.svg" alt="" />
                            </div>
                            <h1 className="font-bold text-lg ml-2">Hamadroid</h1>
                        </div>
                    )}
                    {open ? (
                        <div
                            className="bg-one p-1 border-[1px] rounded-ROne cursor-pointer
                        hover:bg-three hover:text-one duration-700"
                            onClick={() => setOpen(!open)}
                        >
                            <MdOutlineKeyboardDoubleArrowLeft
                                size={22}
                            />
                        </div>
                    ) : (
                        <div
                            className="bg-one w-fit fixed z-20 md:absolute p-1 border-[1px] rounded-ROne cursor-pointer
                        hover:bg-three hover:text-one duration-700"
                            onClick={() => setOpen(!open)}
                        >
                            <MdOutlineKeyboardDoubleArrowRight
                                size={22}
                            />
                        </div>
                    )}
                </div>
                <div className={`${open ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                <div className={`flex items-center mt-5 ${open ? 'gap-2' 
                : 'gap-5 w-10 pr-1' }`}>
                    <img src="/assets/Oval.png" alt="" className={`w-14`} />
                    <div>
                        <h3 className="text-two font-bold md:text-[1rem]">Good morning. 👋</h3>
                        <h2 className="font-semibold md:text-[0.90rem]">Tom Cook</h2>
                    </div>
                </div>
                <Bar open={open} />
                </div>
                <CountdownTimer open={open} />
            </aside>
        </>
    );
};

export default SideBar;
