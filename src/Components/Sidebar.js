import React from 'react';
import Rebin from '../Assets/logo/embleem@4x.png';
import { GrHomeRounded } from "react-icons/gr";
import { BiBarChartAlt2 } from "react-icons/bi";
import { LuTrash, LuLogOut } from "react-icons/lu";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";


const Sidebar = () => {
  return (
    <section>
      <nav className='flex flex-col justify-between py-10 rounded-r-xl items-center h-screen w-24 bg-white' aria-label='Global'>
        <a className='shadow-md rounded-lg w-14 p-3' href="#">
          <span className='sr-only'>Rebin</span>
          <img className='' src={Rebin} alt="" />
        </a>
        <div className='flex flex-col items-center gap-y-16'>
          <a className='' href="#">
            <span className='sr-only'>Dashboard</span>
            <GrHomeRounded className='w-5 h-auto text-rebin-grey text-rebin-blue-hover'></GrHomeRounded>
          </a>
          <a className='' href="#">
            <span className='sr-only'>Statistics</span>
            <BiBarChartAlt2 className='w-5 h-auto text-rebin-grey text-rebin-blue-hover'></BiBarChartAlt2>
          </a>
          <a className='' href="#">
            <span className='sr-only'>Bins</span>
            <LuTrash className='w-5 h-auto text-rebin-grey text-rebin-blue-hover'></LuTrash>
          </a>
          <a className='' href="#">
            <span className='sr-only'>Navigation</span>
            <RiSendPlaneLine className='w-5 h-auto text-rebin-grey text-rebin-blue-hover'></RiSendPlaneLine>
          </a>
          <a className='' href="#">
            <span className='sr-only'>Profile</span>
            <FaRegUser className='w-5 h-auto text-rebin-grey text-rebin-blue-hover'></FaRegUser>
          </a>
        </div>
        <a className='' href="#">
          <span className='sr-only'>Log out</span>
          <LuLogOut className='w-5 h-auto text-rebin-grey text-rebin-blue-hover'></LuLogOut>
        </a>
      </nav>
    </section>
  );
};

export default Sidebar;
