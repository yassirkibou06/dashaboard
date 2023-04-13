import React from "react";
import { BsStopwatch } from "react-icons/bs";


export default function Timer({
  milliseconds,
  seconds,
  minutes,
  hours,
  changeSeconds,
  changeMinutes,
  changeHours,
}) {
  return (
    <div className="">
      <h4 className="font-medium text-xs">Start a new task</h4>
      <h3 className="font-semibold text-lg text-black">Humadroid</h3>
      <div className="flex items-center justify-center gap-2 my-2">
      <div className="border-[2px] border-three rounded-[2px]">
        <input value={hours} onChange={changeHours} className="w-10 px-2" />
      </div>{""}
      <div className="border-[2px] border-three rounded-[2px]">
        <input value={minutes} onChange={changeMinutes} className="w-10 px-2"/>
      </div>{""}
      <div className="border-[2px] border-three rounded-[2px]">
        <input value={seconds} onChange={changeSeconds} className="w-10 px-2"/>
      </div>{""}
      </div>
    </div>
  );
}